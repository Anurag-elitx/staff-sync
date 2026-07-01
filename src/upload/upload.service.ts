import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UploadService {
  private s3Client: S3Client;

  constructor(private configService: ConfigService) {
    this.s3Client = new S3Client({
      region: this.configService.get<string>('AWS_REGION', 'us-east-1'),
      credentials: {
        accessKeyId: this.configService.get<string>('AWS_ACCESS_KEY_ID', 'dummy_key'),
        secretAccessKey: this.configService.get<string>('AWS_SECRET_ACCESS_KEY', 'dummy_secret'),
      },
    });
  }

  async uploadFile(file: any): Promise<string> {
    const bucketName = this.configService.get<string>('S3_BUCKET_NAME', 'staff-sync-bucket');
    const key = `${uuidv4()}-${file.originalname}`;

    const command = new PutObjectCommand({
      Bucket: bucketName,
      Key: key,
      Body: file.buffer,
      ContentType: file.mimetype,
      ACL: 'public-read',
    });

    try {
      await this.s3Client.send(command);
      return `https://${bucketName}.s3.${this.configService.get('AWS_REGION', 'us-east-1')}.amazonaws.com/${key}`;
    } catch (error) {
      throw new InternalServerErrorException('Error uploading file to S3');
    }
  }
}
