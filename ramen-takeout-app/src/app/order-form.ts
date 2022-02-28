export class Menu {
    constructor(
       public id: number,
       public orderSize: string,
       public specialRequest: string,
       public foodDescription: string,
       public  addToFavorites: boolean,
       public  name: string
    ) {}
  }