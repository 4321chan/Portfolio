# Portfolio Deployment Script for GitHub Pages (PowerShell)
# Run this script to quickly deploy your portfolio

Write-Host "🚀 Deploying Chan Nyein Aung's BIM Portfolio..." -ForegroundColor Green

# Check if git is initialized
if (-not (Test-Path ".git")) {
    Write-Host "📦 Initializing Git repository..." -ForegroundColor Yellow
    git init
    git add .
    git commit -m "Initial portfolio commit with videos section"
}

# Prompt for GitHub repository URL
Write-Host "📋 Please provide your GitHub repository URL:" -ForegroundColor Cyan
Write-Host "Example: https://github.com/channyeinaung/bim-portfolio.git" -ForegroundColor Gray
$repoUrl = Read-Host "Repository URL"

if ([string]::IsNullOrWhiteSpace($repoUrl)) {
    Write-Host "❌ Repository URL is required!" -ForegroundColor Red
    exit 1
}

# Add remote origin
Write-Host "🔗 Adding remote repository..." -ForegroundColor Yellow
try {
    git remote remove origin 2>$null
} catch {
    # Ignore error if origin doesn't exist
}
git remote add origin $repoUrl

# Push to GitHub
Write-Host "⬆️ Pushing to GitHub..." -ForegroundColor Yellow
git branch -M main
git push -u origin main

Write-Host "✅ Portfolio deployed successfully!" -ForegroundColor Green
Write-Host ""
Write-Host "📋 Next steps:" -ForegroundColor Cyan
Write-Host "1. Go to your GitHub repository settings"
Write-Host "2. Navigate to 'Pages' section"
Write-Host "3. Select 'Deploy from a branch'"
Write-Host "4. Choose 'main' branch and '/ (root)' folder"
Write-Host "5. Click Save"
Write-Host ""
Write-Host "🌐 Your portfolio will be available at:" -ForegroundColor Cyan

# Extract username and repo name from URL
$repoName = [System.IO.Path]::GetFileNameWithoutExtension($repoUrl)
$username = ($repoUrl -replace 'https://github.com/', '' -split '/')[0]
$portfolioUrl = "https://$username.github.io/$repoName"

Write-Host $portfolioUrl -ForegroundColor Green
Write-Host ""
Write-Host "🎉 Happy job hunting!" -ForegroundColor Magenta

# Open GitHub Pages guide in browser
$openGuide = Read-Host "Would you like to open GitHub Pages setup guide? (y/n)"
if ($openGuide -eq 'y' -or $openGuide -eq 'Y') {
    Start-Process "https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site"
}
