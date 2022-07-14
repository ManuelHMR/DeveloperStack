import { Request, Response } from "express";
import { getQuestions } from "../repositories/questionRepository";
import { createAnswer } from "../services/answerService";
import { createQuestion }  from "../services/questionService";

export async function create(req: Request, res: Response) {
  createQuestion(req.body.question);
  res.sendStatus(201)
}

export async function answer(req: Request, res: Response) {
  createAnswer(req.body.question);
  res.sendStatus(201)
}

export async function get(req: Request, res: Response) {
  const result = await getQuestions();
  res.send(result)
}

export async function getById(req: Request, res: Response) {
  const { id } = req.params;

}
