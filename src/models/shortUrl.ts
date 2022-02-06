import { Document, Model, model, ObjectId, Schema } from "mongoose";
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
  createdBy: {
    type: Schema.Types.ObjectId,
    required: true,
  },
});

const ShortUrl: Model<ShortUrlDocument> = model("shortUrl", shortUrlSchema);

export default ShortUrl;

interface ShortUrlModel {
  full: string;
  short: string;
  clicks: number;
  createdBy: ObjectId;
}

interface ShortUrlDocument extends ShortUrlModel, Document {}
