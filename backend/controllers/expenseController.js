const db = require("../models/index");
const Expense = db.expense;
const bcrypt = require('bcrypt')

const addExpense = async (req, res) => {
    console.log("req.body:", req.body);
    const { amount,description,category } = req.body;
    const expense = await Expense.create(req.body);
    res.json({msg:'expense added successfully',data:expense})  
  };

  const getExpenses = async (req,res) => {
    const data = await Expense.findAll({});
    res.json(data)
}

const deleteExpense = async (req, res) => {
    const id = req.params.id;
    console.log(id)
    await Expense.destroy({
      where: {
        expense_id: id,
      },
    });
    res.json({ message: " Deleted Successfully", status: true, });
  };



module.exports = {addExpense,getExpenses,deleteExpense}