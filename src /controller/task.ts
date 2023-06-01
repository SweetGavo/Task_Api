import { log } from "console";
import { Request, Response, NextFunction } from "express";
import asyncHandler from "express-async-handler";
import Task from  "../models/task"

export const getAllTasks = async (req: Request, res: Response,next:any) => {
    try {
        const tasks = await Task.find({});
        res.status(200).json({tasks});
    } catch (error) {
        res.status(404).json({msg:error});
    }
}

export const createTask =  async (req: Request, res: Response,next:any) => {
   try {
     const task = await Task.create(req.body)
     res.status(201).json({ task });
   } catch (err) {
       next(err);
    // res.status(500).json({msg:err})
   }
}

export const getSingleTask = async (req: Request, res: Response) => {
    try {
        const {id:taskID} = req.params
        const tasks = await Task.findOne({ _id: taskID });
        if (!tasks) {
            return res.status(404).json({msg:`No task with id : ${taskID}`})
        }
        res.status(200).json({tasks});
    } catch (error) {
        res.status(500).json({msg:error});
    }

}
export const updateTask = async (req: Request, res: Response) => {
    
     const { id: taskID } = req.params

    const task = await Task.findOneAndUpdate({ _id: taskID })

    if (!task) {
        return res.status(404).send(`No task with id : ${taskID}`);
  }

  res.status(200).json({ task })
}


export const deleteTask = async (req: Request, res: Response) => {
    try {
        const { id: taskID } = req.params;
        const task = await Task.findByIdAndDelete({ _id: taskID })
        if (!task) {
            return res.status(404).json({msg:`No task with id: ${taskID}`})
        }
        res.status(200).send(`${taskID}  has been deleted `);
     } catch (error) {
     res.status(500).json({msg:error})   
    }
}



