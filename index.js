const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "https://jobwork-portal.vercel.app/"); 
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


const db = require("./models");

const userRouter = require("./routes/User");
app.use("/auth", userRouter);

// async function main() {
//   await db.sequelize.sync({force:true})
// }

// main()

db.sequelize.sync().then((result) => {
    app.listen(3001, () => {
      console.log("Server running on port 3001");
    });
  });
