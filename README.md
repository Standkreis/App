# Mono Frontend

This is the frontend mono repo for Standkreis, using **[Turborepo](https://turbo.build/repo/docs)**. It collects all the frontend **📱 Apps** and **📦 Packages** .

---

## 👋 Get started

To get started first `install` the dependencies with `npm` and run some turbo commands from the root directory to `build`, run `dev` locally or `lint` the code.

### 📦 Install Dependencies

We are using `npm` as a package manager, please follow this convention and make sure you also use the correct `node` version.

```bash
# if you don't have node v18.18.0 installed yet
nvm install
nvm use
npm i
```

### 🛠 Build

```bash
# builds all apps & packages
turbo build

# builds only one app or package
turbo build --filter app
turbo build --filter ui
```

### 🏃‍♀️ Run locally

By default the target will be served on localhost:3000. If you run multiple apps and packages they will be served each on separate ports, just check the console - it will tell you where you can find them.

```bash
# runs all apps & packages
turbo dev

# runs only one app or package
turbo dev --filter app
turbo dev --filter ui
```

### 🧹 Lint

```bash
# lints all apps & packages
turbo lint

# runs only one app or package
turbo lint --filter app
turbo lint --filter ui
```

---

## 📐 Scope

Each **📱 App** and **📦 Package** is 100% [TypeScript](https://www.typescriptlang.org/).

### 📱 Apps

- `app`: The core website and app for the Standkreis platform

### 📦 Packages

- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

---

### ⚡️ Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

---

### TBD - Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
cd my-turborepo
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```
npx turbo link
```
