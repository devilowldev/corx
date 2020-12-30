module.exports = (db, params, table) => {
    let fet = db.prepare(`SELECT * FROM ${table} WHERE ID = (?)`).get(params.id);
    if (!fet) return null;
    fet = JSON.parse(fet.json)
    try { fet = JSON.parse(fet) } catch (e) {}

    return fet
}