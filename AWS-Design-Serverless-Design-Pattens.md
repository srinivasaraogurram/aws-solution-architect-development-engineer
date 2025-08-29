<!-- AWS Service Integration Flowchart -->
```mermaid
---
title: AWS Services Orchestration using Serverless Platform
---
flowchart LR
    %% Main AWS Service Orchestration using Serverless Platform

    Client["Client"] --> AppSync["AppSync"]
    Client --> APIGW["API<br>Gateway"]
    Client --> UpStream["UpStream"]
    UpStream --> SNS["SNS"] --> SQS["SQS"]

    AppSync -- integrates --> LambdaMain[Lambda]
    APIGW -- integrates --> LambdaMain
    SQS -- invokes --> LambdaMain

    LambdaMain -- invokes --> StepFn["Step Functions<br>(workflow)"]

    subgraph Workflow [Step Functions Workflow]
      direction TB
      LambdaA["Lambda A"]
      LambdaB["Lambda B"]
      LambdaC["Lambda C"]
      LambdaA --> LambdaB --> LambdaC
      LambdaA -.->|calls| DynamoDB["DynamoDB"]
      LambdaB -.->|calls| S3["S3"]
      LambdaC -.->|calls| RDS
      subgraph RDS [RDS]
        direction LR
        Postgres["Postgres"]
        Oracle["Oracle"]
        MSSQL["MS SQL Server"]
        MySQL["MySQL"]
        MongoDB["MongoDB"]
      end
      LambdaC -.-> Postgres
      LambdaC -.-> Oracle
      LambdaC -.-> MSSQL
      LambdaC -.-> MySQL
      LambdaC -.-> MongoDB
    end

    StepFn --> Workflow
    LambdaMain --> DynamoDB
     


'''
