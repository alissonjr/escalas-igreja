import mongoose, { Schema } from 'mongoose';

const CultoSchema = new Schema({
   description: {
     type: String,
     required: true,
     minLength: [10, '10 characters long at least'],
   },
   period: {
     type: String,
     required: true,
     minLength: [5, '5 characters long at least'],
   },
   duration: {
     type: String,
     required: true,
   },
 }, { timestamps: true });

export default mongoose.model('Culto', CultoSchema);
