# Corex
This package make your create a database using better-sqlite3 quick

# Link
Documentation: [corex.js.org](https://www.corex.js.org)

Support: [discord.gg/hw7XPxz](https://www.discord.gg/hw7XPxz)

NPM: [npmjs.com/package/corex](https://www.npmjs.com/package/corex)

# Example
```js
const corex = require('corex')
const db = new corex({
    name: 'corex',
    dir: `${process.cwd()}/database/`
})

db.set('x', 'corex')
// => corex

db.set('user', { money: 500, bot: false })
// => { money: 500, bot: false }

db.has('xm')
// => false

db.has('user')
// => true

db.fetch('x')
// => corex

db.get('x')
// => corex

db.all()
// => [
//  { ID: 'x', data: 'corex' },
//  { ID: 'user', data: { money: 500, bot: false } },
// ]

db.del('x')
// => true
```

# Installation
if you're having troubles when installing, please follow this [troubleshooting guide](https://github.com/JoshuaWise/better-sqlite3/blob/master/docs/troubleshooting.md).

## Linux & Windows
```bash
npm install corex
```

## Mac
```
1. Install XCode
2. Run `npm i -g node-gyp in terminal`
3. Run `node-gyp --python /path/to/python2.7`
4. Run `npm install corex`
```

# Authors
* **[1GPEX](https://github.com/1gpex)** - *Make all modules, make typing and test*
* **[Elstargo00](https://github.com/Elstargo00)** - *Help make a package and make typing* 