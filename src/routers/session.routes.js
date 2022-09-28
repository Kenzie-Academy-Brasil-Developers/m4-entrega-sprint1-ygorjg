import { Router } from "express";

import verifyLoginValidationMiddleware from "../middlewares/verifyLoginValidation.middleware";
import userLoginController from "../controllers/userLogin.controller";

const sessionRoutes = Router();

sessionRoutes.post("", verifyLoginValidationMiddleware, userLoginController);

export default sessionRoutes;
