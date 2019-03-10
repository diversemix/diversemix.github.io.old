const fs = require('fs')

const replaceAll = (template, key, value) => (
  template.replace(new RegExp(`{${key}}`, 'g'), value)
)

const buildPage = (pageText, pageScript) => {
  const template = fs.readFileSync(`${__dirname}/templates/index.html`, 'utf8')
  const text = replaceAll(template, 'page', pageText)
  return replaceAll(text, 'page_script', pageScript)
}

const build = (page) => {
  const pageText = fs.readFileSync(`${__dirname}/templates/${page}.html`, 'utf8')
  const pageScript = fs.readFileSync(`${__dirname}/templates/${page}-script.html`, 'utf8')
  return buildPage(pageText, pageScript)
}

if (process.argv.length < 3 || !process.argv[2]) {
  console.error('Need to supply a page as an arugment')
  process.exit(1)
}

const page = process.argv[2]
console.log(build(page))
