import mongoose from 'mongoose'

const doctorSchema = mongoose.Schema({
    name: String,
    appointments: Array
});

export default mongoose.model("doctor", doctorSchema);