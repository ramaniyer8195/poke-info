import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import cors from "cors";
import path from "path";
import pokemonRouter from "./routes/pokemonRoutes";

const port = 5000 || process.env.PORT;
const app = express();

app.use(cors({ origin: "*", credentials: true, optionsSuccessStatus: 200 }));
app.use(express.json());

// routes
app.use("/api/pokemon", pokemonRouter);

// render frontend
app.use(express.static(path.join(__dirname, "/client/dist")));

// render client from any path
app.use("*", (req, res) =>
  res.sendFile(path.join(__dirname, "/client/dist/index.html"))
);

mongoose
  .connect(process.env.MONGO_URI || "")
  .then(() => {
    app.listen(port, () => {
      console.log(`Listening on port ${port}`);
    });
    console.log("Connected to database");
  })
  .catch((err) => {
    console.error(err);
  });
