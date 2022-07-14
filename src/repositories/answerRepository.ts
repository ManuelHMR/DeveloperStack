import { Answers } from "@prisma/client";
import { prisma } from "../config/database";

export async function insertQuestion(answerData: Answers) {
    await prisma.answers.create({
        data: answerData,
    })
};