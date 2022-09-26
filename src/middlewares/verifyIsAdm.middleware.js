import users from "../database";

const verifyIsAdmMiddleware = (request, response, next) => {
  const notAdm = users.find((user) => user.isAdm === false);

  if (notAdm) {
    return response.status(401).json({
      message: "Unauthorized",
    });
  }

  next();
};

export default verifyIsAdmMiddleware;
