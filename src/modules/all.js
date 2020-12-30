module.exports = (db, params, table) => {
    var x = db.prepare(`SELECT * FROM ${table} WHERE ID IS NOT NULL`);

    let rx = [];
    for (var row of x.iterate()) {
        try{
            rx.push({
                ID: row.ID,
                data: JSON.parse(row.json)
            })
        } catch (e) {
            null
        }
    }

    return rx;
}