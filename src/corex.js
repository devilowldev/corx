const Database = require("better-sqlite3");

let db;

let dops = {
    name: 'corex',
    dir: './database/'
}

var modules = {
    fetch: require('./modules/fetch.js'),
    get: require('./modules/fetch.js'),
    set: require('./modules/set.js'),
    has: require('./modules/has.js'),
    all: require('./modules/all.js'),
    del: require('./modules/del.js'),
}

class corex {
    /**
     * Create a corex db
     * @param {*} ops 
     * @example const corex = require('corex');
     * const db = new corex({ name: 'corex', dir: './database' })
     */
    constructor(ops={}) {
        if(!ops) ops = dops
        if(!ops.name) ops.name = dops.name
        if(!ops.dir) ops.dir = dops.dir

        this.ops = ops

        if(!db) db = new Database(`${ops.dir}${ops.name}.sqlite`)

        if(typeof ops.name !== 'string') throw new TypeError("[COREX] > DB name must be string.")
        else if(ops.name.includes(" ")) throw new TypeError("[COREX] > DB name can\'t have spaces")
    }

    /**
     * Fetch the value from key
     * @param {*} key 
     * @example db.fetch('x')
     */
    fetch(key) {
        if(!key) throw new TypeError('[COREX] > Please supply a key')
        return this.core('fetch', { id: key || {} }, this.ops.name )
    }

    /**
     * Get the value from key
     * @param {*} key 
     * @example db.get('x')
     */
    get(key) {
        if(!key) throw new TypeError('[COREX] > Please supply a key')
        return this.core('get', { id: key || {} }, this.ops.name )
    }

    /**
     * Set the value in db
     * @param {*} key 
     * @param {*} value 
     * @example db.set('x', 'corex')
     */
    set(key, value) {
        if(!key) throw new TypeError('[COREX] > Please supply a key')
        if(!value && value != 0) throw new TypeError('[COREX] > Please supply a value')
        return this.core('set', { stringify: true, id: key, data: value || {} }, this.ops.name )
    }

    /**
     * Check the value of the key
     * @param {*} key 
     * @example db.has('x')
     */
    has(key) {
        if(!key) throw new TypeError('[COREX] > Please supply a key')
        return this.core('has', { id: key || {} }, this.ops.name)
    }

    /**
     * Show all key and value in the db
     * @example db.all()
     */
    all() {
        return this.core('all', {}, this.ops.name )
    }

    /**
     * Delete the key and value
     * @param {*} key 
     * @example db.del('x')
     */
    del(key) {
        if(!key) throw new TypeError('[COREX] > Please supply a key')
        return this.core('del', { id: key || {} }, this.ops.name)
    }

    /**
     * Delete the key and value
     * @param {*} key 
     * @example db.delete('x')
     */
    delete(key) {
        if(!key) throw new TypeError('[COREX] > Please supply a key')
        return this.core('del', { id: key || {} }, this.ops.name)
    }

    /**
     * The core make for run modules
     * @param {*} module 
     * @param {*} params 
     * @param {*} table 
     */
    core(module, params, table) {

        db.prepare(
            `CREATE TABLE IF NOT EXISTS ${this.ops.name} (ID TEXT, json TEXT)`
        ).run();

        if (params.data && params.data === Infinity)
            throw new TypeError(
                `[COREX] > You cannot set Infinity into the database | ID: ${params.id}`
            );

        if (params.stringify) {
            try {
                params.data = JSON.stringify(params.data);
            } catch (e) {
                throw new TypeError(
                    `[COREX] > Please supply a valid input | ID: ${params.id}\nError: ${e.message}`
                );
            }
        }

        if (params.id && params.id.includes(".")) {
            let unparsed = params.id.split(".");
            params.id = unparsed.shift();
        }

        return modules[module](db, params, table);
    }

}

module.exports = corex