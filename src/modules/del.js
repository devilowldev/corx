module.exports = (db, params, table) => {

    let fet = db.prepare(`SELECT * FROM ${table} WHERE ID = (?)`).get(params.id);
    if(!fet) return false
    else fet = JSON.parse(fet.json);
    try { fet = JSON.parse(fet) } catch (e) {}
        db.prepare(`DELETE FROM ${table} WHERE ID = (?)`).run(params.id);

    return true;
}