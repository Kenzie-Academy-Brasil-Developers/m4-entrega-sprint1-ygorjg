import users from "../../database";

const deleteUserService = (uuid) => {
  const index = users.find((user) => user.uuid === uuid);

  if (index === -1) {
    return "User not found";
  }

  users.splice(index, 1);
};

export default deleteUserService;
