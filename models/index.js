const Users = require('./Users');
const PartyLink = require('./PartyLink');
const Parties = require('./Parties');
const Showing = require('./Showing');
const Genres = require('./Genres');

// Showing have Genres
// Showing.belongsTo(Genres, {
//   foreignKey: 'show_id',
// });

// Parties.belongsTo(Showing, {
//   foriegnKey: "show_id",
// });

// Showing.hasMany(Parties, {
//   foriegnKey: "show_id",
// });

// // Usesrs have many Parties
// Users.hasMany(Parties, {
//   foreignKey: 'user_id',
// });

// // Parties have many Users
// Parties.hasMany(Users, {
//   foreignKey: 'party_id',
// });

// Users belongToMany Parties (through PartyLink)
Users.belongsToMany(Parties, {
  through: {
    model: PartyLink,
    unique: false,
  }
});

module.exports = {
  Users,
  PartyLink,
  Parties,
  Showing,
  Genres
}
