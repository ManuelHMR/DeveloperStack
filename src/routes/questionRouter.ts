import { Router } from "express";
import {create, answer, get, getById} from "../controllers/questionController";
import { validateSchemaMiddleware } from "./../middlewares/validateSchema";
import { answerSchema } from "../schemas/answerSchema";
import { questionSchema } from "../schemas/questionSchema";

const questionRouter = Router();

questionRouter.post("/questions", validateSchemaMiddleware(questionSchema), create);
questionRouter.post("/questions/:id/answers", validateSchemaMiddleware(answerSchema), answer);
questionRouter.get("/questions", get);
questionRouter.get("/questions/:id", getById);

export default questionRouter;