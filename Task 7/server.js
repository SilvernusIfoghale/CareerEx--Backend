import express from "express";
import dotenv from "dotenv";
import itemRoutes from "./routes/Items.js";
import connectDatabase from "./config/db.js";
import errorHandler from "./middleWares/errors.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

//Middlewares
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

//Error Handler
app.use(errorHandler);

//routes
app.use("/items", itemRoutes);

//base route
app.get("/", (req, res) => {
  res.send("Welcome to the Campus Lost & Found Backend API");
});

//run server
const runServer = () => {
  try {
    connectDatabase();
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    );
  } catch (error) {
    console.log("Error", error);
  }
};

runServer();
