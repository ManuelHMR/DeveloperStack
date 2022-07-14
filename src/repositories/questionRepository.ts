import { Questions } from "@prisma/client";
import { prisma } from "../config/database";
import { CreateQuestionData } from "../schemas/questionSchema";

export async function insertQuestion(QuestionData: CreateQuestionData) {
    await prisma.questions.create({
        data: QuestionData
    })
};

export async function getQuestions() {
    const result = await prisma.questions.findMany();
    return result 
};

export async function getQuestionById(id: string) {
    const result = await prisma.questions.findUnique({
        where: {id: parseInt(id)},
        include:{
            Answers:true
        }
    })
};