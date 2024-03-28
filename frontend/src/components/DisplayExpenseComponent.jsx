import axios from "axios";
import { useEffect, useState } from "react";

const DisplayExpenseComponent = () => {
  const [expenseData, setExpenseData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const result = await axios.get("http://localhost:3000/getExpense");
    console.log("result", result.data[0].amount);
    setExpenseData(result.data);
  };

  const handleDelete = async (expense_id) => {
    // alert(expense_id)
    const result = await axios.delete(
      `http://localhost:3000/deleteExpense/${expense_id}`
    );
    console.log(result);
    alert(result.data.message);
    fetchData();
  };

  //   console.log("tytytyt:", expenseData);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <div>
        <h1>See Your Expenses</h1>
      </div>
      {expenseData.map((item, i) => (
        <div
          key={i}
          style={{
            margin: "10px",
            display: "flex",
            flexDirection: "row",
            gap: "10px",
          }}
        >
          <div>{i + 1}</div>
          <div>{item.amount}</div>
          <div>{item.description}</div>
          <div>{item.category}</div>
          <div>
            <button onClick={() => handleDelete(item.expense_id)}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DisplayExpenseComponent;
