const pool = require('../connection/connection');

const nameTable = 'user';

const model = {
    ID: 'ID',
    email: 'email',
    password: 'password',

};

const createUser = async (req, res) => {
    const {email,password} = req.body;
    const response = await pool.query(`INSERT INTO ${nameTable} (email, password) VALUES ($1,$2)`, [email,password]);
    res.send(email);
};

module.exports = {
    createUser,
} 