const Users = require('./Users');
const PartyLink = require('./PartyLink');
const Parties = require('./Parties');
const Genres = require('./Genres');


Parties.belongsTo(Users, {
  foreignKey: 'host_id'
});

Users.hasMany(Parties, {
  foreignKey: 'host_id',
});

// Users.belongsToMany(Parties, {
//   through: {
//     model: PartyLink,
//     unique: false,
//   }
// });

// Parties.belongsToMany(Users, {
//   through: {
//     model: PartyLink,
//     unique: false,
//   }
// });

module.exports = {
  Users,
  PartyLink,
  Parties,
  Genres
}
