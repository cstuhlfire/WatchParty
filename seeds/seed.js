const sequelize = require('../config/connection');
const { Users, PartyLink, Parties, Genres } = require('../models');

const genresData = require('./genresData.json');
const usersData = require('./usersData.json');
// const showingData = require('./showingData.json');
const partiesData = require('./partiesData.json');
const partylinkData = require('./partylinkData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await Users.bulkCreate(usersData, {
    individualHooks: true,
    returning: true,
  });

  for (const genre of genresData) {
    await Genres.create({
      ...genre,
    });
  }

  // for (const showing of showingData) {
  //   await Showing.create({
  //     ...showing,
  //   });
  // }

  for (const party of partiesData) {
    await Parties.create({
      ...party,
    });
  }

  for (const partylink of partylinkData) {
    await PartyLink.create({
      ...partylink,
    });
  }

  process.exit(0);
};

seedDatabase();
