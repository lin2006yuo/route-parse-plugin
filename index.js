const glob = require('glob')
const path = require('path')
const fs = require('fs')

const directory = 'views'
let file_count = 0

const files = glob.sync(directory + '/**/*.vue')
files.forEach(filePath => {
  file_count ++
  let content = fs.readFileSync(path.resolve(filePath), 'utf8')
  const contentArr = content.split('')
  const parseRoute = require('./util');
  const data = parseRoute(contentArr)
  
  console.log(data)
  console.log('-------------------------------------')
})
console.log('文件数量：' + file_count)