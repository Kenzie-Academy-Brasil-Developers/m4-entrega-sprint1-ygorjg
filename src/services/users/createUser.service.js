import users from "../../database";

const createUserService = (user) => {
  users.push(user);
  return user;
};

export default createUserService;
