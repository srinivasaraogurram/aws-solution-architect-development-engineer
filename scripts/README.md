# Utility Scripts

**Git and Repository Management Scripts**

---

## 📋 Available Scripts

### 1. git-commit.sh
**Purpose**: Automated git commit helper  
**Usage**: 
```bash
./scripts/git-commit.sh
```
**Description**: Streamlines the git commit process with standardized messages

### 2. set-git-env.sh
**Purpose**: Configure git environment variables  
**Usage**:
```bash
source ./scripts/set-git-env.sh
```
**Description**: Sets up necessary git configuration for the repository

### 3. set-remote-with-pat.sh
**Purpose**: Configure remote repository with Personal Access Token  
**Usage**:
```bash
./scripts/set-remote-with-pat.sh
```
**Description**: Securely configures git remote with GitHub PAT authentication

---

## 🔧 Prerequisites

- Git installed and configured
- Bash shell (Linux/Mac/WSL)
- Appropriate permissions for repository
- GitHub Personal Access Token (for set-remote-with-pat.sh)

---

## 📖 Usage Guidelines

### Making Scripts Executable
```bash
chmod +x scripts/*.sh
```

### Running Scripts
```bash
# From repository root
./scripts/script-name.sh

# Or if in scripts directory
cd scripts
./script-name.sh
```

---

## ⚠️ Security Notes

- Never commit PAT tokens directly in scripts
- Use environment variables for sensitive data
- Review scripts before execution
- Keep scripts updated with latest practices

---

**Last Updated**: November 2, 2025
