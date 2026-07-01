# Deployment Guide (AWS EC2)

This guide covers deploying the containerized StaffSync API to an AWS EC2 instance.

## 1. Provision EC2 Instance
1. Log into AWS Management Console.
2. Launch a new EC2 Instance (Ubuntu 22.04 LTS is recommended).
3. Instance Type: `t2.micro` or `t3.micro` (Free tier eligible).
4. Configure Security Group:
   - Allow **SSH (Port 22)** from your IP.
   - Allow **Custom TCP (Port 8000)** from Anywhere (0.0.0.0/0) to access the API.
   - Allow **PostgreSQL (Port 5432)** only if accessing the DB externally.

## 2. Install Docker and Docker Compose on EC2
SSH into your instance:
```bash
ssh -i /path/to/key.pem ubuntu@<your-ec2-ip>
```
Install Docker:
```bash
sudo apt-get update
sudo apt-get install -y docker.io docker-compose
sudo usermod -aG docker $USER
```
*Logout and log back in for docker group changes to take effect.*

## 3. Clone and Run Application
Clone the repository:
```bash
git clone https://github.com/Anurag-elitx/staff-sync.git
cd staff-sync
```

Configure Production Environment:
Create a `.env` file in the project root:
```env
DB_HOST=db
DB_PORT=5432
DB_USER=prod_user
DB_PASSWORD=strong_password
DB_NAME=staff_sync_prod
JWT_SECRET=your_secure_jwt_secret
AWS_ACCESS_KEY_ID=your_aws_access_key
AWS_SECRET_ACCESS_KEY=your_aws_secret_key
AWS_REGION=us-east-1
S3_BUCKET_NAME=your-production-bucket
```

Start the containers in detached mode:
```bash
docker-compose up -d --build
```

## 4. Verification
Test the deployment by navigating to:
`http://<your-ec2-ip>:8000/api/docs`

## Additional Recommendations for Production
- **Reverse Proxy**: Setup Nginx with Let's Encrypt SSL (HTTPS) to proxy requests to port 8000.
- **Managed Database**: Use AWS RDS (PostgreSQL) instead of the Dockerized database for automatic backups and scalability. Update `DB_HOST` in `.env` to the RDS endpoint.
