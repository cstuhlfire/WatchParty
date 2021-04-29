const router = require('express').Router();
const { PartyLink, Users, Parties } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {

  res.render('join');
  });

module.exports = router;
