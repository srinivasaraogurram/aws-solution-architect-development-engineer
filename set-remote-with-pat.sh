#!/bin/bash

# === Default values (update these as needed) ===
DEFAULT_USERNAME="srinivasaraogurram"
DEFAULT_EMAIL="srinivasarao.gurram@example.com"
DEFAULT_PAT="ghp_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"
DEFAULT_REPO_NAME="aws-solution-architect-development-engineer"

# === Prompt for username ===
read -p "Enter GitHub username [$DEFAULT_USERNAME]: " USERNAME
USERNAME=${USERNAME:-$DEFAULT_USERNAME}

# === Prompt for email ===
read -p "Enter Git email [$DEFAULT_EMAIL]: " EMAIL
EMAIL=${EMAIL:-$DEFAULT_EMAIL}

# === Prompt for repo name ===
read -p "Enter repository name [$DEFAULT_REPO_NAME]: " REPO_NAME
REPO_NAME=${REPO_NAME:-$DEFAULT_REPO_NAME}

# === Prompt for PAT token ===
PAT="$DEFAULT_PAT"
echo
echo "Current PAT: $PAT"
read -p "Is this correct? [Y/n] " confirm
if [[ "$confirm" =~ ^[Nn]$ ]]; then
    read -sp "Enter your new GitHub Personal Access Token (PAT): " PAT
    echo
fi

# === Set Git user info (local to this repo) ===
git config --local user.name "$USERNAME"
git config --local user.email "$EMAIL"

# === Disable GPG signing in case it's causing issues ===
git config --local commit.gpgsign false
git config --local gpg.format none

# === Set or update the origin remote ===
REMOTE_URL="https://$USERNAME:$PAT@github.com/$USERNAME/$REPO_NAME.git"

if git remote | grep -q origin; then
    echo "Updating existing remote 'origin'..."
    git remote set-url origin "$REMOTE_URL"
else
    echo "Adding new remote 'origin'..."
    git remote add origin "$REMOTE_URL"
fi

# === Verify remote URL (sanity check) ===
echo
echo "✅ Final Remote Origin URL:"
git remote -v

# === Optional: Push to GitHub (uncomment below if needed) ===
# echo "Pushing to origin/main..."
# git push -u origin main

echo
echo "✅ Setup complete!"