import axios from "axios";
import { useState } from "react";

const ExpenseComponent = () => {
  const [amount, setAmount] = useState(0);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = async () => {
    let body = { amount, description, category };
    const response = await axios.post("http://localhost:3000/expense", body);
    console.log(response);
    setAmount(0);
    setCategory("");
    setDescription("");
    
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <div>
        <h1> ADD EXPENSE</h1>
      </div>
      <div style={{ margin: "10px" }}>
        <label>Choose Expense Amount:</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
        />
      </div>
      <div style={{ margin: "10px" }}>
        <label>Choose Description:</label>
        <input
          type="description"
          id="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </div>
      <div style={{ margin: "10px" }}>
        <label>Choose Category:</label>
        <select onChange={(event) => setCategory(event.target.value)} value={category}>
          <option>Select Category</option>
          <option>Fuel</option>
          <option>Food</option>
          <option>Electricity</option>
          <option>Movie</option>
        </select>
      </div>

      <div style={{ margin: "10px" }}>
        <button
          style={{ width: "100px", background: "blue", color: "white" }}
          onClick={handleSubmit}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default ExpenseComponent;
