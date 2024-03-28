const express = require("express");
const { addExpense, getExpenses, deleteExpense } = require("../controllers/expenseController");
const router = express.Router();

router.post('/expense',addExpense)
router.get('/getExpense',getExpenses)
router.delete('/deleteExpense/:id',deleteExpense)



module.exports = router;
