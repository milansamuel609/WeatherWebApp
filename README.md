# Weather Web Application – Cloud Deployment

- Weather Web Application is a production-ready static frontend application built with HTML, CSS, and JavaScript, containerized using Docker, and deployed on AWS EC2 (Ubuntu).

- The project demonstrates real-world DevOps practices including containerization, Docker Hub image publishing, Linux server deployment, and multi-platform cloud hosting (AWS + Vercel).

## 🌐 Live Demo (HTTPS):
https://weather-web-app-steel-two.vercel.app/

<br>

# Project Overview

- Containerized static web application using Docker + Nginx
- Published production image to Docker Hub
- Deployed on AWS EC2 (Ubuntu)
- Exposed via public cloud IP with port mapping
- Deployed secure HTTPS version using Vercel
- Implemented IP-based location detection for cloud compatibility

<br>

# Architecture

<img width="784" height="614" alt="image" src="https://github.com/user-attachments/assets/21b15dbd-fbd6-4ac5-81df-00808f459c9d" />

<br> <br>

# Features

## Frontend Features

- Real-time weather data display
- 7-day forecast
- IP-based automatic location detection
- Responsive UI for desktop and mobile
- Dynamic weather icons and live updates

<br>

# DevOps & Deployment Features

- Dockerized static application using Nginx base image
- Image published to Docker Hub
- EC2 server setup on Ubuntu Linux
- Container exposed using -p 80:80 port mapping
- Multi-platform deployment :
    - AWS EC2 (Public IP access)
    - Vercel (HTTPS + CDN delivery)

<br>

# Tech Stack
```
Layer              |  Technology                               
---------------+--------------------------------------------------
Frontend           |  HTML5, CSS3, JavaScript (ES6+)
---------------+--------------------------------------------------
Web Server         |  Nginx (inside Docker container)
---------------+--------------------------------------------------
Containerization   |  Docker
---------------+--------------------------------------------------
Cloud Platform     |  AWS EC2 (Ubuntu)
---------------+--------------------------------------------------
Image Registry     |  Docker Hub
---------------+--------------------------------------------------
CDN Hosting        |  Vercel
---------------+--------------------------------------------------
```

<br>

# Live Deployments

## AWS EC2 Deployment

- Public cloud IP access
- Docker container running on Ubuntu server
- Nginx serving static assets
- Port exposed using -p 80:80

<br>

## Vercel Deployment

- HTTPS enabled
- CDN optimized
- Secure browser geolocation compatibility

<br>

# Local Development

## Run Without Docker

1. Clone the repository:

```
git clone https://github.com/milansamuel609/WeatherWebApp.git
cd WeatherWebApp
```
2. Open index.html directly in browser.

<br>

## Docker Deployment (Recommended)

1. Make sure Docker Desktop is running.

2. Build Docker image:

```
docker build -t weather-app .
```

3. Run container:
```
docker run -p 3000:80 weather-app
```

4. Access application:
```
http://localhost:3000
```

## AWS Deployment Steps (Production)

1. Launch EC2 instance (Ubuntu).
2. Install Docker on server.
3. Pull image from Docker Hub:
```
docker pull milansamuel/weather-app:latest
```
4. Run container:
```
docker run -d -p 80:80 milansamuel/weather-app:latest
```
5. Access via:
```
http://<EC2_PUBLIC_IP>
```

# Key Concepts Demonstrated

1. Docker Port Mapping
```
docker run -p 80:80
```

- Left side: Host (EC2) port
- Right side: Container port
- Makes container accessible publicly

<br>

2. EXPOSE vs -p

- EXPOSE 80 → Documents internal container port
- -p 80:80 → Actually publishes port to host machine

3. Nginx in Docker

- Lightweight web server
- Efficient static content delivery
- Ideal for containerized frontend apps

# Project Structure

```
WeatherWebApp/
├── index.html
├── script.js
├── style.css
├── Dockerfile
├── .dockerignore
└── README.md
```

# Screenshots

<img width="1919" height="929" alt="image" src="https://github.com/user-attachments/assets/5aa15625-1cec-457e-88b5-e85588ce21bf" />
