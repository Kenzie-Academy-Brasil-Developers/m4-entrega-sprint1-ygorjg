import express from "express";
import userRoutes from "./routers/user.routes";
import sessionRoutes from "./routers/session.routes";
import "dotenv/config";

const app = express();
app.use(express.json());
app.use("/users", userRoutes);
app.use("/login", sessionRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
});

export default app;
