import createUserService from "../services/users/createUser.service";

const createUserController = async (request, response) => {
  try {
    const { email, name, password, isAdm } = request.body;
    const user = await createUserService(email, name, password, isAdm);
    return response.status(201).json(user);
  } catch (error) {
    return response.status(400);
  }
};

export default createUserController;
