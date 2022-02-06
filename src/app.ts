import express from "express";
import morgan from "morgan";

const app = express();

// Development Logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.get("/", (_, res) => {
  res.redirect("https://cornerstone-schools.org");
});

export default app;
