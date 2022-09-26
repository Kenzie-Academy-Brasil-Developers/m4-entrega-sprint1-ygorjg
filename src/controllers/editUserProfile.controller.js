import editUserProfileService from "../services/users/editUserProfile.service";

const editUserProfileController = (request, response) => {
  const uuid = request.uuid;
  const email = request.email;
  const name = request.name;

  const userUpdates = editUserProfileService(uuid, email, name);
  return response.json(userUpdates);
};

export default editUserProfileController;
