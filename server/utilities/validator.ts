import Joi from "joi";

export const schema = Joi.object({
  names: Joi.string().required().messages({
    "string.empty": "Los nombres son obligatorios",
  }),
  last_names: Joi.string().required().messages({
    "string.empty": "Los apellidos son obligatorios",
  }),
  email: Joi.string().required().email().messages({
    "string.empty": "El email es obligatorio",
    "string.email": "El email ingresado es invalido",
  }),
  password: Joi.string().required().max(20).messages({
    "string.empty": "El password es obligatorio",
    "string.max": "El password debe tener como maximo 20 caracteres",
  }),
});
