import express from "express";
import { 
    createSkill, 
    deleteSkill, 
    getSkill, 
    getSkills, 
    updateSkill 
} from "../controllers/skill.js";

const router = express.Router();

router.get("/", getSkills);
router.get("/:id", getSkill);
router.post("/", createSkill);
router.put("/:id", updateSkill);
router.delete("/:id", deleteSkill); 

export default router;