const {launches} = require('../../models/launches.model');
const { getAllPlanets } = require('../planets/planets.controller');

const launchesRouter = express.Router();

launchesRouter.get('/launches', getAllLaunches);

module.exports = launchesRouter;