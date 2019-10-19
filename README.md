# SinBlog
> An elegant blog site generator

[Demo and Docs](https://bigliao.github.io/sinblog/)
[示例和文档](https://bigliao.github.io/sinblog/document/)

```bash
# Check into your blog folder
cd <YOUR_BLOG_FOLDER>

# Initialize
sinblog init

# Configuration...

# Build
sinblog build

# Publish to GitHub Pages
sinblog publish
```



## Features

- Simple, fast and elegant
- Support Markdown and Latex

- Pure static website generator, you can deploy it anywhere
- One-command to build and publish

Still developing day and night...

## Todos

- Searching and tag filter supports
- More themes
- Home page and about-me page layouts

Need other features? You can open an issure.

## Usage with Trivas CI

By using [GitHUb](https://github.com) and [Trivas CI](https://travis-ci.com/) , It is quite easy to publish your blogs. Just a config file and then no worry about any program and environment stuffs.

[Use SinBlog with Trival CI]()

## Usage with command line

### Installation

SinBlog is powered by [Node.js](https://nodejs.org). Before install, you should have the environment.

Use `npm` to install SinBlog:

```bash
npm install -g sinblog
```

### Initialize

Once SinBlog is installed, check into your blog folder in command line, and run the initialize command:

```bash
cd <YOUR_BLOG_FOLDER>
sinblog init
```

Now your blog folder may look like:

```plain
YOUR_BLOG_FOLDER
|_technique
  |_hello-world.md
|_literature
  |_some-blog.md
|
|_sinblog.config.yml
```

SinBlog added a configuration file, `sinblog.config.yml`, to your blog folder.

Alternatively, you can create a `sinblog.config.yml` file by yourself, then copy and paste the configurations.

### Configuration

SinBlog read configurations from file `sinblog.config.yml` (also support  `sinblog.config.json`) .

Default `sinblog.config.yml`:

```yml
site:
  title: Sin·Blog # Site name and title
  author: BigLiao

build:
  theme: default # Only support default so far
  blogPage:
    - title: Technique
      dirPath: ./technique
      urlPath: technique
    - title: Literature
      dirPath: ./literature
      urlPath: literature
  pulicPath: /
```

Learn about YAML format:  [YAML Tutorial: Everything You Need to Get Started in Minutes](https://rollout.io/blog/yaml-tutorial-everything-you-need-get-started/)

##### site.title

Required. Type: string

Shows at navbar and website title.

##### site.author

Required. Type: string

Your name, shows at footer.

##### build.theme

Optional. Type: string. Default: `default`.

Only supoort value `default`.

##### build.blogPage

Required. Type: string or array.

If you only have one folder as your blog folder, you can set `build.blogPage` to the relative path (relative to configuration file):

```yaml
build:
  blogPage: RELATIVE_PATH_TO_BLOG_FOLDER
```

If you have more then one folder as different classes, you can set it an array, as the default demo. 

**build.blogPage[].title**

Required. Type: string. Show at navbar.

**build.blogPage[].dirPath**

Required. Type: string. Relative path.

**build.blogPage[].urlPath**

Optional. Type: string. A sub URL path. If not specified, SinBlog will take the dirname.

##### pulicPath

Optional. Type: string. Default: `/`.

If your website is in a subdirectory (such as `http://example.org/blog`),  you have to set `PublicPath` to  `/blog/`.



## Build

Run just one command `sinblog build` in `<YOUR_BLOG_FOLDER>`.

```bash
sinblog build
```



SinBlog will generate a `.temp` folder and a `dist` folder in `<YOUR_BLOG_FOLDER>`. You should put these into your `.gitignore` file. The `.temp` folder is useless, I will remove it later. The `dist` folder contains final website files.

## Serve

Serve the website locally:

```bash
sinblog serve
```



## Publish

### Publish to GitHub Pages

If your blog folder is under `git` control, and have related to GitHub....., You can publish your blog to [GitHub Pages](https://pages.github.com/) by SinBlog.

```bash
sinblog publish
```

SinBlog will push the `dist` folder to `gh-pages` branch on GitHub.

For example, if your GitHub repository URL is  `https://github.com/USER_NAME/blog/`, you can visite your blog site at `https://USER_NAME.github.io/blog/`.