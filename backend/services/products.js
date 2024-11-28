const db = require('./db');

async function getProducts() {
    const sql = 'SELECT * FROM main;';
    const data = db.query(sql);
    return data;
}

async function addProduct(product) {
    const sql = 'INSERT INTO main (text) VALUES (?);';
    const params = [product.text];
    const data = await db.query(sql, params);
    return data;
}

async function deleteProduct(index) {
    const sql = `DELETE FROM main WHERE id = ?;`;
    const params = [index];
    const data = await db.query(sql, params);
    return data;
}

module.exports = {
    getProducts,
    addProduct,
    deleteProduct,
};
