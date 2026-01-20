import express from "express";
import cors from "cors";
import "dotenv/config";

import connectDB from "./config/mongodb.js"
import connectCloudinary from "./config/cloudinary.js";

import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

// Initialize app
const app = express();

// const PORT = process.env.PORT 
const PORT = process.env.PORT || 4000;

// Connect DB & Cloudinary
connectDB();
connectCloudinary();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

// Test route
app.get("/", (req, res) => {
  res.send("API is working");
});

app.listen(PORT,()=>{
  console.log(`Server Started at PORT ${PORT}`);
})

export default app;
