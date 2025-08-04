import { Router } from "express";
import UserRouters from './user.routes.js';
import BookRouters from './book.routes.js';
import loanRouters from './loan.routes.js';

const routers = Router();

routers.use("/users",UserRouters);
routers.use("/books",BookRouters);
routers.use("/loans",loanRouters);

export { routers };