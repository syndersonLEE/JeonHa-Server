const mysql = require('../library/mysql');

async function insertUser(userData) {
    const insertSql = `INSERT INTO user (name, pw, id, phone) 
    VALUES (?, ?, ?, ?);`;

    return await mysql.query(insertSql, [userData.name, userData.pw, userData.id, userData.phone])
}

async function selectUserById(id) {
    const selectSql = `SELECT *
    FROM user
    WHERE id = ?`;

    return await mysql.query(selectSql, [id])
}

module.exports = {
    insertUser,
    selectUserById,
}