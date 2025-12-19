pipeline {
    agent any

    environment {
        // define docker image and container name here
        IMAGE_NAME="drivenc-blogapp-img"
        CONTAINER_NAME="drivenc-blogapp-cont"
    }
    stages {
        stage('Checkout Code') {
            steps {
                // Pulls the full source code into the workspace
                checkout scm
            }
        }
        stage('Build') {
            steps {
                // Uses your existing Dockerfile in the root directory
                sh "docker build -t ${IMAGE_NAME}:latest ."
            }
        }
        stage('Deploy') {
            steps {
                // 1. Stop and remove any old version of this container
                sh "docker stop ${CONTAINER_NAME} || true"
                sh "docker rm ${CONTAINER_NAME} || true"

                // Run new container
                sh "docker run -d --name ${CONTAINER_NAME} -p 80:3000 ${IMAGE_NAME}:latest"
            }
        }
    }
    post {
        success {
            echo "Application successfully deployed to port 3000!"
        }
        failure {
            echo "Deployment failed. Check Jenkins logs for details."
        }
    }
}
