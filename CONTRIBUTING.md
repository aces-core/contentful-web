# Contributing to ACES Contentful Web

Thank you for your interest in contributing to **ACES Contentful Web**!  
This project is maintained by [@mpalazzo-dl](https://github.com/mpalazzo-dl) and welcomes community contributions that help improve usability, flexibility, and performance in composable website development.

This guide will help you contribute code, components, ideas, and documentation in a smooth and structured way.

---

## 🚀 What You Can Contribute

We're especially looking for help with:

- 🧱 New layout or page components
- 🧠 Content modeling enhancements
- 📦 Additional CMS integrations (e.g., form providers, personalization)
- 🎨 Theme and UI design updates (Storybook-supported)
- 🧪 Component test coverage or accessibility improvements
- 🛠️ CLI command enhancements
- 🐞 Bug fixes and refactors
- 📚 Docs, examples, and onboarding improvements

---

## 🌳 Branching Strategy
If you’re a collaborator on the repo (not using forks):
1. Create a feature branch off of main:
    ```base
    git checkout -b feature/your-feature-name
    ```
2. Commit using clear, descriptive messages:
    ```base
    git commit -m "feat: add ContactForm component with HubSpot support"
    ```
3. Push your branch:
    ```base
    git push origin feature/your-feature-name
    ```
4. Open a Pull Request into main with:
    - A clear title
    - A summary of what you added or changed
    - Screenshots or context if visual/UI-related
    - Any testing or setup notesin feature/your-feature-name

## 🌳 Branching Strategy for Non-Collaborators (Fork & PR Process)
If you are not a collaborator on the repository (i.e., you’re contributing via a fork), follow these steps to contribute:
1. Fork the repository  
    Go to the ACES Contentful Web GitHub repository and click the Fork button in the top-right corner to create a copy of the repository under your GitHub account.
2. Clone your fork  
    Clone your fork to your local machine:
    ```bash
    git clone https://github.com/YOUR_USERNAME/aces-contentful-web.git
    cd aces-contentful-web
    ```
3. Create a feature branch off of main:
    ```base
    git checkout -b feature/your-feature-name
    ```
4. Develop your feature or fix the bug on the new branch you created. Be sure to commit early and often, with descriptive messages:
    ```base
    git commit -m "feat: add new ContactForm component"
    ```
5. Push your branch:
    ```base
    git push origin feature/your-feature-name
    ```
6. Create a Pull Request  
Go to the original ACES Contentful Web repo, and click the New Pull Request button.
    - Go to the original ACES Contentful Web repo, and click the New Pull Request button.
    - Provide a detailed description of your changes and submit the PR.

---

## ✅ PR Review Guidelines
- Smaller PRs are easier to review and merge quickly.
- Include a Storybook story if you're adding or modifying components.
- Keep styles in line with existing design patterns (MUI + theme).
- Write reusable, composable code with future use in mind.
- Use consistent naming conventions and project folder structure.

## 🧑‍💻 Maintainer Notes
This project is maintained by Mike Palazzo.
Collaborators may be given commit or PR access to work within the main repo.
If you're unsure about a change, open a Discussion or Issue first — happy to help guide scope or direction.