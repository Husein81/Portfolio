import { StatusCodes } from "http-status-codes";
import Project from "../models/project.js";
import asyncHandler from "../middlewares/asyncHandler.js";

export const getProjects = asyncHandler(async (req, res) => {
    const projects = await Project.find({});
    return res.status(StatusCodes.OK).json({ projects });
});

export const getProject = asyncHandler(async (req, res) => {
    const project = await Project.findById(req.params.id);
    if(project){
        res.status(StatusCodes.NOT_FOUND);
        throw new Error("Project not found");
    }

    return res.status(StatusCodes.OK).json({ project });
});

export const createProject = asyncHandler(async (req, res) => {
    const project = await Project.create(req.body);
    return res.status(StatusCodes.CREATED).json(project);
});

export const updateProject = asyncHandler(async (req, res) => {
    const project = await Project.findById(req.params.id);

    if(!project){
        res.status(StatusCodes.NOT_FOUND);
        throw new Error("Project not found");
    }
    
    project.name = req.body.name || project.name;
    project.description = req.body.description || project.description;
    project.imageUrl = req.body.imageUrl || project.imageUrl;
    project.skills = req.body.skills || project.skills;

    const updatedProject = await project.save();
    return res.status(StatusCodes.OK).json(updatedProject);
});

export const deleteProject = asyncHandler(async (req, res) => {
    const project = await Project.findByIdAndDelete(req.params.id);
    if(!project){
        res.status(StatusCodes.NOT_FOUND);
        throw new Error("Project not found");
    }
    return res.status(StatusCodes.OK).json({message: "Project removed"});
});

