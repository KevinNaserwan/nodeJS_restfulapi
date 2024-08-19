import express from 'express';
import userController from "../controller/user-controller.js";
import { authMiddleware } from '../middleware/auth-middleware.js';
import contactController from '../controller/contact-controller.js';

const userRouter = new express.Router();
userRouter.use(authMiddleware)

// User API
userRouter.get('/api/users/current', userController.getUser);
userRouter.patch('/api/users/current', userController.updateUser);
userRouter.delete('/api/users/logout', userController.logout);


// Contact API
userRouter.post('/api/contacts', contactController.create);
userRouter.get('/api/contacts/:contactId', contactController.get);
userRouter.put('/api/contacts/:contactId', contactController.update);

export {
    userRouter
}