import users from "../../database";
import * as bycrypt from "bcryptjs";
import { v4 as uuidv4 } from "uuid";

const createUserService = async (email, name, password, isAdm) => {

  const hashedPassword = await bycrypt.hash(password, 10);

  const date = new Date();
  const formatedDate = date.toLocaleDateString();

  const newUser = {
    email,
    name,
    password: hashedPassword,
    isAdm,
    createdOn: formatedDate,
    updatedOn: formatedDate,
    uuid: uuidv4(),
  };

  const createUserResponse = {
    email: newUser.email,
    name: newUser.name,
    isAdm: newUser.isAdm,
    createdOn: newUser.createdOn,
    updatedOn: newUser.updatedOn,
    uuid: newUser.uuid,
  };

  users.push(newUser);
  return createUserResponse;
};

export default createUserService;
