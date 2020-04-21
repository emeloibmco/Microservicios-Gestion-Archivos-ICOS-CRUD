const pool = require('../connection/connection');

const nameTable = 'asset';

const getAssets = async (req, res) => {
    const response = await pool.query(`SELECT * FROM ${nameTable}`);
    console.log(response.rows);
    res.status(200),res.json(response.rows);
};


const getAssetsbyProject = async (req, res) => {
    const id = req.params.id_project;
    console.log(`id del proyecto ${id}`);
    const response = await pool.query(`SELECT * FROM ${nameTable} WHERE id_project = $1 AND status = true`, [id]);
    res.send(response.rows);
};

const gettrashbyProject = async (req, res) => {
    const id = req.params.id_project;
    console.log(`id del proyecto ${id}`);
    const response = await pool.query(`SELECT * FROM ${nameTable} WHERE id_project = $1 AND status = false`, [id]);
    res.send(response.rows);
};

const updateAsset = async (req, res) => {
    const id = req.body.id_asset;
    const status = req.body.status;
    const response = await pool.query(`UPDATE ${nameTable} SET status = '${status}' WHERE id_asset = ${id}`);
    console.log(response);
    res.send('Actualizacion realizada correctamente');
};

const createAsset = async (req, res) => {
    const {id_project, name_asset, description, type_asset, creation_date} = req.body;
    const response = await pool.query(`INSERT INTO ${nameTable} (id_project, name_asset, description, type_asset, creation_date) VALUES ($1, $2, $3, $4, $5)`, [id_project, name_asset, description, type_asset, creation_date]);
    res.send('asset creado');
};

const deleteAsset = async (req, res) => {
    console.log(req.body.name_asset);
    const response = await pool.query(`DELETE FROM ${nameTable} WHERE name_asset = $1`, [req.body.name_asset]) 
    console.log(response);
};

module.exports = {
    getAssets,
    getAssetsbyProject,
    createAsset,
    deleteAsset,
    gettrashbyProject,
    updateAsset,
} 