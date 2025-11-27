# git-actions-project
# GitHub Actions → AWS ECS CI/CD Pipeline

This project demonstrates a full end-to-end CI/CD pipeline that automatically builds, tests, containerizes, and deploys a Node.js application to AWS ECS Fargate using GitHub Actions and Amazon ECR.

## Architecture Overview

GitHub → GitHub Actions → Docker Build → Amazon ECR → ECS Fargate → Application Load Balancer

## Tech Stack

- Node.js (Express)
- GitHub Actions (CI/CD)
- Docker
- Amazon ECR
- Amazon ECS (Fargate)
- Application Load Balancer

## Features

- Automated unit testing with Jest
- Docker image build and push to ECR
- Zero-downtime ECS rolling deployments
- ALB health checks
- Service auto scaling based on CPU and memory

## How it Works

1. Code push to main branch triggers GitHub Actions
2. Tests run automatically
3. Docker image builds and pushes to ECR
4. ECS service pulls latest image
5. Old tasks are drained and replaced

## ALB Health Check Endpoint


---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| Language | Node.js (Express) |
| CI/CD | GitHub Actions |
| Containerization | Docker |
| Container Registry | Amazon ECR |
| Container Orchestration | AWS ECS (Fargate) |
| Load Balancing | Application Load Balancer (ALB) |
| Monitoring | AWS CloudWatch |

---

## ⚙️ Features

✅ Automated build & test pipeline  
✅ Dockerized application  
✅ Zero-downtime rolling deployments  
✅ ALB health checks integrated  
✅ ECS Service auto scaling enabled  
✅ Production-ready architecture  

---

## 📁 Project Structure

```bash
.
├── app.js               # Express application
├── app.test.js          # Jest unit tests
├── Dockerfile           # Docker image definition
├── ecs-task-def.json    # ECS task definition
├── package.json         # Node dependencies
└── .github/
    └── workflows/
        └── ci-cd.yml    # GitHub Actions pipeline




⚡ How the CI/CD Pipeline Works

Pipeline is triggered on every push to main branch:

Step 1 – Code Checkout
Pulls latest code from GitHub

Step 2 – Dependency Installation
npm ci

Step 3 – Automated Testing
npm test

Step 4 – Docker Image Build
docker build -t app .

Step 5 – Push Image to Amazon ECR
docker push <account>.dkr.ecr.<region>.amazonaws.com/<repo>:<tag>

Step 6 – ECS Task Update

ECS pulls the latest image and triggers rolling deployment.

🌍 Live Application Endpoints

Base URL (via ALB):

http://<ALB-DNS>/


Example health response:

{
  "service": "github-actions-ci-cd-demo",
  "status": "v2-active",
  "environment": "prod",
  "version": "2.0.0"
}
