const router = require('express').Router();
const usersRoutes = require('./usersRoutes');
const genresRoutes = require('./genresRoutes');
const partiesRoutes = require('./partiesRoutes');
const partylinkRoutes = require('./partylinkRoutes');
const showingRoutes = require('./showingRoutes');

router.use('/users', usersRoutes);
router.use('/genres', genresRoutes);
router.use('/parties', partiesRoutes);
router.use('/partylink', partylinkRoutes);
router.use('/showing', showingRoutes);


module.exports = router;
