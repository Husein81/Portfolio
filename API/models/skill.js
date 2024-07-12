import mongoose from "mongoose";

const skillSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
    },
    level: {
        type: String,
        enum: ["Beginner","Amateur", "Competent", "Proficient", "Expert"],
        default: "Beginner",
    },
}, {timestamps: true});

const Skill = mongoose.model("Skill", skillSchema);
export default Skill;