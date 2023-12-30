const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    required: true,
  },
  total:{
    type: Number,
    required: true
  },
  createAt: {
    type: Date,
    default: Date.now
  }
});


module.exports = mongoose.model('Order', orderSchema);