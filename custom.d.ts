declare namespace Express {
  import { ObjectId } from "mongoose";
  import { Send } from "express";

  export interface Response {
    goHome(): void;
  }
}
