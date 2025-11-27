pipeline {
    agent any

    environment {
        DOCKERHUB_USER = "beatriz250804"
        BACKEND_IMAGE = "${DOCKERHUB_USER}/proyecto-is-backend"
        FRONTEND_IMAGE = "${DOCKERHUB_USER}/proyecto-is-frontend"
        IMAGE_TAG = "latest"
    }

    stages {
        stage('Checkout') {
            steps {
                echo "Clonando repo..."
                checkout scm
            }
        }

        stage('Build Backend') {
            steps {
                echo "Construyendo backend (maven)..."
                dir('backend') {
                    sh 'mvn -B clean package -DskipTests'
                }
            }
        }

        stage('Build Backend Image') {
            steps {
                echo "Construyendo imagen Docker backend..."
                sh "docker build -f Dockerfile.backend -t ${BACKEND_IMAGE}:${IMAGE_TAG} ."
            }
        }

        stage('Build Frontend') {
            steps {
                echo "Construyendo frontend (npm)..."
                dir('frontend-ionic') {
                    sh 'npm ci'
                    sh 'npm run build -- --prod || npm run build'
                }
            }
        }

        stage('Build Frontend Image') {
            steps {
                echo "Construyendo imagen Docker frontend..."
                sh "docker build -f Dockerfile.frontend -t ${FRONTEND_IMAGE}:${IMAGE_TAG} ."
            }
        }

        stage('Login DockerHub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub-credentials', usernameVariable: 'DH_USER', passwordVariable: 'DH_PASS')]) {
                    sh 'echo $DH_PASS | docker login -u $DH_USER --password-stdin'
                }
            }
        }

        stage('Push Images') {
            steps {
                echo "Subiendo imágenes a DockerHub..."
                sh "docker push ${BACKEND_IMAGE}:${IMAGE_TAG}"
                sh "docker push ${FRONTEND_IMAGE}:${IMAGE_TAG}"
            }
        }
    }

    post {
        success {
            echo "Pipeline completado OK."
        }
        failure {
            echo "Pipeline falló. Revisa consola."
        }
    }
}
