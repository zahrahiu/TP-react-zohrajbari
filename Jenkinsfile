pipeline {
    agent any
    environment {
        DOCKER_HUB_CREDENTIALS = credentials('docker-hub-creds')
    }
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/zahrahiu/TP-react-zohrajbari.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }
        stage('Build App') {
            steps {
                bat 'npm run build'
            }
        }
        stage('Build Docker Image') {
            steps {
                bat 'docker build -t zahrajbari/react-app:latest .'
            }
        }
        stage('Push to Docker Hub') {
            steps {
                bat 'echo %DOCKER_HUB_CREDENTIALS_PSW% | docker login -u %DOCKER_HUB_CREDENTIALS_USR% --password-stdin'
                bat 'docker push zahrajbari/react-app:latest'
            }
        }
    }
    post {
        success { echo 'Build & push completed successfully!' }
        failure { echo 'Build failed!' }
    }
}
