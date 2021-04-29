const Users = require('./Users');
const PartyLink = require('./PartyLink');
const Parties = require('./Parties');
const Genres = require('./Genres');


// Users.hasMany(Parties, {
//   foreignKey: 'user_id',
// });

// Parties.hasMany(Users, {
//   foreignKey: 'party_id',
// });


Users.belongsToMany(Parties, {
  through: {
    model: PartyLink,
    unique: false,
  }
});

Parties.belongsToMany(Users, {
  through: {
    model: PartyLink,
    unique: false,
  }
});

module.exports = {
  Users,
  PartyLink,
  Parties,
  Genres
}
