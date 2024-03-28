import { useState } from "react";
import axios from "axios";

const RegistratonComponent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    let body = {
      name,
      email,
      password,
    };
    const response = await axios.post("http://localhost:3000/signup", body);
    console.log("SignUp Response:", response.data.data);
    alert(response.data.msg);
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
        <h1> Sign Up </h1>
      </div>
      <div style={{ margin: "20px" }}>
        <label>Enter your Name: </label>
        <input
          type="text"
          id="p_name"
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div style={{ margin: "20px" }}>
        <label>Enter your Email: </label>
        <input
          type="text"
          id="email"
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div style={{ margin: "20px" }}>
        <label>Enter Password: </label>
        <input
          type="password"
          id="password"
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <div>
        <button onClick={handleSubmit}>Sign Up</button>
      </div>
    </div>
  );
};

export default RegistratonComponent;
