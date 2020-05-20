const { Router } = require('express');
const router = Router();

const { getNameProjectById, getProjects, getProjectById, createProject, deleteProject, updateProject} = require('../controller/crudprojects')
const { getAssets, getAssetsbyProject, createAsset, deleteAsset, deleteAssets, gettrashbyProject, updateAsset } = require('../controller/crudassets')
const { createUser, validateUs, login} = require('../controller/crudusers')

router.get('/Projects', getProjects);
router.get('/Projects/:id', getProjectById);
router.post('/New-Project', createProject);
router.post('/Del-Project', [deleteAssets, deleteProject]);
router.post('/New-Asset', createAsset);
router.post('/new-user', createUser);
router.post('/validate', validateUs);
router.post('/login', login );
router.delete('/Projects/:id', deleteProject);
router.delete('/Asset/:id', deleteAsset);
router.get('/assettrash/:id_project', gettrashbyProject);
router.put('/Assets/:id', updateAsset);
router.get('/Projectn/:id', getNameProjectById);
router.get('/Assets', getAssets);
router.get('/Assets/:id_project', getAssetsbyProject);
router.put('/Project/:id_project', updateProject);

module.exports = router;