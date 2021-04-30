const router = require('express').Router();
const usersRoutes = require('./usersRoutes');
const genresRoutes = require('./genresRoutes');
const partiesRoutes = require('./partiesRoutes');
const partylinkRoutes = require('./partylinkRoutes');

router.use('/users', usersRoutes);
router.use('/genres', genresRoutes);
router.use('/parties', partiesRoutes);
router.use('/link', partylinkRoutes);

module.exports = router;
