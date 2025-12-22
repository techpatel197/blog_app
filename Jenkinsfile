pipeline {
    agent any

    triggers {
        githubPush()
    }

    environment {
        // define docker image and container name here
        IMAGE_NAME="drivenc-blogapp-img"
        CONTAINER_NAME="drivenc-blogapp-cont"
        DOCKER_HUB_REPO="kishanpatel617/kp-docker-img"
    }
    stages {
        stage('Checkout Code') {
            steps {
                // Pulls the full source code into the workspace
                checkout scm
            }
        }
        stage('Build-Image') {
            steps {
                // Uses your existing Dockerfile in the root directory
                sh "docker build -t ${IMAGE_NAME}:latest ."
            }
        }
        stage('Push-Image') {
            steps {
                // 'docker-hub-creds' is the ID you set in Jenkins UI
                withCredentials([usernamePassword(credentialsId: 'docker-hub-creds', usernameVariable: 'D_HUB_USER', passwordVariable: 'D_HUB_PASS')]) {
                    // 1. Log in to Docker Hub
                    // sh 'echo ${D_HUB_PASS} | docker login -u ${D_HUB_USER} --password-stdin'
                    sh 'docker login -u "${D_HUB_USER}" --password-stdin <<< "${D_HUB_PASS}"'
                    // 2. Tag image with Docker Hub username/repo
                    sh "docker tag ${IMAGE_NAME}:latest ${D_HUB_USER}/${IMAGE_NAME}:latest"
                    // 3. Push to Docker Hub
                    sh "docker push ${D_HUB_USER}/${IMAGE_NAME}:latest"
                }
            }
        }
        stage('Deploy-Container') {
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
