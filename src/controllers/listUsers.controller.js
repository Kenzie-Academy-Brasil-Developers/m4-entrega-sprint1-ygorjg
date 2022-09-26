import listUsersService from "../services/users/listUsers.service";

const listUsersController = (request, response) => {
  const users = listUsersService();
  return response.status(200).json(users);
};

export default listUsersController;
