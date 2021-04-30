const router = require('express').Router();
const { Parties } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {

  res.render('homepage');
  });


router.post('/', async (req, res) => {
  try {
    const newParty = await Parties.create({
      ...req.body,
      //user_id: req.session.user_id,
    });

    res.direct('/');
    //res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
