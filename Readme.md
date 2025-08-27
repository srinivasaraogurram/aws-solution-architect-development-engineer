### About Me  
# Sri - AWS Solution Architect, AWS Cloud Developer Engineer

Srinivasa Rao  Gurram - Sri  
M.Tech Computer Science, ALCCS, [IETE New Delhi](https://www.iete.org/courses-academics-and-exams/)  
Location: Aubrey, TX 76227, Dallas, TX, USA  
Contact No: +1 925-922-4115  
Email ID: SrinivasaRao.Gurram@gmail.com 

#### Work Authorization: H1B

#### Who am I: 

***This text is both italic and bold.***

** _ I am an AWS Cloud Engineer at Solution Architect Level who can not only Architect the Solution but also develop and provide an end-to-end solution in Java, Node, and Python. Specialized in Cloud Migration and AWS Serverless Lambda development, using GitLab, Jenkins for cicd and CloudFormation, AWS CDK, Terraform for creating AWS resources on Cloud. _ **

## 25 years of IT Experience | AWS Solution Architect| AWS Cloud Solution Hands-on development Engineer- 10 Years  | 14 + Years with Cognizant as Java Application Architect, Technical Lead.

- IT Certifications
  - AWS Certified Solution Architect
  - AWS Certified Practitioner
  - AWS Partner Trained Solution Architect Cognization
  - Cognizant Certified Solution Architect
  - Java Certified Associate 1.5
  - Java Certified Application Architect
  - Certified SME in Cognization Code Quality Platform


Career * Started as a Web developer in 1999:  

## Offshore India Experience:  
- Indosoft International: 1999- 2000 - 18 Months  
## Onsite UK Experience:  
- ITC Infotech - United Kingdom 2001-2004 - 3 Years - Java developer  
## Offshore India Experience:  
- ITC Infotech       - Bangalore 2001-2004 - 3 Years - Java developer  
- SLK Software       - Bangalore 2004-2006 - 2 Years - Sr.Java developer  
- Cognizant          - Hyderabad 2006-2011 - 5 Years - Lead Sr.Java developer  - Technology Specialist - Java, Structs, Spring Core, Spring MVC, Hibernate, JPA, Rational Unified Process -Class, Sequence, Collaboration Diagram  
- Cognizant          - Hyderabad 2011-2014 - 3 Years - Application Architect   - Technical Manager- Java Projects  - Java, Structs, Spring Core, Spring MVC, Hibernate, JPA, Rational Unified Process -Class, Sequence, Collaboration Diagram  
## Onsite Experience  
- Cognizant          - USA 2014 - 2019 5 Years  
                                                      - Java Application Architect   - Technical Manager  - Java Projects  - Java, Structs, Spring Core, Spring MVC, Hibernate, JPA, Rational Unified Process -Class, Sequence, Collaboration Diagram  
                                                      - AWS Solution Architect       - Technical Manager  - AWS IAM, AWS, S3, AWS EC2, Containerization, Docker, Kubernetes, Serverless
- [AA Software & Networking](HTTP://aasoftnet.com) - 2019 - 2025- Till Date/(2025 )
                                                      - AWS Solution Engineer Cloud Engineering Practice  - AWS Serverless - API Gateway, SNS, SQS, SES, Event Bridge, Kafka, Kinesis,  Lambda, Stepfunction, DynamoDB, S3, Athena, Glue  
                                                                                                          - CI/CD - Jenkins, Gitlab CI/CD, AWS Code Commit, Code Build, Code Pipeline  
                                                                                                          - Iac-Infra as Code - CloudFormation, AWS CDK, [Serverless Framework](https://www.serverless.com/framework), [SAM](https://aws.amazon.com/serverless/sam/), Terraform
Last 6 years Clients
Sirius XM - Connected Vehicle Division - AWS Serverless - Cloud Migration -on-prem Java to Lambda, Java to AWS EKS  
CollegeBoard - Moderation of Application Platform - AWS Serverless Model using Lambda with NodeJS, Java - OnPrem to Dockerize-, EKS, Python for Glue -ETL  
T-Mobile - Security Payload - Pipeline Build with Serverless Orchestration to [pacbot](https://github.com/tmobile/pacbot)  
Cigna - Moderation - Making Legacy Platform to FHIR Client Transformation- AWS Lambda -Node, Java, EKS  
Delta Airlines - Azure Migration to AWS - Platform  

[Education](education-background.md)

Who am I?
## Cloud Engineer
I am a Cloud Engineer who is working as an AWS Solution Engineer, a Development - Hands-on Engineer who works in all the Cloud Platforms using the  following Programming Languages
Cloud Hands-on Development Engineer:
- Java: Java 8, 11, 17, 21 - SDKMan, Spring Boot, Docker, EKS, EC2, Function as a Service
- NodeJS: ExpressJS, FastAPI, Node Middleware, AWS Lambda with NodeJS, 
- Python: AWS Lambda, Boto3, AWS Glue

## Cloud Solution Architect:

- Cloud Migration from On-Prem to Cloud using
  - 6R or 7R Migration Priciples
    - Rehost, Relocate, Refactor, Repurchase, Replatform, Retire, Retain
  -  Well-Architected Principles
      - Operational Excellence
      - Security
      - Reliability
      - Performance Efficiency
      - Cost Optimization
      - Sustainability

- Databases:
  - RDS
    - MS SQL Server, Oracle, PostgreSQL, MySQL
  - NO SQL
    - DynamoDB, Cassandra
  - Document DB
     - MongoDB 

Cloud Patterns
- Failover Cluster
- Active - Passive US-EAST - US- Webst Regions
![Implemented Serverless Design Patterns](API-Lambda-AppSync-DynamoDB.png)


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
