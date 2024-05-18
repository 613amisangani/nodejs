const path = require('path')

console.log(path.basename('D:/user/hello.txt'))
console.log(path.join('public','hello.txt'))
console.log(path.dirname(__filename))
console.log(path.dirname(__dirname))
console.log(path.extname(__filename))
console.log(path.format({
    root: '/ignored',
    dir: '/home/user/dir',
    base: 'file.txt',
  }))

console.log(path.isAbsolute(__filename))
console.log(path.relative('/user/hello.txt','/yhg/oik/okij'))
console.log(path.parse(__filename))
console.log(path.posix)

















