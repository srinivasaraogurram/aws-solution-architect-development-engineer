---
title: Code Samples - Sri (Srinivasa Rao Gurram)
---

# Code Samples

**Practical Implementation Examples**  
By Sri (Srinivasa Rao Gurram)

---

## 💻 Programming Languages & Frameworks

Hands-on code samples demonstrating expertise across multiple technologies and cloud platforms.

---

## ☕ Java Samples

### **Spring Boot Microservices**
Enterprise-grade microservices with AWS integration.

**Technologies**: Java 17+, Spring Boot, Spring Cloud, AWS Lambda, DynamoDB

**Sample Projects**:
- RESTful API with DynamoDB integration
- Serverless Spring Boot applications
- Microservices with service discovery
- JWT authentication and authorization
- Event-driven architecture with SQS/SNS

**[View Java Samples →](https://github.com/srinivasaraogurram/aws-solution-architect-development-engineer/tree/main/05-Code-Samples/java)**

**Key Features**:
- ✅ AWS Lambda integration
- ✅ Spring Boot best practices
- ✅ Reactive programming patterns
- ✅ Database optimization
- ✅ Error handling and logging

---

## 🟢 Node.js Samples

### **Serverless APIs & Microservices**
Modern Node.js applications with TypeScript and cloud integration.

**Technologies**: Node.js 18+, TypeScript, Express.js, Fastify, AWS SDK

**Sample Projects**:
- Express.js REST APIs
- TypeScript serverless functions
- NestJS enterprise applications
- Real-time WebSocket implementations
- GraphQL APIs with AWS AppSync

**[View Node.js Samples →](https://github.com/srinivasaraogurram/aws-solution-architect-development-engineer/tree/main/05-Code-Samples/nodejs)**

**Key Features**:
- ✅ TypeScript implementation
- ✅ Async/await best practices
- ✅ AWS SDK v3 integration
- ✅ Performance optimization
- ✅ Unit and integration testing

---

## 🐍 Python Samples

### **Data Processing & Analytics**
Python applications for cloud data processing and machine learning.

**Technologies**: Python 3.9+, FastAPI, Django, AWS Glue, Pandas

**Sample Projects**:
- FastAPI serverless applications
- AWS Glue ETL scripts
- Data analytics with Pandas
- Machine learning pipelines
- Web scraping and automation

**[View Python Samples →](https://github.com/srinivasaraogurram/aws-solution-architect-development-engineer/tree/main/05-Code-Samples/python)**

**Key Features**:
- ✅ FastAPI modern development
- ✅ Data processing pipelines
- ✅ AWS Glue integration
- ✅ ML model deployment
- ✅ Automated testing

---

## 🏗️ Architecture Patterns

### **Serverless Patterns**

#### Event-Driven Architecture
```javascript
// Lambda function triggered by S3 events
exports.handler = async (event) => {
    for (const record of event.Records) {
        const bucket = record.s3.bucket.name;
        const key = record.s3.object.key;
        
        // Process file upload
        await processFile(bucket, key);
        
        // Send notification
        await sns.publish({
            TopicArn: process.env.TOPIC_ARN,
            Message: `File processed: ${key}`
        }).promise();
    }
};
```

#### API Gateway + Lambda Pattern
```java
@RestController
@RequestMapping("/api/users")
public class UserController {
    
    @Autowired
    private UserService userService;
    
    @GetMapping("/{id}")
    public ResponseEntity<User> getUser(@PathVariable String id) {
        User user = userService.findById(id);
        return ResponseEntity.ok(user);
    }
    
    @PostMapping
    public ResponseEntity<User> createUser(@RequestBody User user) {
        User createdUser = userService.save(user);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdUser);
    }
}
```

---

## 🔧 Infrastructure as Code

### **Terraform Examples**
Infrastructure provisioning and management.

```hcl
# Lambda function with API Gateway
resource "aws_lambda_function" "api_function" {
  filename         = "function.zip"
  function_name    = "api-handler"
  role            = aws_iam_role.lambda_role.arn
  handler         = "index.handler"
  runtime         = "nodejs18.x"
  
  environment {
    variables = {
      DYNAMODB_TABLE = aws_dynamodb_table.main.name
    }
  }
}

resource "aws_api_gateway_rest_api" "api" {
  name        = "serverless-api"
  description = "Serverless API with Lambda backend"
}
```

### **AWS CDK Examples**
Type-safe infrastructure with TypeScript.

```typescript
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';

export class ServerlessApiStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const handler = new lambda.Function(this, 'ApiHandler', {
      runtime: lambda.Runtime.NODEJS_18_X,
      code: lambda.Code.fromAsset('lambda'),
      handler: 'index.handler',
    });

    new apigateway.LambdaRestApi(this, 'Api', {
      handler: handler,
    });
  }
}
```

---

## 🐳 Containerization Examples

### **Docker & Kubernetes**

#### Dockerfile for Spring Boot
```dockerfile
FROM openjdk:17-jre-slim

WORKDIR /app
COPY target/app.jar app.jar

EXPOSE 8080
CMD ["java", "-jar", "app.jar"]
```

#### Kubernetes Deployment
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: microservice-app
spec:
  replicas: 3
  selector:
    matchLabels:
      app: microservice-app
  template:
    metadata:
      labels:
        app: microservice-app
    spec:
      containers:
      - name: app
        image: my-app:latest
        ports:
        - containerPort: 8080
        env:
        - name: DATABASE_URL
          valueFrom:
            secretKeyRef:
              name: db-secret
              key: url
```

---

## 📊 Data Processing Examples

### **AWS Glue ETL Script**
```python
import sys
from awsglue.transforms import *
from awsglue.utils import getResolvedOptions
from pyspark.context import SparkContext
from awsglue.context import GlueContext
from awsglue.job import Job

args = getResolvedOptions(sys.argv, ['JOB_NAME'])
sc = SparkContext()
glueContext = GlueContext(sc)
spark = glueContext.spark_session
job = Job(glueContext)

# Read from data source
datasource = glueContext.create_dynamic_frame.from_catalog(
    database="my_database", 
    table_name="source_table"
)

# Transform data
transformed = ApplyMapping.apply(
    frame=datasource,
    mappings=[
        ("id", "long", "user_id", "long"),
        ("name", "string", "user_name", "string"),
        ("email", "string", "email_address", "string")
    ]
)

# Write to target
glueContext.write_dynamic_frame.from_options(
    frame=transformed,
    connection_type="s3",
    connection_options={"path": "s3://my-bucket/processed/"},
    format="parquet"
)

job.commit()
```

---

## 🧪 Testing Examples

### **Unit Testing with Jest (Node.js)**
```javascript
describe('UserService', () => {
  let userService;
  let mockDynamoDB;

  beforeEach(() => {
    mockDynamoDB = {
      get: jest.fn(),
      put: jest.fn(),
      delete: jest.fn()
    };
    userService = new UserService(mockDynamoDB);
  });

  test('should create user successfully', async () => {
    const userData = { id: '123', name: 'John Doe' };
    mockDynamoDB.put.mockResolvedValue({});

    const result = await userService.createUser(userData);

    expect(result).toEqual(userData);
    expect(mockDynamoDB.put).toHaveBeenCalledWith({
      TableName: 'Users',
      Item: userData
    });
  });
});
```

### **Integration Testing with JUnit (Java)**
```java
@SpringBootTest
@TestPropertySource(locations = "classpath:application-test.properties")
class UserControllerIntegrationTest {

    @Autowired
    private TestRestTemplate restTemplate;

    @Test
    void shouldCreateUserSuccessfully() {
        User user = new User("John Doe", "john@example.com");
        
        ResponseEntity<User> response = restTemplate.postForEntity(
            "/api/users", user, User.class
        );
        
        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.CREATED);
        assertThat(response.getBody().getName()).isEqualTo("John Doe");
    }
}
```

---

## 🔗 Additional Resources

### **GitHub Repository**
All code samples are available in the GitHub repository with detailed documentation and setup instructions.

**[Browse All Code Samples →](https://github.com/srinivasaraogurram/aws-solution-architect-development-engineer/tree/main/05-Code-Samples)**

### **Related Documentation**
- **[Technical Documentation](./technical-docs.html)** - Architecture patterns and design
- **[Professional Profile](./profile.html)** - Background and experience
- **[Certifications](./certifications.html)** - AWS certifications and training
- **[Resume](./resume.html)** - Detailed work history
- **[Home](./index.html)** - Portfolio overview

---

## 📧 Code Review & Consultation

For code reviews, architecture discussions, or technical consultation:

**Email**: srinivasarao.gurram@gmail.com  
**Phone**: +1 925-922-4115  
**Portfolio**: [GitHub Pages](https://srinivasaraogurram.github.io/aws-solution-architect-development-engineer/)

---

**Last Updated**: November 2, 2025  
**Note**: All code samples follow industry best practices for security, performance, and maintainability.