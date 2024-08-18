import { prismaClient } from "../app/database";
import { ResponseError } from "../error/response-error";
import { resgitserUserValidation } from "../validation/user-validation";
import { validate } from "../validation/validation"
import bcrypt from  'bcrypt';

const register = async (request) => {
   const user = validate(resgitserUserValidation, request);
   const countUser = await prismaClient.user.count({
        where: {
            username: user.username,
        }
   });

   if (countUser === 1) {
       throw new ResponseError(400, "Username already exists");
   } 

   user.password = await bcrypt.hash(user.password, 10);

   return prismaClient.user.create({
        data: user,
        select: {
            username: true,
            name: true,
        }
   });

};

export default {
    register
}