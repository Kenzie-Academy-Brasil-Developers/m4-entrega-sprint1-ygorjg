import jwt from "jsonwebtoken";
import users from "../database";

const verifyPermissionMiddleware = (request, response, next) => {
  const { uuid } = request.params;

  let token = request.headers.authorization;
  token = token.split(" ")[1];
  const tokenId = jwt.verify(token, "SECRET_KEY", (error, decoded) => {
    return decoded.uuid;
  });

  const user = users.find((user) => user.uuid === tokenId);
  const updatedUser = users.find((user) => user.uuid === uuid);

  if (!user.isAdm && user !== updatedUser) {
    return response.status(401).json({ message: "Missing admin permissions" });
  }

  next();
};

export default verifyPermissionMiddleware;
