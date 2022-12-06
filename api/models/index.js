const Users = require('./Users');
const Properties = require('./Properties');
const Review = require("./Review")
const Appointment =require("./Appointment")
const Favorites = require("./Favorites")


Favorites.belongsTo(Users);
Users.hasMany(Favorites);


module.exports = { Users,Properties,Review,Appointment,Favorites };
