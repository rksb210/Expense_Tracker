
module.exports = (sequelize, DataTypes) => {
    const Expense = sequelize.define(
      "Expense",
      {
        expense_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true, 
          autoIncrement: true,
        },
  
        amount: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        description: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        category: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        tableName: "expense",
        //   timestamps: false,
      }
    );
    return Expense;
  };
  