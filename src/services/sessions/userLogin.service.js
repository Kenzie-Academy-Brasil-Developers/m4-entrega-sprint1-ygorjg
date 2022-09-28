import users from "../../database";
import jwt from "jsonwebtoken";

const userLoginService = (email, password) => {
  const user = users.find((user) => user.email === email);

  const token = jwt.sign({ uuid: user.uuid }, "SECRET_KEY", {
    expiresIn: "24h",
  });

  return token;
};

export default userLoginService;
