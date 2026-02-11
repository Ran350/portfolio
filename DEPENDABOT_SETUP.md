# Dependabot Auto-Merge Setup Guide

This repository is configured with Dependabot and auto-merge workflows. To complete the setup, follow these manual steps:

## 1. Create Personal Access Token (PAT)

1. Go to GitHub Settings > Developer settings > Personal access tokens > Fine-grained tokens
2. Click "Generate new token"
3. Configure the token:
   - **Token name**: Dependabot Auto Merge Token
   - **Repository access**: Only select repositories (choose this repository)
   - **Permissions**:
     - **Contents**: Read and Write
     - **Pull requests**: Read and Write
4. Generate the token and copy it

## 2. Add Token as Repository Secret

1. Go to the repository Settings > Secrets and variables > Actions
2. Click "New repository secret"
3. Name: `DEPENDABOT_AUTO_MERGE_TOKEN`
4. Value: Paste the PAT token you created
5. Click "Add secret"

## 3. Configure Branch Protection Rules

1. Go to Settings > Branches
2. Add or edit branch protection rule for `main` branch
3. Enable the following settings:
   - ✅ **Require status checks to pass before merging**
   - Under "Status checks that are required":
     - Add `test` (from the CI workflow)
   - ✅ **Allow auto-merge** (ensure this is enabled)
   - Configure other settings as needed for your repository

## How It Works

### Dependabot Configuration
- **NPM dependencies**: Checked weekly on Mondays at 19:00 JST
- **GitHub Actions**: Checked weekly on Mondays at 19:00 JST
- Commit messages are prefixed with `deps` for npm and `ci` for actions
- Labels are automatically applied: `dependencies`, `npm` or `github-actions`
- Maximum 5 open pull requests at a time

### CI Workflow
- Runs on push to main and on pull requests
- Executes type checking, formatting, linting, and builds
- Must pass before auto-merge can proceed

### Auto-Merge Workflow
- Triggered after CI workflow completes successfully
- Only processes Dependabot PRs
- Automatically enables auto-merge with squash strategy
- Uses the `DEPENDABOT_AUTO_MERGE_TOKEN` for authentication

## Testing the Setup

To verify everything works:
1. Wait for Dependabot to create a PR (or manually trigger one)
2. Check that CI workflow runs automatically
3. If CI passes, the auto-merge workflow should enable auto-merge
4. The PR will merge automatically once all required checks pass

## Troubleshooting

- If auto-merge doesn't enable, check that:
  - The `DEPENDABOT_AUTO_MERGE_TOKEN` secret is set correctly
  - The PAT has the correct permissions
  - Branch protection rules allow auto-merge
  - CI workflow completed successfully
- Check the Actions tab for workflow run logs
