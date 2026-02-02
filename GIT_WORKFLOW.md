# Git Workflow Guide

Quick guide for version control with Git and GitHub.

## Initial Setup

### 1. Initialize Git Repository

```bash
cd gang-sheet-generator
git init
git add .
git commit -m "Initial commit - Gang Sheet Generator v1.0.0"
```

### 2. Create GitHub Repository

**Option A: Via GitHub Website**
1. Go to https://github.com/new
2. Repository name: `gang-sheet-generator`
3. Description: "Professional gang sheet generator for printing"
4. Public or Private (your choice)
5. Don't initialize with README (we already have one)
6. Click "Create repository"

**Option B: Via GitHub CLI**
```bash
gh repo create gang-sheet-generator --public --source=. --remote=origin
```

### 3. Connect Local to GitHub

```bash
# Replace with your GitHub username
git remote add origin https://github.com/YOUR_USERNAME/gang-sheet-generator.git
git branch -M main
git push -u origin main
```

## Daily Workflow

### Making Changes

```bash
# 1. Make sure you're on main branch
git checkout main

# 2. Pull latest changes (if working with others)
git pull origin main

# 3. Create a feature branch
git checkout -b feature/add-rotation

# 4. Make your changes in Cursor
# ... edit files ...

# 5. Check what changed
git status
git diff

# 6. Stage changes
git add gang-sheet-generator.html
# or stage everything
git add .

# 7. Commit with descriptive message
git commit -m "Add image rotation feature"

# 8. Push to GitHub
git push origin feature/add-rotation

# 9. Create Pull Request on GitHub
# Go to your repo and click "Compare & pull request"
```

### Commit Message Guidelines

**Good commit messages:**
```
✅ Add multi-image support
✅ Fix: Preview not updating on paper size change
✅ Update: Improve dimension input responsiveness
✅ Docs: Add setup guide for Google OAuth
✅ Refactor: Simplify layout calculation logic
```

**Bad commit messages:**
```
❌ Update
❌ Fix bug
❌ Changes
❌ asdf
❌ WIP
```

### Branching Strategy

**Main Branches:**
- `main` - Production-ready code
- `develop` - Integration branch for features (optional)

**Feature Branches:**
- `feature/rotation` - New feature
- `fix/export-bug` - Bug fix
- `docs/setup-guide` - Documentation
- `refactor/state-management` - Code improvement

**Example Workflow:**
```bash
# Create feature branch
git checkout -b feature/drag-and-drop
# Make changes and commit
git add .
git commit -m "Add drag and drop image reordering"
# Push to GitHub
git push origin feature/drag-and-drop
# Create PR and merge to main
# Delete feature branch
git branch -d feature/drag-and-drop
```

## Useful Commands

### Status and Info
```bash
git status                 # Check current status
git log --oneline         # View commit history
git log --graph --all     # Visual commit graph
git branch -a             # List all branches
git remote -v             # Show remotes
```

### Undoing Changes
```bash
git checkout -- file.html  # Discard changes to file
git reset HEAD file.html   # Unstage file
git reset --soft HEAD~1    # Undo last commit (keep changes)
git reset --hard HEAD~1    # Undo last commit (discard changes)
```

### Stashing
```bash
git stash                  # Save changes temporarily
git stash list             # List stashed changes
git stash pop              # Apply and remove latest stash
git stash apply            # Apply stash but keep it
```

### Tagging Releases
```bash
git tag v1.0.0            # Create tag
git tag -a v1.1.0 -m "Version 1.1.0 - Added rotation"
git push origin v1.0.0    # Push tag to GitHub
git push origin --tags    # Push all tags
```

## GitHub Features

### Issues
Track bugs and feature requests:
```
Go to: https://github.com/YOUR_USERNAME/gang-sheet-generator/issues
Click: "New issue"
Title: "Add image rotation feature"
Description: Detailed explanation
Labels: enhancement
```

### Pull Requests
Code review workflow:
```
1. Push feature branch to GitHub
2. Create Pull Request
3. Request review (if team)
4. Address feedback
5. Merge to main
6. Delete feature branch
```

### GitHub Pages (Free Hosting!)
Host your app for free:

```bash
# 1. Create gh-pages branch
git checkout -b gh-pages

# 2. Push to GitHub
git push origin gh-pages

# 3. Go to Settings > Pages
# 4. Source: gh-pages branch
# 5. Your app is live at:
# https://YOUR_USERNAME.github.io/gang-sheet-generator/gang-sheet-generator.html
```

## Advanced Git

### Cherry Pick
```bash
# Apply specific commit from another branch
git cherry-pick abc123def
```

### Rebase
```bash
# Replay commits on top of another branch
git checkout feature/my-feature
git rebase main
```

### Squash Commits
```bash
# Combine last 3 commits into 1
git rebase -i HEAD~3
# In editor: change 'pick' to 'squash' for commits to combine
```

## Git Configuration

### Set Up Your Identity
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### Useful Aliases
```bash
git config --global alias.st status
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.unstage 'reset HEAD --'
git config --global alias.last 'log -1 HEAD'
git config --global alias.visual 'log --graph --all --oneline'
```

Now you can use:
```bash
git st          # instead of git status
git co main     # instead of git checkout main
git visual      # see pretty commit graph
```

## Collaboration

### Working with Team
```bash
# Always pull before starting work
git pull origin main

# Create feature branch
git checkout -b feature/your-feature

# Push regularly
git push origin feature/your-feature

# Keep branch updated with main
git checkout main
git pull
git checkout feature/your-feature
git merge main

# Or use rebase
git rebase main
```

### Code Review Process
1. Create Pull Request
2. Reviewers comment on code
3. Address feedback
4. Push new commits
5. Get approval
6. Merge to main

## Troubleshooting

### Merge Conflicts
```bash
# When merge conflict occurs:
git status              # See conflicted files
# Edit files to resolve conflicts
# Look for <<<<<<< markers
git add resolved-file.html
git commit
```

### Accidentally Committed to Main
```bash
# Move commits to feature branch
git branch feature/my-work
git reset --hard origin/main
git checkout feature/my-work
```

### Pushed Wrong Commit
```bash
# Revert a commit
git revert abc123def
git push origin main
```

## Best Practices

1. **Commit Often** - Small, focused commits
2. **Write Good Messages** - Clear, descriptive
3. **Branch for Features** - Don't work directly on main
4. **Pull Before Push** - Stay in sync
5. **Review Your Changes** - Use `git diff` before committing
6. **Test Before Merge** - Ensure code works
7. **Keep Commits Clean** - One logical change per commit

## CI/CD Integration (Future)

When ready for automated testing/deployment:

### GitHub Actions Example
Create `.github/workflows/test.yml`:

```yaml
name: Test
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Run tests
        run: echo "Tests would run here"
```

## Resources

- [Git Documentation](https://git-scm.com/doc)
- [GitHub Guides](https://guides.github.com/)
- [Oh My Git!](https://ohmygit.org/) - Git learning game
- [Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)

---

**Remember:** Git is a tool to help you, not hinder you. Start simple and add complexity as needed!
