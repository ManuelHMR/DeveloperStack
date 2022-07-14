import { Questions } from "@prisma/client";
import { insertQuestion } from "../repositories/questionRepository";

export async function createQuestion(question : Questions) {
    insertQuestion(question);
}

const questionService = {
    createQuestion
};

export default questionService;