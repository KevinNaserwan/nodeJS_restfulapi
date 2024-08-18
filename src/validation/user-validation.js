import Joi from "joi";

const resgitserUserValidation = Joi.object({
    username: Joi.string().max(100).required(),
    password: Joi.string().max(100).required(),
    name: Joi.string().max(100).required(),
})


export {
    resgitserUserValidation
}