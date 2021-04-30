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

    res.direct('/watchlist');
    //res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const partyData = await Parties.destroy({
      where: {
        id: req.params.id
        //user_id: req.session.user_id,
      },
    });

    if (!partyData) {
      res.status(404).json({ message: 'No party found with this id!' });
      return;
    }

    res.status(200).json(partyData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
