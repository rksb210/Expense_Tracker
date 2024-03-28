import { useState } from "react";
import axios from "axios";
import { useNavigate  } from "react-router-dom";

const LoginComponent = () => {
  //   const [name, setName] = useState("");
  const navigate = useNavigate()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    let body = {
      email,
      password,
    };
    const response = await axios.post("http://localhost:3000/login", body);
    console.log("Login Response:", response.data.status);
    if(response.data.status){
        navigate('/expense')
    }
    else{
        alert(response.data.msg);
    }
    
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
        <h1> Login </h1>
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
      <div style={{ display: "flex", flexDirection: "column", margin: "10px" }}>
        <button
          onClick={handleSubmit}
          style={{ width: "100%", margin: "10px" }}
        >
          Login
        </button>
        Do not have an account <a href="/signup">Signup</a>
      </div>
    </div>
  );
};

export default LoginComponent;
