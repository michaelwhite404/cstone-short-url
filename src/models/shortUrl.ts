import { model, Schema } from "mongoose";
import nanoid from "nanoid";

const shortUrlSchema = new Schema({
  full: {
    type: String,
    required: true,
  },
  short: {
    type: String,
    required: true,
    unique: true,
    default: () => nanoid.nanoid(8),
  },
  clicks: {
    type: Number,
    required: true,
    default: 0,
  },
});

const ShortUrl = model("shortUrl", shortUrlSchema);

export default ShortUrl;
