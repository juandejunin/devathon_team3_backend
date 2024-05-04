export interface AlternativeRequired {
  alternativeId: string;
}

export interface AlternativeOptional {
  description: string;
  isCorrect: boolean;
}

export type AlternativeProperties = AlternativeRequired &
  Partial<AlternativeOptional>;

export class Alternative {
  private readonly alternativeId: string = '';
  private description: string = '';
  private isCorrect: boolean = false;

  constructor(props: AlternativeProperties) {
    Object.assign(this, props);
  }

  get properties() {
    return {
      alternativeId: this.alternativeId,
      description: this.description,
      isCorrect: this.isCorrect
    };
  }
}
