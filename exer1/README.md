# Exercise 1 - Dev Environment Setup

## Description
In this exercise, you will install and set up all the necessary tools for web development. This exercise is **mandatory** as it will be a basis for all that we do in this bootcamp. 

## Submission
Collect points for this exercise by sending your GitHub username in the `gt-bootcamp-dev` Slack channel. 
- **Due Date**: TBD

## Instructions

### 1. Install Git
Git is a developer tool used to track file changes and much more.
#### Mac
1. Open the Terminal app via Spotlight search
2. Check if you have Git installed already by typing the command `git` 
	1. If you get a prompt asking "Would you like to install the tools now?" (Xcode Dev tools), selected **Install**
	2. If you see a list of common Git commands, continue to the next step
3. Configure your Git username by typing the command `git config --global user.name "Your Name"`
4. Configure your Git email by typing the command `git config --global user.email "example@gmail.com"` (Typically this is the email you will use to sign up for GitHub)
5. Congrats you installed Git!

#### Windows
1. Visit https://git-scm.com and download the Windows Installer
2. Open the Windows Installer on your computer and go through the prompts
3. Open GitBash
4. Configure your Git username by typing the command `git config --global user.name "Your Name"`
5. Configure your Git email by typing the command `git config --global user.email "example@gmail.com"` (Typically this is the email you will use to sign up for GitHub)
6. Congrats you installed Git!

### 2. Create a GitHub Account
A GitHub account will allow you to be added to the GitHub organization, so you can pull and push to repos and work on your projects collaboratively.
1. Go to https://github.com and **Sign up** to create an account or **Log in** if you already have one
2. Create a username and password
3. Verify an email
4. Send a message in the `gt-bootcamp-dev` Slack channel with your GitHub username, and an instructor will add you to the organization
5. Accept the invite to the GitHub Organization in your email

### 3. Install Node
Node is a version of Javascript that can run on the server. We will use this in both frontend and backend development. Installing Node also installs NPM (Node Package Manager) for us. We will talk more about these two things later. 
1. Download and open the LTS release of Node from https://nodejs.org/en/
2. In Terminal or GitBash, check if node is installed by entering the command `node -v`
	- if the output looks something like `v18.17.1`, it has been successfully installed

### 4. Install Visual Studio Code
Visual Studio Code is the code editor of choice for web developers since it has lots of helpful extensions and autocomplete features. 
1. Download and install Visual Studio Code from https://code.visualstudio.com/download
2. Learn more about what extensions might be useful in the Bootcamp Curriculum [here](https://www.notion.so/gtbitsofgood/Intro-to-VSCode-2f85ca6802d54783b9fd0a9bf8370c83)

### 5. React Developer Tools Extension
This chrome extension adds React debugging tools to Chrome Dev Tools. 
1. Add and install the extension [here](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en) 
### 6. Install Homebrew (Mac users only)
Homebrew is a package manager for macOS. Sometimes it makes it easier to install certain things like Node or Git. This is totally optional, but I do recommend it for mac programmers. 
1. Visit https://brew.sh and copy the command to install Homebrew
2. Open Terminal and paste the command that was just copied
