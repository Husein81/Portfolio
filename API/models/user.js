import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
    },
    projects: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Project",
    }],
    skills: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Skill",
    }],
}, {timestamps: true});

const User = mongoose.model("User", userSchema);
export default User;