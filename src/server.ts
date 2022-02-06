import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({ path: "./config.env" });
import app from "./app";

mongoose.connect(process.env.DATABASE!).then(() => console.log("DB connection successful!"));

const port = process.env.PORT || 7000;

app.listen(port, () => console.log("App running on port " + port));
