import express from 'express';
import { Router } from "express";
import { getAllTasks,createTask,getSingleTask,updateTask,deleteTask } from '../controller/task';

export const router = Router();

router.route('/').get(getAllTasks).post(createTask);
router.route('/:id').get(getSingleTask).patch(updateTask).delete(deleteTask);


