import getUserService from "../services/users/getUser.service";

const getUserController = (request, response) => {
  const uuid = request.uuid;

  const user = getUserService(uuid);

  return response.json(user);
};

export default getUserController;
