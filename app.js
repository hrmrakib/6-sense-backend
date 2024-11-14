import userRoute from "./routes/userRoute.js";
import express from "express";
import cors from "cors";

const app = express();

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
    credentials: true,
    optionsSuccessStatus: 200,
  })
);

// Routes
app.use("/api", userRoute);

// Root route
app.get("/", (req, res) => {
  res.send("Hello, I am running!");
});

export default app;
