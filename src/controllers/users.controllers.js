import createUserService from "../services/users/createUser.service";

const createUserController = (request, response) => {
  const user = request.body;
  const createdUser = createUserService(user);
  return response.status(201).json(createdUser);
};

export { createUserController };
