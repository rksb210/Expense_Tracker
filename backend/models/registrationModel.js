
module.exports = (sequelize, DataTypes) => {
    const Registration = sequelize.define(
      "Registration",
      {
        registration_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true, 
          autoIncrement: true,
        },
  
        name: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            len:[3,30]
          },
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            isEmail: true,
          },
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        tableName: "registration",
        //   timestamps: false,
      }
    );
    return Registration;
  };
  