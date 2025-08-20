
# 🌐 Cloud Solution Architect — AWS Expertise

## Overall Summary

I am a **Senior Cloud Solution Architect** with 10+ years of cloud experience (9+ on AWS) and 18+ years overall in IT. I specialize in **cloud migrations, serverless architectures, microservices decomposition, and enterprise modernization** across industries including media, education, telecom, healthcare, retail/food, and aviation.

My typical role spans **architecture + hands-on development**: I lead the design phase (Well-Architected Framework, 7R migration strategy, multi-account governance, disaster recovery, security) and continue as a developer to ensure delivery of high-quality, production-ready solutions. I am fluent in **AWS Serverless (Lambda, API Gateway, DynamoDB, SQS/SNS, EventBridge), Containers (ECS, EKS, Fargate), Data & Analytics (Glue, Athena, Redshift, Kinesis), and AI/LLM integration (Bedrock, Claude, Amazon Q)**.

I deliver **end-to-end modernization**:

* Lift-and-shift migrations re-engineered to cloud-native solutions.
* Event-driven architectures replacing monoliths and ESBs.
* IaC with Terraform, SAM, and Serverless Framework.
* Security aligned to HIPAA, PCI, FERPA, and SOC2 standards.
* Cost-optimized, elastic, and measurable systems with documented HLDs/LLDs, runbooks, and reusable modules.

---

# 📂 Per-Client Case Studies

## 🚘 SiriusXM — Connected Vehicle Services

**Role:** Sr. Cloud Engineer / Architect | Sep 2019 – Mar 2021
Migrated **legacy Java applications** to AWS **Lambda (Node.js)** microservices, enabling event-driven orchestration of connected-car features such as **wireless provisioning APIs**. Leveraged **service locator pattern** to route calls across multiple OEMs. Integrated with Jasper & Aries wireless networks for provisioning.
**Impact:** Improved agility for connected-vehicle services (crash alerts, stolen vehicle tracking, remote unlock). Positioned platform for North American & Mexico expansion.

---

## 🎓 College Board — SAT Exam Platform

**Role:** AWS Cloud Developer | Mar 2021 – Jun 2022
Modernized SAT exam registration platform:

* Built **event-driven flows** for single & bulk student registration, cancellations, reschedules, and refund initiation.
* Used **SNS/SQS, Lambda, DynamoDB** for real-time processing; **Glue, Athena, S3** for reporting & analytics.
  **Impact:** Automated refunds within minutes (vs. manual batch), supported peak national exam cycles, and ensured **FERPA/PII compliance**. Delivered scalable, auditable reporting pipelines for executive and compliance teams.

---

## 📡 T-Mobile — Security Analytics with PacBot

**Role:** Sr. Cloud Engineer | Jul 2022 – Dec 2022
Integrated multi-cloud (AWS, Azure, GCP) **asset feeds** and **security violation feeds** into T-Mobile’s PacBot governance system:

* Built **Glue + Lambda ETL** pipelines to map violations to enterprise controls.
* Enriched violations with asset metadata before forwarding to PacBot.
* Centralized compliance analytics in **Redshift**; ad-hoc queries via **Athena**.
  **Impact:** Reduced compliance report generation latency by **60%**, enabled automated violation routing, and improved MTTR with enriched context.

---

## 🏥 Cigna — Virtual Health (MDLIVE/MLive) Modernization

**Role:** Sr. Cloud Engineer / Architect | Feb 2023 – May 2024
Migrated **MDLIVE/MLive virtual health platform** endpoints to AWS serverless:

* Converted HL7 payloads from React-Native mobile app into **FHIR-compliant APIs**.
* Deployed patient-facing APIs on **API Gateway + Lambda**.
* Built serverless middleware for provider APIs; added AI modules for **anxiety & stress care analytics**.
* Centralized data in **Redshift** with Athena dashboards.
  **Impact:** Lowered latency of patient interactions, enabled **FHIR interoperability**, and improved behavioral health analytics.

---

## 🌮 Taco Bell — HR Applications Migration

**Role:** Sr. AWS Developer / Architect | Dec 2022 – Feb 2023
Migrated **restaurant HR legacy applications** to AWS:

* Decomposed HR modules (employee profiles, promotions, salary changes) into **event-driven microservices**.
* Built with **EventBridge, Lambda, DynamoDB**; analytics with **Glue + Athena**.
* Prototyped GenAI chatbot via **AWS Bedrock** for employee FAQs.
  **Impact:** Reduced HR data reporting lag from hours to minutes, improved reliability of employee event propagation, and reduced operational overhead via event-driven workflows.

---

## ✈️ Delta Airlines — Team Communication Platform

**Role:** Sr. Cloud Architect | Jun 2024 – Present
Migrated **Team Communication Platform** from Azure to AWS:

* **Core API** (Express + MongoDB) → AWS Lambda/ECS; migrated **MongoDB → DocumentDB**; **Azure SQL → PostgreSQL**.
* **Admin API** re-designed for **airport → zone → terminal → flight** hierarchy; containerized on ECS with config-driven endpoints.
* Replaced Azure ESB with **AWS MSK/Kafka**; added SNS/SQS for async workflows.
* Built analytics pipelines with **Kinesis, Glue, Athena, Redshift**.
* Introduced GenAI pilots with **Bedrock (Claude)** for unit test automation & agentive workflows.
  **Impact:** Reduced API latency, improved flight ops reporting, cut infra costs by moving off Azure, and delivered **Well-Architected landing zone** with DR/HA.



