#!/bin/bash

# Portfolio Deployment Script for GitHub Pages
# Run this script to quickly deploy your portfolio

echo "🚀 Deploying Chan Nyein Aung's BIM Portfolio..."

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "📦 Initializing Git repository..."
    git init
    git add .
    git commit -m "Initial portfolio commit with videos section"
fi

# Prompt for GitHub repository URL
echo "📋 Please provide your GitHub repository URL:"
echo "Example: https://github.com/channyeinaung/bim-portfolio.git"
read -p "Repository URL: " repo_url

if [ -z "$repo_url" ]; then
    echo "❌ Repository URL is required!"
    exit 1
fi

# Add remote origin
echo "🔗 Adding remote repository..."
git remote remove origin 2>/dev/null || true
git remote add origin "$repo_url"

# Push to GitHub
echo "⬆️ Pushing to GitHub..."
git branch -M main
git push -u origin main

echo "✅ Portfolio deployed successfully!"
echo ""
echo "📋 Next steps:"
echo "1. Go to your GitHub repository settings"
echo "2. Navigate to 'Pages' section"
echo "3. Select 'Deploy from a branch'"
echo "4. Choose 'main' branch and '/ (root)' folder"
echo "5. Click Save"
echo ""
echo "🌐 Your portfolio will be available at:"
repo_name=$(basename "$repo_url" .git)
username=$(echo "$repo_url" | sed 's|https://github.com/||' | sed 's|/.*||')
echo "https://$username.github.io/$repo_name"
echo ""
echo "🎉 Happy job hunting!"
