import mongoose from "mongoose";

const {Schema} = mongoose;

const listSchema = new Schema({
    todo: String,
})

const list = mongoose.model('List', listSchema);

export {list}