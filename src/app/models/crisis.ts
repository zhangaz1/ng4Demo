export class Crisis {
    state = 'inactive';
    
    toggleState(event) {
        event.preventDefault();
        event.stopPropagation();

        this.state = this.state === 'active'
                        ? 'inactive'
                        : 'active';
    }
    
    constructor(
        public id: number, 
        public name: string
    ) { }
}