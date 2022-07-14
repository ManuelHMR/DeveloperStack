import Joi from "joi";
import { Questions } from "@prisma/client";

export type CreateQuestionData = Questions;

export const questionSchema = Joi.object<CreateQuestionData>({
  question: Joi.string().required()
});
