import mongoose from 'mongoose'

const MessageSchema = mongoose.Schema(
  {
    name: { type: String, require: true},
    email: { type: String, require: true},
    message: { type: String, require: true},
  },
  { timestamps: true }
);

const Message = mongoose.model("Message", MessageSchema, 'messages');

export default Message