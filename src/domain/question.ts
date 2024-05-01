import { Alternative } from './alternative';

export interface QuestionRequired {
  questionId: string;
}

export interface QuestionOptional {
  title: string;
  alternatives: Alternative[];
}

export type QuestionProperties = QuestionRequired & Partial<QuestionOptional>;

export class Question {
  private readonly questionId: string = '';
  private title: string = '';
  private alternatives: Alternative[] = [];

  constructor(props: QuestionProperties) {
    Object.assign(this, props);
  }

  get properties() {
    return {
      questionId: this.questionId,
      title: this.title,
      alternatives: this.alternatives
    };
  }

  getAlternativesByQuestionId(questionId: string): Alternative[] {
    if (this.questionId === questionId) {
      return this.alternatives;
    } else {
      throw new Error('Question not found');
    }
  }
}
