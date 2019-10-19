---
Title: Use SinBlog with Travis CI
Author: BigLiao
Date: 2019-10-10
---

# Use SinBlog with Travis CI

This tutorial talks about how to use SinBlog with Travis CI to deploy your blog site automatically.

![](/Users/liao/Downloads/Featured4.png)

## Introduction

### What is Travis CI

CI is the abbreviation of Continuous Integration.

Ok, It's a little complicated......

> *Travis CI* is a hosted continuous integration service used to build and test software projects hosted at GitHub. *Travis CI* provides various paid plan for private projects, and a free plan for open source. TravisPro provides custom deployments of a proprietary version on the customer's own hardware.
>
> (Wikipedia)

In short, Travis CI is a tool that can run automation scripts in your GitHub repository.

Check their website for more information: [https://travis-ci.com](https://travis-ci.com/). 

It doesn't matter if you dono't understand what Travic CI do,  Just follow this tutorial.

## Preparation

### A GitHub Repository

First, you should have a GitHub account. If you don't, click [here](https://help.github.com/en/articles/signing-up-for-a-new-github-account) to register one.

Create a repository to store your blogs.

If you don't know how to use Git or GitHub, may be you are not very appropriate for this tutorial......

### Setup Travis

Open  [travis-ci.com](https://travis-ci.com/) in your broswer, click the big green button to sign up.

![travis-ci.com](/Users/liao/Desktop/截屏2019-10-1921.21.57.png)

Follow the sign up guide and sign in at travis-ci.com.

Click the green *Activate* button, and select the repositories you want to use with Travis CI.

The official document is really explicit: [Travis CI Tutorial](https://docs.travis-ci.com/user/tutorial/?utm_source=help-page&utm_medium=travisweb)

## Configuration

### GitHub Token

In order to let Travis CI to control your GitHub repositroy, you need to generate a GitHub Token for Travis CI.

Follow this document: [Creating a personal access token for the command line](https://help.github.com/en/articles/creating-a-personal-access-token-for-the-command-line).

Select scopes as below:

![](/Users/liao/Desktop/截屏2019-10-1921.56.52.png)

Now you have a GitHub Token in your clipboard. Be careful don't lose it because you will not be able to see it again.

### Set GitHub Token to Environment Value

Open the Dashboard at travis-ci.com, choose your target repositroy.

![](/Users/liao/Desktop/截屏2019-10-1921.43.22.png) 

Click `More options` -> `Settings`, scroll down, see the Environment Variables part.

![](/Users/liao/Desktop/截屏2019-10-1922.00.32.png)

Paste your GitHub Token in VALUE input, and set NAME to `GITHUB_TOKEN`, then click the Add button in the right.

> **Do not**  turn the DISPLAY VALUE IN BUILD LOG option on. 

### Add `.travis.yml` to your repo

Create a file named `.travis.yml` in your blog directory, and copy this configurations:

```yml
language: node_js
node_js:
  - node
install:
  - npm install -g sinblog
script:
  - sinblog build
deploy:
  provider: pages
  local_dir: dist
  skip_cleanup: true
  github_token: $GITHUB_TOKEN  # Set in the settings page of your repository, as a secure variable
  keep_history: false
  on:
    branch: master

```

Add `.travis.yml` to git control, and push it to GitHub.

### SinBlog configurations 

Add a `sinblog.config.yml` file. See [SinBlog Docs](#) for more details.

These are all steps you need to do.

## Publication

How to publish a blog?

1. Write a Markdown blog file, for example, `hello-world.md`.
2. `git add hello-world.md`
3. `git commit -m 'blog'`
4. `git push`

Then Travis CI will generate blog site, and push it to GitHub Pages. All is automacial.

For example, if your GitHub repository URL is  `https://github.com/USER_NAME/blog/`, you can visite your blog site at `https://USER_NAME.github.io/blog/`.