var fs = require('fs-extra')
var cwd = process.cwd()
var path = require('path')
fs.copySync(path.join(cwd, 'dist/styles'), path.join(cwd, 'lib/styles'))
console.log('Bundle style files copyed.')
