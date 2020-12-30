module.exports = (db, params, table) => {
    let fet = db.prepare(`SELECT * FROM ${table} WHERE ID = (?)`).get(params.id);

    if(!fet) {
        db.prepare(`INSERT INTO ${table} (ID,json) VALUES (?,?)`).run(params.id, '{}');
        fet = db.prepare(`SELECT * FROM ${table} WHERE ID = (?)`).get(params.id);
    }

    fet = JSON.parse(fet.json);
    try { fet = JSON.parse(fet) } catch (e) {}

    params.data = JSON.stringify(params.data);

    db.prepare(`UPDATE ${table} SET json = (?) WHERE ID = (?)`).run(params.data, params.id);

    let newD = db.prepare(`SELECT * FROM ${table} WHERE ID = (?)`).get(params.id).json;
    if(newD === '{}') return null
    else {
        newD = JSON.parse(newD)
        try { newD = JSON.parse(newD) } catch (e) {}
        return newD
    }
}