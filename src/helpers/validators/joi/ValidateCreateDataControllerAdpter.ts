import Joi from "joi";
import { Bot } from "../../../entities/Bot";
import { BotConfig } from "../../../entities/BotConfig";
import { IValidateCreateDataController } from "../../../utils/validations/ValidateDataController";

function builderMessageError(label: string) {
  return {
    "string.base": `${label} deve ser um tipo de 'text'`,
    "string.empty": `${label} não pode ser um vazio`,
    "string.min": `${label} deve ter no mínimo {#limit}`,
    "string.max": `${label} deve ter no máximo {#limit}`,
    "any.required": `${label} é um campo obrigatório`,
  };
}

export class ValidateCreateDataControllerAdpter
  implements IValidateCreateDataController {
  validateBot(bot: Bot) {
    const schema = Joi.object({
      id: Joi.string()
        .guid({ version: ["uuidv4"] })
        .required(),
      company_id: Joi.string()
        .guid({ version: ["uuidv4"] })
        .required(),
      username: Joi.string()
        .min(3)
        .max(15)
        .required()
        .messages(builderMessageError("Usuário")),
      photo: Joi.string().optional(),
      password: Joi.string().min(6).required(),
      name: Joi.string().min(3).max(30).required(),
      token: Joi.string().required(),
      location: Joi.string().optional(),
      rule_trasmission_max_send_users_by_day: Joi.number().required(),
      rule_trasmission_max_send_messages_by_day: Joi.number().required(),
      provider_type: Joi.optional(),
      created_at: Joi.date(),
      updated_at: Joi.date(),
    });

    return schema.validateAsync(bot);
  }

  validateBotConfig(botConfig: BotConfig) {
    const schema = Joi.object({});

    return schema.validateAsync(botConfig);
  }
}
