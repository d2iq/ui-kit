#!/usr/bin/env groovy

@Library('sec_ci_libs@v2-latest') _

def master_branches = ["master", ] as String[]

pipeline {
  agent {
    dockerfile {
      args  '--shm-size=2g'
    }
  }

  environment {
    JENKINS_VERSION = 'yes'
  }

  options {
    timeout(time: 1, unit: 'HOURS')
  }

  stages {
    stage('Authorization') {
      steps {
        user_is_authorized(master_branches, '8b793652-f26a-422f-a9ba-0d1e47eb9d89', '#frontend-dev')
      }
    }

    stage('Initialization') {
      steps {
        ansiColor('xterm') {
          retry(2) {
            // The npm ls ensures that the peer dependecies are met.
            sh '''npm install && npm ls'''
          }
        }
      }
    }

    stage('Lint') {
      steps {
        ansiColor('xterm') {
          sh '''npm run lint'''
        }
      }
    }

    stage('Unit Test') {
      steps {
        ansiColor('xterm') {
          sh '''npm run test -- --collectCoverage'''
        }
      }
    }

    stage('Build') {
      steps {
        ansiColor('xterm') {
          sh '''npm run dist'''
        }
      }

      post {
        always {
          archiveArtifacts 'dist/**/*'
        }
      }
    }

    stage('Build Storybook') {
      steps {
        ansiColor('xterm') {
          sh '''npm run build:storybook'''
        }
      }

      post {
        always {
          archiveArtifacts 'storybook-static/**/*'
        }
      }
    }

    stage('Deploy'){
      when {
        expression { env.BRANCH_NAME == 'master' }
      }

      steps {
        // we need to do this workaround as jenkins clones without .git/ directory
        sh '''rm -rf ui-kit && git clone https://github.com/dcos-labs/ui-kit.git && cd ui-kit && npm install'''
        withCredentials([
          string(credentialsId: 'd146870f-03b0-4f6a-ab70-1d09757a51fc', variable: 'GITHUB_TOKEN')
        ]) {
          sh '''cd ui-kit && npm run deploy:storybook -- --ci --host-token-env-variable=GITHUB_TOKEN'''
        }
      }
    }
  }
}
