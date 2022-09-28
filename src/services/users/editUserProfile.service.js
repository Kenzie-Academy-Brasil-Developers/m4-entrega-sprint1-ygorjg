import users from "../../database";

const editUserProfileService = (id, userUpdates) => {
  const index = users.findIndex((user) => user.uuid === id);

  users[index] = { ...users[index], ...userUpdates };
  users[index].updatedOn = new Date();

  const { name, email, isAdm, uuid, createdOn, updatedOn } = users[index];

  return { name, email, isAdm, uuid, createdOn, updatedOn };
};

export default editUserProfileService;
