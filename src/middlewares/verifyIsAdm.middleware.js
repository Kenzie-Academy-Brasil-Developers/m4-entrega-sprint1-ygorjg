import users from "../database";

const verifyIsAdmMiddleware = (request, response, next) => {
  const user = users.find((user) => user.uuid == request.userId);

  if (!user.isAdm) {
    return response.status(401).json({
      message: "Unauthorized",
    });
  }

  next();
};

export default verifyIsAdmMiddleware;
