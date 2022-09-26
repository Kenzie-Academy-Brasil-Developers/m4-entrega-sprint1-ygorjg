import deleteUserService from "../services/users/deleteUser.service";

const deleteUserController = (request, response) => {
  const uuid = request.body;

  deleteUserService(uuid);

  return { message: "User deleted with sucess" };
};

export default deleteUserController;
