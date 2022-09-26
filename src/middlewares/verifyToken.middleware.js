const verifyTokenMiddleware = (request, response, next) => {
  const token = request.headers.authorization;

  if (!token) {
    return response.status(401).json({
      message: "Missing authorization headers",
    });
  }

  next();
};

export default verifyTokenMiddleware;
