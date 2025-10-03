pipeline {
    agent any

    environment {
        DOCKER_HUB_CREDENTIALS = credentials('docker-hub-creds') // smiya li drti f Jenkins
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/zahrahiu/TP-react-zohrajbari.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                echo "Installing NPM packages..."
                sh 'npm install'
            }
        }

        stage('Build App') {
            steps {
                echo "Building React App..."
                sh 'npm run build'
            }
        }

        stage('Build Docker Image') {
            steps {
                echo "Building Docker image..."
                sh 'docker build -t zahrajbari/react-app:latest .'
            }
        }

        stage('Push to Docker Hub') {
            steps {
                echo "Logging into Docker Hub..."
                sh 'echo $DOCKER_HUB_CREDENTIALS_PSW | docker login -u $DOCKER_HUB_CREDENTIALS_USR --password-stdin'

                echo "Pushing Docker image..."
                sh 'docker push zahrajbari/react-app:latest'
            }
        }
    }

    post {
        success {
            echo "Build & push completed successfully!"
        }
        failure {
            echo "Build failed!"
        }
    }
}
