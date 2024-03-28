require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

require('./models/index')

app.use(require('./routes/registrationRoute'))
app.use(require('./routes/expenseRoute'))

// app.use(require('./routes/selectRoutes'))


const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log("server running at port 3000");
});
