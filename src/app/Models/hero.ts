//Generamos nuestro Modelo de datos con el que trabajará el formulario
export class Hero {

    constructor
    (
        public id: number,
        public name: string,
        public power: string,
        //alterEgo? tiene la extension ? para inducar que es nulable
        public alterEgo?: string
    ) {}
}
