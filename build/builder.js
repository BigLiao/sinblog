'use strict'
const glob = require('glob');
const path = require('path');
const ejs = require('ejs');
const fs = require('fs-extra');
const MarkdownIt = require('markdown-it');
const hljs = require('highlight.js');
const MarkdownItKatex = require('@iktakahiro/markdown-it-katex');

class Builder {
    constructor() {
        this.blogPathList = [];
        this.blogDir = path.resolve(__dirname, '../blogs/**/*.md');
        this.markdownParser = new MarkdownIt({
            highlight: function (str, lang) {
                if (lang && hljs.getLanguage(lang)) {
                  try {
                    return hljs.highlight(lang, str).value;
                  } catch (__) {}
                }
            
                return ''; // use external default escaping
              }
        });
        this.markdownParser.use(MarkdownItKatex);
        this.templatePath = path.resolve(__dirname, '../layouts/blog.ejs');
        this.distPath = path.resolve(__dirname, '../dist');
        try {
            fs.accessSync(this.distPath);            
        } catch (error) {
            fs.mkdirSync(this.distPath);
        }
    }

    async run() {
        await this.scanMarkdown();
        for (let i = 0; i < this.blogPathList.length; i++) {
            this.parseMarkdown(this.blogPathList[i]);
        }
    }

    scanMarkdown() {
        return new Promise((resolve, reject) => {
            glob(this.blogDir, (err, matches) => {
                if (err) {
                    reject(err);
                    throw (err)
                }
                this.blogPathList = matches;
                resolve();
            });
        })
        
    }

    async parseMarkdown(mdPath) {
        console.log('read file: ', mdPath);
        const mdFile = fs.readFileSync(mdPath, {
            encoding: 'utf8'
        });
        const result = this.markdownParser.render(mdFile);
        const html = await ejs.renderFile(this.templatePath, {
            blog: result,
            title: '博客'
        });
        const filename = path.basename(mdPath).split('.')[0];
        const distPath = path.resolve(this.distPath, filename + '.html');
        fs.writeFileSync(distPath, html);

    }
}

const builder = new Builder();
builder.run();
