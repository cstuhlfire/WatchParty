const Users = require('./Users');
const PartyLink = require('./PartyLink');
const Parties = require('./Parties');
const Shows = require('./Shows');
const Genres = require('./Genres');

// Shows have Genres
Shows.belongsTo(Genres, {
  foreignKey: 'show_id',
});

Parties.belongsTo(Shows, {
  foriegnKey: "show_id",
});

Shows.hasMany(Parties, {
  foriegnKey: "show_id",
});

// Usesrs have many Parties
Users.hasMany(Parties, {
  foreignKey: 'user_id',
});

// Parties have many Users
Parties.hasMany(Users, {
  foreignKey: 'party_id',
});

// Users belongToMany Parties (through PartyLink)
Users.belongsToMany(Parties, {
  through: {
    model: PartyLink,
    unique: false,
  }
});