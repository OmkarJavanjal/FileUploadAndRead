pipeline {

  agent any
  
  stages {
  
    stage("run frontend") {
      
      steps {
        echo 'executing frontend application...'
        nodejs('Node-18.3.0') {
          sh 'npm install'
        }
      }
    }
  }
}
