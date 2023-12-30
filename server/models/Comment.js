const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const CommentSchema = new Schema({
   user:{
      type: Schema.Types.ObjectId,
      ref:'user'
   },
   text:{
    type:String
   },
   createdAt: { type: Date, default: Date.now },
   updateAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('comment',CommentSchema);

