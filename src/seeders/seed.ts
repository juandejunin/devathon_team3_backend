import { randomUUID } from 'crypto';
import { GetGameQuestions } from '../application/get-game-questions';
import { Alternative } from '../domain/alternative';
import { Question, QuestionProperties } from '../domain/question';
import { QuestionInfrastructure } from '../infrastructure/question.infrastructure';

export class SeedQuestions {
  constructor() {}
  public async seedQuestions(): Promise<void> {
    try {
      const repository = new QuestionInfrastructure();
      const getQuestions = new GetGameQuestions(repository);
      const existingQuestions = await getQuestions.execute();
      if (existingQuestions.length === 0) {
        const repository = new QuestionInfrastructure();

        const questionsData: QuestionProperties[] = [
          {
            questionId: randomUUID(),
            title: '¿Cuál es la capital de Francia?',
            alternatives: [
              {
                alternativeId: randomUUID(),
                description: 'Paris',
                isCorrect: true
              },
              {
                alternativeId: randomUUID(),
                description: 'Madrid',
                isCorrect: false
              },
              {
                alternativeId: randomUUID(),
                description: 'Londres',
                isCorrect: false
              },
              {
                alternativeId: randomUUID(),
                description: 'Roma',
                isCorrect: false
              }
            ].map((c) => new Alternative(c))
          },
          {
            questionId: randomUUID(),
            title: '¿Cuál es el río más largo del mundo?',
            alternatives: [
              {
                alternativeId: randomUUID(),
                description: 'Amazonas',
                isCorrect: true
              },
              {
                alternativeId: randomUUID(),
                description: 'Nilo',
                isCorrect: false
              },
              {
                alternativeId: randomUUID(),
                description: 'Misisipi',
                isCorrect: false
              },
              {
                alternativeId: randomUUID(),
                description: 'Yangtsé',
                isCorrect: false
              }
            ].map((c) => new Alternative(c))
          },
          {
            questionId: randomUUID(),
            title: '¿Cuál es el país más grande del mundo?',
            alternatives: [
              {
                alternativeId: randomUUID(),
                description: 'Rusia',
                isCorrect: true
              },
              {
                alternativeId: randomUUID(),
                description: 'Canadá',
                isCorrect: false
              },
              {
                alternativeId: randomUUID(),
                description: 'China',
                isCorrect: false
              },
              {
                alternativeId: randomUUID(),
                description: 'Estados Unidos',
                isCorrect: false
              }
            ].map((c) => new Alternative(c))
          },
          {
            questionId: randomUUID(),
            title: '¿Cuál es el océano más grande del mundo?',
            alternatives: [
              {
                alternativeId: randomUUID(),
                description: 'Pacífico',
                isCorrect: true
              },
              {
                alternativeId: randomUUID(),
                description: 'Atlántico',
                isCorrect: false
              },
              {
                alternativeId: randomUUID(),
                description: 'Índico',
                isCorrect: false
              },
              {
                alternativeId: randomUUID(),
                description: 'Ártico',
                isCorrect: false
              }
            ].map((c) => new Alternative(c))
          },
          {
            questionId: randomUUID(),
            title: '¿Cuál es el país más poblado del mundo?',
            alternatives: [
              {
                alternativeId: randomUUID(),
                description: 'China',
                isCorrect: true
              },
              {
                alternativeId: randomUUID(),
                description: 'India',
                isCorrect: false
              },
              {
                alternativeId: randomUUID(),
                description: 'Estados Unidos',
                isCorrect: false
              },
              {
                alternativeId: randomUUID(),
                description: 'Indonesia',
                isCorrect: false
              }
            ].map((c) => new Alternative(c))
          }
        ];
        const questionsToCreate = questionsData.map((c) => new Question(c));
        await repository.insertQuestions(questionsToCreate);
        console.log('Datos de preguntas sembrados correctamente.');
      }
    } catch (error) {
      console.error('Error al sembrar datos de preguntas:', error);
      throw error;
    }
  }
}
