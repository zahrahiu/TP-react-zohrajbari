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
                sh 'npm install'
            }
        }
        stage('Build App') {
            steps {
                sh 'npm run build'
            }
        }
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t zahrajbari/react-app:latest .'
            }
        }
        stage('Push to Docker Hub') {
            steps {
                sh 'echo %DOCKER_HUB_CREDENTIALS_PSW% | docker login -u %DOCKER_HUB_CREDENTIALS_USR% --password-stdin'
                sh 'docker push zahrajbari/react-app:latest'
            }
        }
    }
    post {
        success { echo 'Build & push completed successfully!' }
        failure { echo 'Build failed!' }
    }
}
