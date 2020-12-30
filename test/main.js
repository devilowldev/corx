let corex = require('../index')
let db = new corex({
    name: 'corex',
    dir: `${process.cwd()}/test/database/`
})

console.log("Set Data: ", db.set('beep', 'corex')) // => corex
console.log("Set Beop Data: ", db.set('beop', { x: "mew", k: "x" })) // => { x: 'mew', k: 'x'}

console.log('Has Data: ', db.has('beep')) // => true
console.log('Has Beop Data: ', db.has('beop')) // => true
console.log('Has BeopX Data: ', db.has('beopX')) // => false

console.log('Fetch: ', db.fetch('beep')) // => corex
console.log('Get: ', db.get('beop')) // => { x: 'mew', k: 'x'}

console.log('All: ', db.all())
// => [
// { ID: 'beep', data: '"corex"' },
// { ID: 'beop', data: '{"x":"mew","k":"x"}' }
//]

console.log('Delete: ', db.del('beep')) // => true
console.log('All When Delete: ', db.all()) 
// => [
// { ID: 'beop', data: '{"x":"mew","k":"x"}' }
//]