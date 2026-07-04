# Git Complete Guide

## Table of Contents
1. [Introduction to Git](#introduction-to-git)
2. [Git Terminology](#git-terminology)
3. [Initial Setup](#initial-setup)
4. [Basic Commands](#basic-commands)
5. [File States](#file-states)

---

## Introduction to Git

### What is Git?

**Git** is a free and open-source version control system that records changes to a file or set of files over time so that you can recall specific versions later.

### Why Use Git?

- ✅ Track changes in your code
- ✅ Collaborate with team members
- ✅ Revert to previous versions
- ✅ Create branches for features
- ✅ Merge code from multiple developers

---

## Git Terminology

### Working Directory

<img src="./img/working-area.png" alt="container" />

**Definition:** The directory where developers create and modify files.

```
working-directory/
├── index.html
├── style.css
└── script.js
```

---

### Staging Area (Index)

**Definition:** An intermediate area where files are prepared before committing to the repository.

```
Working Directory → Staging Area → Local Repository
```

---

### Repository

**Definition:** A storage location where Git stores files and metadata.

**Types:**

1. **Local Repository:** Stored on your computer
2. **Remote Repository:** Stored on a server (GitHub, GitLab, Bitbucket)

---

### Commit

**Definition:** The process of saving changes from the staging area to the local repository permanently.

**Each commit has:**
- Unique ID (SHA-1 hash)
- Author information
- Timestamp
- Commit message

---

### Checkout

**Definition:** The process of switching between branches or restoring files from the repository to the working directory.

---

### HEAD

**Definition:** A pointer that always points to the latest commit in the current branch.

```
main branch: C1 → C2 → C3 → HEAD
```

---

## Initial Setup

### Install Git

**Download Git:**
- Windows: https://git-scm.com/download/win
- Mac: `brew install git`
- Linux: `sudo apt-get install git`

---

### Configure Git

```bash
# Set username
git config --global user.name "Your Name"

# Set email
git config --global user.email "your.email@example.com"

# Check configuration
git config --list

# Check specific config
git config user.name
git config user.email
```

---

### Check Git Version

```bash
git --version
# or
git -v
```

**Output:**
```
git version 2.40.0
```

---

## Basic Commands

### Initialize a Git Repository

```bash
# Navigate to your project folder
cd my-project

# Initialize Git repository
git init
```

**Output:**
```
Initialized empty Git repository in /path/to/my-project/.git/
```

**This creates:**
- A hidden `.git` folder
- Tracks all changes in this directory

---

### Check Repository Status

```bash
git status
```

---

### List Files in Staging Area

```bash
# Show files in working directory
ls
```

---

## File States

### 1. Untracked Files

**Definition:** Newly created files that Git is not tracking yet.

**Color in git status:** Red

**Example:**
```bash
Untracked files:
  (use "git add <file>..." to include in what will be committed)
        newfile.js
```

---

### 2. Tracked Files

**Definition:** Files that Git is monitoring for changes.

**States of Tracked Files:**

#### a) Unmodified
- File hasn't changed since last commit
- Not shown in `git status`

#### b) Modified
- File has been changed but not staged
- **Color:** Red

**Example:**
```bash
Changes not staged for commit:
        modified:   index.html
```

#### c) Staged
- File is in staging area, ready to commit
- **Color:** Green

**Example:**
```bash
Changes to be committed:
        modified:   index.html
```

---

### Git Reset

**Description:** Remove changes from staging area or undo commits.

**Use Cases:**
- Remove files from staging area
- Undo commits
- Move HEAD to a previous commit
<img src="./img/reset.png" alt="reset" />
---

### Reset from Staging Area

```bash
# Remove specific file from staging
git reset <file-name>
git reset index.html

# Remove all files from staging
git reset
```

---

### Reset Commits (3 Modes)

#### 1. Mixed Mode (Default)

**Description:** 
- Moves HEAD to specified commit
- Removes changes from **staging area**
- Keeps changes in **working directory**

```bash
# Reset to specific commit (mixed mode)
git reset <commit-id>
git reset a1b2c3d

# Reset to HEAD (unstage all changes)
git reset

# Reset to previous commit
git reset HEAD~1
```

**Result:**
- Commits removed ✅
- Staging area cleared ✅
- Working directory unchanged ✅

---

#### 2. Soft Mode

**Description:**
- Moves HEAD to specified commit
- Keeps changes in **staging area**
- Keeps changes in **working directory**

```bash
git reset --soft <commit-id>
git reset --soft a1b2c3d

# Reset to previous commit (keep changes staged)
git reset --soft HEAD~1
```

**Result:**
- Commits removed ✅
- Staging area unchanged ✅
- Working directory unchanged ✅

---

#### 3. Hard Mode

**Description:**
- Moves HEAD to specified commit
- Removes changes from **staging area**
- Removes changes from **working directory**

```bash
git reset --hard <commit-id>
git reset --hard a1b2c3d

# Reset to HEAD (discard all changes)
git reset --hard HEAD

# Reset to previous commit (discard all changes)
git reset --hard HEAD~1
```

**Result:**
- Commits removed ✅
- Staging area cleared ✅
- Working directory cleared ✅

**⚠️ Warning:** Changes are permanently lost!

---
# 🌿 Git Workflow

## Branch Naming Conventions

---

## Git Commands Workflow

### Login & Clone

**Login to npm**
```bash
npm login
```

**Normal start → use plain clone**
```bash
git clone https://github.com/org/project.git
```

**When someone shares a specific branch to work on**
```bash
git clone -b feature/payment https://github.com/org/project.git
```

---

### Initial Setup

```bash
git init
npm i --verbose
git fetch
git fetch origin
git pull origin main
```

---

### Branching

**Create new branch**
```bash
git checkout -b "development/mcr-task-1234-technician-display"
```

**Check current branch**
```bash
git branch
```

---

### Checking Differences

**Check status / diff**
```bash
git status
git diff src/file.tsx
```

**Compare two commits**
```bash
git diff <commit-id1> <commit-id2>
git diff a1b2c3d e4f5g6h
```

**Compare with previous commit**
```bash
git diff HEAD~1 HEAD
```

---

### Stashing

**List all stashes**
```bash
git stash list
```

**Stash work (with descriptive name)**
```bash
git stash push -m "WIP: technician display logic implementation"
```

**Apply/pop stash**
```bash
git stash pop    # Applies most recent stash (stash@{0}) and REMOVES it from list
git stash apply  # Applies most recent stash and KEEPS it in list
```

**Apply a specific stash (stays in list)**
```bash
git stash apply "stash@{1}"
```

**Delete all stashes**
```bash
git stash clear
```

---

### Staging Changes

```bash
git add .                    # stages ALL changed files
git add src/file.tsx         # stages ONLY this one file
git add src/components/      # stages all files inside folder
git add file1.js file2.css   # add multiple files
git add *.js                 # add all files with specific extension
```

---

### Committing

```bash
git commit -m "WIP: technician display logic implementation"
```

**Best Practice Commit Messages**

✅ Good examples:
```bash
git commit -m "Add user authentication feature"
git commit -m "Fix login button alignment issue"
git commit -m "Update dependencies to latest versions"
```

**Retrigger Jenkins**
```bash
git commit --allow-empty -m "trigger jenkins"
git push
```

---

### Viewing History

**Compact single-line commit history**
```bash
git log --oneline
```

**Last commit with file changes / full diff**
```bash
git show --stat
git show
```

**Last 10 commits (one line each)**
```bash
git log --oneline -10
```

**Last 5 changes (with PR number) to a specific file**
```bash
git log --oneline -5 src/components/suppliers/components/SuppliersList.tsx
```

---

### Pushing

**Push branch**
```bash
git push origin feature/new
# Pushes branch to remote one time. Next time you still have to type full command.
```

**Push and link local branch to remote permanently**
```bash
git push -u origin development/mcr-my-branch
# After this, just typing `git push` or `git pull` is enough
```

**Push with skip hooks**
```bash
git push origin development/mcr-my-branch --no-verify
git push origin development/mcr-my-branch --no-verify --force
```

**Force push feature branch**
```bash
git push -f origin feature-branch
```

---

### Discarding & Resetting

**Discard ALL unstaged changes**
```bash
git restore .
```

**Reset to last commit (DESTROYS all uncommitted changes)**
```bash
git reset --soft HEAD~1
git reset --hard
git reset --hard <commit-hash>
```

**Remove specific file from staging (unstage)**
```bash
git reset <file-name>
```

---

### Cherry-picking

**Bring changes from a specific commit**
```bash
git cherry-pick <commit-id>
git cherry-pick <commit-id1> <commit-id2>
git cherry-pick abc1234 def5678
```

---

### Reverting

**Revert last push commit**
```bash
git revert HEAD
git push
```

**Revert specific commit**
```bash
git revert <commit-id>
git revert a1b2c3d
```

**Revert multiple commits**
```bash
git revert <commit-id1> <commit-id2>
```

---

### Rebasing

**Rebase feature branch onto main**
```bash
git checkout feature-branch
git rebase main
```

**Abort rebase**
```bash
git rebase --abort
```

**Fetch changes from remote and rebase local commits on top (instead of merge commit)**
```bash
git pull --rebase origin main
```

---

### Validation & Misc

**Before push - validate**
```bash
npm run validate-ts
```

**Install specific UX component version**
```bash
npm i @mitchell/react.component.ux@2.2.xxxxxx
```

**Clears npm's local package cache stored on your machine**
```bash
npm cache clean --force
```

**Rebuilds the barrel file (index.ts) transform cache for monorepo**
```bash
npm run build-barrel-transform
```

**Jenkins fails check**
```bash
npm ci && npm run lint && npm run build && npm run test
```

---

## Handling Merge Conflicts

**In terminal when conflict occurs:**
```bash
# 1. Press ESC
# 2. Type: :wq
# 3. Press Enter
```

**Alternative - resolve in VS Code:**
```bash
# 1. Open conflicted files
# 2. Choose "Accept Current Change" or "Accept Incoming Change"
# 3. Save and commit
```

---

## 📝 Git Push Error Fix - Quick Reference

### 🚨 When You See This Error:
```bash
To https://github.com/enlyte-apd/monorepo-react-redux-module.git
 ! [rejected]              development/mcr-local-labor-post-screen -> development/mcr-local-labor-post-screen (non-fast-forward)
error: failed to push some refs to 'https://github.com/enlyte-apd/monorepo-react-redux-module.git'
hint: Updates were rejected because the tip of your current branch is behind
hint: its remote counterpart. If you want to integrate the remote changes,
hint: use 'git pull' before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help'
```

### 🔧 Quick Fix Steps:

**Step 1: Pull remote changes**
```bash
git pull origin your-current-branch
```

**Step 2: Exit merge editor / resolve merge conflict**
```bash
:wq
# then press Enter
```

**Step 3: Push again**
```bash
git push origin your-current-branch --force
```

---

## 📝 Git Pull Unnecessary Commit Fix - Quick Reference

```bash
git checkout main
git pull origin main
git checkout origin your-current-branch
git rebase main
```

**If conflict occurs:**
```bash
# Esc → :wq → Enter
# resolve conflict, then:
git rebase --continue
git push origin feature-branch --no-verify --force
```

**Else:**
```bash
# nothing to do
```