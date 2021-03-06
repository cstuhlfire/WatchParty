const router = require('express').Router();
const { Parties, Users } = require('../models');
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
      const partyData = await Parties.findAll({
        include: [
          {
            model: Users,
          },
        ],
      });
  
      // Serialize data so the template can read it
      const parties = partyData.map((party) => party.get({ plain: true }));

      //res.json(parties);
      // Pass serialized data and session flag into template
      res.render('join', { 
        parties, 
        logged_in: req.session.logged_in 
      });
    } catch (err) {
      res.status(500).json(err);
    }
});

router.get('/parties', async (req, res) => {

    res.render('create');
});

router.get('/profile', async (req, res) => {

    res.render('profile');
});

router.get('/watchlist', async (req, res) => {

  try {
    // Get all parties
    const watchlistData = await Parties.findAll({
      include: [
        {
          model: Users,
        },
      ],
    });

    // Serialize data so the template can read it
    const watchlists = watchlistData.map((watchlist) => watchlist.get({ plain: true }));
    // res.json(watchlists);

    // Pass serialized data and session flag into template
    res.render('watchlist', { 
      watchlists, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to home "/"
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
