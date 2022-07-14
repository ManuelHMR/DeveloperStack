import { Answers } from "@prisma/client";
import Joi from "joi";

export type CreateAnswerData = Omit<Answers, "id" | "questionId">

export const answerSchema = Joi.object<CreateAnswerData>({
  answer: Joi.string().required(),
});
