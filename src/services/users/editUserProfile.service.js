import users from "../../database";

const editUserProfileService = (uuid, name, email) => {
  const userUpdates = { uuid, name, email };

  const userIndex = users.findIndex((user) => user.id === id);

  if (userIndex === -1) {
    return "User not found!";
  }
  users[userIndex] = { ...users[userIndex], ...userUpdates };

  return users[userIndex];
};

export default editUserProfileService;
