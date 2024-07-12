import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    imageUrls: {
        type: Array,
    },
    startDate: {
        type: Date,
    },
    endDate: {
        type: Date,
    },
    
}, {timestamps: true});

const Project = mongoose.model("Project", projectSchema);
export default Project;