import { Router } from "express";

import verifyEmailAvailabilityMiddleware from "../middlewares/verifyEmailAvailability.middleware";
import verifyTokenMiddleware from "../middlewares/verifyToken.middleware";
import verifyIsAdmMiddleware from "../middlewares/verifyIsAdm.middleware";
import verifyLoginValidationMiddleware from "../middlewares/verifyLoginValidation.middleware";

import createUserController from "../controllers/createUser.controller";
import userLoginController from "../controllers/userLogin.controller";
import listUsersController from "../controllers/listUsers.controller";
import getUserController from "../controllers/getUser.controller";
import editUserProfileController from "../controllers/editUserProfile.controller";
import deleteUserController from "../controllers/deleteUser.controller";

const userRoutes = Router();

userRoutes.post("", verifyEmailAvailabilityMiddleware, createUserController);
userRoutes.post("/login", verifyLoginValidationMiddleware, userLoginController);
userRoutes.get(
  "",
  verifyTokenMiddleware,
  verifyIsAdmMiddleware,
  listUsersController
);
userRoutes.get("/profile", verifyTokenMiddleware, getUserController);
userRoutes.patch(
  "/:uuid",
  verifyTokenMiddleware,
  verifyIsAdmMiddleware,
  editUserProfileController
);
userRoutes.delete(
  "/:uuid",
  verifyTokenMiddleware,
  verifyIsAdmMiddleware,
  deleteUserController
);

export default userRoutes;
