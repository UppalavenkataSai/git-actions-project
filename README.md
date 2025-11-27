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


