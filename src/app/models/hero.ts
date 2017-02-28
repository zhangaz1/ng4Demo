export class Hero {
  state = 'inactive';
  
  toggleState() {
      this.state = this.state === 'active'
                      ? 'inactive'
                      : 'active';
  }

  constructor(
    public id: number,
    public name: string,
    public power: string,
    public alterEgo?: string,
    public isSecret: boolean = false 
  ) { }
}