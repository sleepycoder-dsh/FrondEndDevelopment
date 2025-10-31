pipeline {
    agent any

    environment {
        DOCKER_HUB_CREDENTIALS = credentials('dockerhub-creds')
        SSH_CREDENTIALS = credentials('gcp-vm-ssh')
        FRONTEND_VM_IP = '34.136.172.142' 
    }

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/sleepycoder-dsh/FrondEndDevelopment.git'
            }
        }

        stage('Build Frontend Image') {
            steps {
                sh '''
                npm install
                npm run build
                docker build -t dsriharshini2000/my-frontend:latest .
                '''
            }
        }

        stage('Push to DockerHub') {
            steps {
                sh '''
                echo $DOCKER_HUB_CREDENTIALS_PSW | docker login -u $DOCKER_HUB_CREDENTIALS_USR --password-stdin
                docker push dsriharshini2000/my-frontend:latest
                '''
            }
        }

        stage('Deploy to Frontend VM') {
            steps {
                sshagent(credentials: ['gcp-vm-ssh']) {
                    sh '''
                    ssh -o StrictHostKeyChecking=no dsriharshini2000@${FRONTEND_VM_IP} '
                        docker pull dsriharshini2000/my-frontend:latest &&
                        docker stop frontend || true &&
                        docker rm frontend || true &&
                        docker run -d --name frontend -p 80:80 dsriharshini2000/my-frontend:latest
                    '
                    '''
                }
            }
        }
    }
}
