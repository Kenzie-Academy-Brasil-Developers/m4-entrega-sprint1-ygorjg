import users from "../../database";

const getUserService = (uuid) => {
  const user = users.find((user) => user.uuid === uuid);
  
  if (!user) {
    console.log(users)
    return { message: "User not found" };
  }

  return user;
};

export default getUserService;
