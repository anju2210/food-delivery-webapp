import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import "dotenv/config";

import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

// app config
const app = express();

const port = process.env.PORT || 4000;

//middleware
app.use(express.json()); //the requests from frontend to backend will be parsed using this json
app.use(cors()); //using this we can access backend from frontend

// db connection
connectDB();

// api endpoints
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.get("/", (req, res) => {
  res.send("API working");
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});

// mongodb+srv://anjubhagat124:Sam2210AB@cluster0.nc3i1st.mongodb.net/?
