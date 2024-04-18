export interface SomethingRequired {
  somethingId: string;
}

export interface SomethingOptional {
  title: string;
}

export type SomethingProperties = SomethingRequired &
  Partial<SomethingOptional>;
export type SomethingPropertiesToUpdate = Partial<
  Omit<SomethingRequired, 'somethingId'> & Pick<SomethingOptional, 'title'>
>;

export class Something {
  private readonly somethingId: string = '';
  private title: string = '';

  constructor(props: SomethingProperties) {
    Object.assign(this, props);
  }

  get properties() {
    return {
      somethingId: this.somethingId,
      title: this.title
    };
  }
}
