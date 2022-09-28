import editUserProfileService from "../services/users/editUserProfile.service";

const editUserProfileController = (request, response) => {
  const { uuid } = request.params;
  const data = request.body;

  if (!uuid) {
    return response.status(404).json({
      message: "User not found!",
    });
  }

  const updatedUser = editUserProfileService(uuid, data);

  return response.status(200).json(updatedUser);
};

export default editUserProfileController;
