const { Sequelize ,DataTypes} = require('sequelize');


const sequelize = new Sequelize('expense_tracker', 'node', 'Rajkishore@210', {
    host: 'localhost',
    dialect:  'mysql' ,
    logging:false
  })

  try {
     sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }


const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.registration = require('./registrationModel')(sequelize, DataTypes);
db.expense = require('./expenseModel')(sequelize, DataTypes);


// db.item = require('./itemModel')(sequelize, DataTypes);
// db.country = require('./selectCountryModel')(sequelize, DataTypes);
// db.state = require('./selectStateController')(sequelize, DataTypes);

// db.country.hasMany(db.state, { foreignKey: "countryid" });
// db.state.belongsTo(db.country, { foreignKey: "countryid" });

db.sequelize.sync({ force: false });

// require('./itemModel')(sequelize, DataTypes);
// sequelize.sync({ force: true });
  module.exports = db