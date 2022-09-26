import users from "../../database";
import jwt from "jsonwebtoken";

const userLoginService = async (email, password) => {
  const user = users.find((user) => user.email === email);

  const token = jwt.sign({ email: user.email }, "SECRET_KEY", {
    expiresIn: "24h",
  });

  return token;
};

export default userLoginService;
