import users from "../../database";

const getUserService = (userId) => {
  const user = users.find((user) => user.uuid === userId);

  if (!user) {
    return { message: "User not found" };
  }

  const { password, ...data } = user;

  return data;
};

export default getUserService;
