import { Router } from 'express';
import { getUser, getUsers } from '../controllers/user.controler.js';
import authorize from '../Middlewares/auth.middleware.js';

const userRouter = Router();

userRouter.get('/', getUsers);
userRouter.get('/:id', authorize, getUser);
userRouter.post('/', (req, res) => res.send({ title: "CREATE a new user"}));
userRouter.put('/:id', (req, res) => res.send({ title: "UPDATE user"}));
userRouter.delete('/:id', (req, res) => res.send({ title: "DELETE user"}));

export default userRouter;