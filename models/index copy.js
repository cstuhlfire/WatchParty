// Parties belongToMany Users (through PartyLink)
Parties.belongsToMany(Users, {
  through: {
    model: PartyLink,
    unique: false,
  }
});

module.exports = { 
  Users, 
  Parties,
  PartyLink,
  Shows,
  Genres
 };


 const User = require('./User');
const Project = require('./Project');

User.hasMany(Project, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Project.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Project };

