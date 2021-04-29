const router = require('express').Router();
const { Parties } = require('../models');
const withAuth = require('../utils/auth');

// "/" routes

router.get('/', async (req, res) => {

    res.render('homepage', {layout: "landing"});
});

// router.get('/join', async (req, res) => {

//     res.render('join');
// });

router.get('/join', async (req, res) => {
  try {
      // Get all parties
      const partyData = await Parties.findAll({});
  
      // Serialize data so the template can read it
      const parties = partyData.map((party) => party.get({ plain: true }));
  
      // Pass serialized data and session flag into template
      res.render('join', { 
        parties, 
        logged_in: req.session.logged_in 
      });
    } catch (err) {
      res.status(500).json(err);
    }
});

router.get('/create', async (req, res) => {

    res.render('create');
});

router.get('/profile', async (req, res) => {

    res.render('profile');
});

router.get('/watchlist', async (req, res) => {

    res.render('watchlist');
});

module.exports = router;
