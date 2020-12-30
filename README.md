# Corx
This package make your create a database using better-sqlite3 quick

# Link
Documentation: [corx.js.org](https://www.corx.js.org)

Support: [discord.gg/hw7XPxz](https://www.discord.gg/hw7XPxz)

NPM: [npmjs.com/package/corx](https://www.npmjs.com/package/corx)

# Example
```js
const corx = require('corx')
const db = new corx({
    name: 'corx',
    dir: `${process.cwd()}/database/`
})

db.set('x', 'corx')
// => corx

db.set('user', { money: 500, bot: false })
// => { money: 500, bot: false }

db.has('xm')
// => false

db.has('user')
// => true

db.fetch('x')
// => corx

db.get('x')
// => corx

db.all()
// => [
//  { ID: 'x', data: 'corx' },
//  { ID: 'user', data: { money: 500, bot: false } },
// ]

db.del('x')
// => true
```

# Installation
if you're having troubles when installing, please follow this [troubleshooting guide](https://github.com/JoshuaWise/better-sqlite3/blob/master/docs/troubleshooting.md).

## Linux & Windows
```bash
npm install corx
```

## Mac
```
1. Install XCode
2. Run `npm i -g node-gyp in terminal`
3. Run `node-gyp --python /path/to/python2.7`
4. Run `npm install corx`
```

# Authors
* **[1GPEX](https://github.com/1gpex)** - *Make all modules, make typing and test*
* **[Elstargo00](https://github.com/Elstargo00)** - *Help make a package and make typing* 