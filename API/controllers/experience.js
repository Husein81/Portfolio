import Experience from "../models/experience.js";
import { StatusCodes } from "http-status-codes";
import asyncHandler from "../middlewares/asyncHandler.js";

export const getExperiences = asyncHandler(async (req, res) => {
    const experiences = await Experience.find({});
    return res.status(StatusCodes.OK).json(experiences);
});

export const getExperience = asyncHandler(async (req, res) => {
    const experience = await Experience.findById(req.params.id);
    if(!experience){
        res.status(StatusCodes.NOT_FOUND);
        throw new Error("Experience not found");
    }

    return res.status(StatusCodes.OK).json(experience);
});

export const createExperience = asyncHandler(async (req, res) => {
    const experience = await Experience.create(req.body);
    return res.status(StatusCodes.CREATED).json(experience);
});

export const updateExperience = asyncHandler(async (req, res) => {
    const experience = await Experience.findById(req.params.id);
    if(!experience){
        res.status(StatusCodes.NOT_FOUND);
        throw new Error("Experience not found");
    }
    experience.name = req.body.name || experience.name;
    experience.description = req.body.description || experience.description;
    experience.imageUrl = req.body.imageUrl || experience.imageUrl;

    const updatedExperience = await experience.save();
    return res.status(StatusCodes.OK).json(updatedExperience);
});

export const deleteExperience = asyncHandler(async (req, res) => {
    const experience = await Experience.findByIdAndDelete(req.params.id);
    if(!experience){
        res.status(StatusCodes.NOT_FOUND);
        throw new Error("Experience not found");
    }
    return res.status(StatusCodes.OK).json({message: "Experience removed"});
});