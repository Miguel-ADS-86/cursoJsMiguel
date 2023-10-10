class Mamifero{
    constructor(patas){
       this.patas = patas;
    }
}

let coiote = new Mamifero(4);
console.log(`O coiote tem ${coiote.patas} patas`);

class Cachorro extends Mamifero{
    constructor(patas, raca){
        super(patas, patas);
        this.raca = raca;
    }

    latir(){
        console.log('au au au');
    }
}

let pug = new Cachorro(4, 'vira-lata');
console.log(pug.patas + ' e ' + pug.raca);
pug.latir();

//o cachorro herda do mamifero
console.log(new Cachorro instanceof Mamifero);