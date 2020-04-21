const pool = require('../connection/connection');

const nameTable = 'project';

const model = {
    id_project: 'id_project',
    name_project: 'name_project',
    description: 'description'
};


const getProjects = async (req, res) => {
    const response = await pool.query(`SELECT * FROM ${nameTable} ORDER BY id_project ASC;`);
    res.status(200),res.json(response.rows);
};


const getProjectById = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query(`SELECT * FROM ${nameTable} WHERE id_proyecto = $1`, [id]);
    res.send(response.rows);
};

const updateProject = async (req, res) => {
    const id = req.params.id_project;
    const description = req.body.description;
    const response = await pool.query(`UPDATE ${nameTable} SET description = '${description}' WHERE id_project = ${id}`);
    console.log(response);
    res.send('Actualizacion realizada correctamente');
};

const createProject = async (req, res) => {
    const {name_project, description} = req.body;
    const response = await pool.query(`INSERT INTO ${nameTable} (name_project, description) VALUES ($1, $2)`, [name_project, description]);
    const res_id = await pool.query(`SELECT ${model.id_project} FROM ${nameTable} WHERE ${model.name_project} = '${req.body.name_project}'`);
    const id_value = res_id.rows[0].id_project;
    res.send(`${id_value}`);
};

const deleteProject = async (req, res) => {
    const id = req.params.id;
    console.log(id);
    const response = await pool.query(`DELETE FROM ${nameTable} WHERE id_project = $1`, [id]);
    res.send(response);
    
};

const getNameProjectById = async (req, res) => {
    console.log('buscando project');
    const id = req.params.id;
    console.log(id);
    const response = await pool.query(`SELECT name_project FROM ${nameTable} WHERE id_project = $1`, [id]);
    res.send(response.rows);
};

module.exports = {
    getProjects,
    getProjectById,
    createProject,
    deleteProject,
    getNameProjectById,
    updateProject,
} 