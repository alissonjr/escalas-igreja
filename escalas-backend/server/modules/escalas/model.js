import mongoose, { Schema } from 'mongoose';

const EscalaSchema = new Schema({
  date: {
    type: Date,
    default: Date.now
  },
  culto: {
     type: Schema.Types.ObjectId,
     ref: 'Group',
   },
   description: {
     type: String,
     required: true,
     minLength: [10, '10 characters long at least'],
   },
   escalados: [{
     type: Schema.Types.ObjectId,
     ref: 'Group',
   }],
 }, { timestamps: true });

export default mongoose.model('Escala', EscalaSchema);
