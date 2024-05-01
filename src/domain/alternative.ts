export interface AlternativeRequired {
  questionId: string;
  alternativeId: string;
}

export interface AlternativeOptional {
  description: string;
  isCorrect: boolean;
}

export type AlternativeProperties = AlternativeRequired &
  Partial<AlternativeOptional>;

export class Alternative {
  private readonly questionId: string = '';
  private readonly alternativeId: string = '';
  private description: string = '';
  private isCorrect: boolean = false;

  constructor(props: AlternativeProperties) {
    Object.assign(this, props);
  }

  get properties() {
    return {
      questionId: this.questionId,
      alternativeId: this.alternativeId,
      description: this.description,
      isCorrect: this.isCorrect
    };
  }
}
