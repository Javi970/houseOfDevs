const Users = require('./Users');
const Properties = require('./Properties');
const Review = require("./Review")
const Appointment =require("./Appointment")


//Las propiedades pueden estar en los favoritos de muchos usuarios
Properties.belongsToMany(Users, { through: "favorites" });
//Los Usuarios pueden tener muchas propiedades en sus favoritos
Users.belongsToMany(Properties, { through: "favorites" });


module.exports = { Users,Properties,Review,Appointment };
