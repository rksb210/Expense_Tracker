import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import RegistratonComponent from "./pages/RegistratonComponent"
import LoginComponent from "./pages/LoginComponent";
import ExpenseComponent from "./components/ExpenseComponent";
import DisplayExpenseComponent from "./components/DisplayExpenseComponent";


function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route element={<RegistratonComponent />} path='signup'/>
          <Route element={<LoginComponent />} path='login'/>
          <Route element={<ExpenseComponent />} path='expense'/>
          <Route element={<DisplayExpenseComponent />} path='displayexpense'/>

        </Routes>
      </Router>
    </>
  )
}

export default App
