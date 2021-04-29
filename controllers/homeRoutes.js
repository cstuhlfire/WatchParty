const router = require('express').Router();
const { Users } = require('../models');
const withAuth = require('../utils/auth');

// "/" routes

router.get('/', async (req, res) => {

    res.render('homepage', {layout: "landing"});
});

router.get('/join', async (req, res) => {

    res.render('join');
});

router.get('/create', async (req, res) => {

    res.render('create');
});

router.get('/profile', async (req, res) => {

    res.render('profile');
});

module.exports = router;
