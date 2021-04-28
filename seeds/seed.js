const sequelize = require('../config/connection');
const { Users, Showing, PartyLink, Parties, Genres } = require('../models');

const genresData = require('./genresData.json');
const usersData = require('./usersData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await Users.bulkCreate(usersData, {
    individualHooks: true,
    returning: true,
  });

  for (const genre of genresData) {
    await Genres.create({
      ...genre,
      //user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
