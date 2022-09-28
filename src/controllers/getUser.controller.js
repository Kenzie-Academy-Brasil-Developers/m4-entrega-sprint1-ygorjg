import getUserService from "../services/users/getUser.service";

const getUserController = (request, response) => {
  const user = getUserService(request.userId);
  return response.status(200).json(user);
};

export default getUserController;
