import Skill from "../models/skill.js";
import { StatusCodes } from "http-status-codes";
import asyncHandler from "../middlewares/asyncHandler.js";

export const getSkills = asyncHandler(async (req, res) => {
    const skills = await Skill.find({});
    return res.status(StatusCodes.OK).json(skills);
});

export const getSkill = asyncHandler(async (req, res) => {
    const skill = await Skill.findById(req.params.id);
    if(!skill){
        res.status(StatusCodes.NOT_FOUND);
        throw new Error("Skill not found");
    }

    return res.status(StatusCodes.OK).json(skill);
});

export const createSkill = asyncHandler(async (req, res) => {
    const skill = await Skill.create(req.body);
    return res.status(StatusCodes.CREATED).json(skill);
});

export const updateSkill = asyncHandler(async (req, res) => {
    const skill = await Skill.findById(req.params.id);
    if(!skill){
        res.status(StatusCodes.NOT_FOUND);
        throw new Error("Skill not found");
    }
    skill.name = req.body.name || skill.name;
    skill.imageUrl = req.body.imageUrl || skill.imageUrl;

    const updatedSkill = await skill.save();
    return res.status(StatusCodes.OK).json(updatedSkill);
});

export const deleteSkill = asyncHandler(async (req, res) => {
    const skill = await Skill.findByIdAndDelete(req.params.id);
    if(!skill){
        res.status(StatusCodes.NOT_FOUND);
        throw new Error("Skill not found");
    }
    return res.status(StatusCodes.OK).json({message: "Skill removed"});
});
