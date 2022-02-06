import express from "express";
import morgan from "morgan";
import ShortUrl from "./models/shortUrl";

import ensureHttp from "./utils/ensureHttp";
const app = express();

app.use((_, res, next) => {
  res.goHome = () => res.redirect(process.env.HOME_PAGE!);
  next();
});

// Development Logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.get("/", (_, res) => {
  res.goHome();
});

app.get("/:shortId", async (req, res, next) => {
  const urlDoc = await ShortUrl.findOne({ short: req.params.shortId });
  if (!urlDoc) {
    res.goHome();
    return next();
  }
  urlDoc.clicks += 1;
  await urlDoc.save();
  res.redirect(ensureHttp(urlDoc.full));
});

export default app;
