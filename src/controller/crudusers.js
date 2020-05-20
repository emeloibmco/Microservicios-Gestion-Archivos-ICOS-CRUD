const pool = require('../connection/connection');

const nameTable = 'users_app';

const model = {
    id: 'id',
    mail: 'email',
    password: 'password',

};


async function validateUser(user_mail){
    const response = await pool.query(`select * from ${nameTable} where email= $1`,[user_mail]);
    const n = response.rowCount;
    return n;
}

const validateUs = async (req, res) =>{

    const response = await pool.query(`select * from ${nameTable} where email= $1`,[req.body.mail]);
    const n = response.rowCount;
    res.send(200),res.json(respone.rowCount);
}

const createUser = async (req, res, next) => {
    const {mail,password} = req.body;
    
    const res_id = await pool.query(`SELECT ${model.id} FROM ${nameTable} WHERE ${model.mail} = '${mail}'`);

    if(res_id.rows[0] == null){
    const resp = pool.query(`INSERT INTO ${nameTable} (email, password) 
    SELECT $1, $2
    WHERE NOT EXISTS (
        SELECT 1 FROM ${nameTable} WHERE email=$3
    )`, [mail,password,mail]);
    res.send('Se agrego correctamente');}
    else{
        res.json({
            message: 'mail invalido'
        });
    }
    
};

const login = async (req, res) =>{
    const {mail, password} = req.body;

    const response = await pool.query(`SELECT ${model.id}, ${model.mail}, ${model.password} FROM ${nameTable} where ${model.mail}='${mail}'`);
    
    const id_1 = response.rows[0].id;
    const mail_1 = response.rows[0].email;
    const pass = response.rows[0].password;
    
    res.json({ 
        id: id_1,
        mail: mail_1,
        password: pass
    });
       
}

module.exports = {
    createUser,
    validateUs,
    login
} 