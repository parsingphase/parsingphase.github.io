## Building the project site locally

### Jekyll

`bundle exec jekyll serve`

- https://help.github.com/articles/setting-up-your-github-pages-site-locally-with-jekyll/
- https://github.com/jekyll/jekyll/issues/7274
- https://help.github.com/articles/repository-metadata-on-github-pages/
- https://jekyll.github.io/github-metadata/authentication/

### 11ty

`npx @11ty/eleventy --serve` - run locally
`npx @11ty/eleventy` - generate to \_site for upload
`npx @11ty/eleventy --output tmp/local --pathprefix $PWD/tmp/local` - generate to tmp/local with relative paths

- https://www.11ty.dev
