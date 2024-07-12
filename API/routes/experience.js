import express from "express";
import { 
    createExperience, 
    deleteExperience, 
    getExperience, 
    getExperiences, 
    updateExperience 
} from "../controllers/experience.js";

const router = express.Router();

router.get("/",getExperiences);
router.get("/:id",getExperience);   
router.post("/",createExperience);
router.put("/:id",updateExperience);
router.delete("/:id",deleteExperience);

export default router;