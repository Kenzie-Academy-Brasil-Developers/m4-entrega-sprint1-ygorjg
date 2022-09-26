import users from "../database";
import * as bcrypt from "bcryptjs";

const verifyLoginValidationMiddleware = (request, response, next) => {
  const { email, password } = request.body;
  const user = users.find((user) => user.email === email);

  if (!user) {
    return response.status(401).json({
      message: "Wrong email/password",
    });
  }

  const passwordMatch = bcrypt.compareSync(password, user.password);

  if (!passwordMatch) {
    return response.status(401).json({
      message: "Wrong email/password",
    });
  }
  
  next();
};

export default verifyLoginValidationMiddleware;
