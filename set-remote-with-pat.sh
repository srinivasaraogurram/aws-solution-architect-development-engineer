#!/bin/bash

# === Default values (update these as needed) ===
USERNAME="srinivasaraogurram"
EMAIL="your-verified-github-email@example.com"
REPO_NAME="aws-solution-architect-development-engineer"

# === Prompt for PAT token ===
read -sp "Enter your GitHub Personal Access Token (PAT): " PAT
echo

# === Confirm PAT is correct ===
echo
echo "You entered: $PAT"
read -p "Is this correct? [Y/n] " confirm
if [[ "$confirm" =~ ^[Nn]$ ]]; then
    read -sp "Re-enter your GitHub Personal Access Token (PAT): " PAT
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
git add .
git commit -m "Update"
git push

echo
echo "✅ Setup complete!"