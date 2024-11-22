export class Individual{
    ac: number;
    amb: number;
    enf: number;
    ap: number;

    constructor(ac: number, amb: number, enf: number, ap: number){
        this.ac = ac;
        this.amb = amb;
        this.enf = enf;
        this.ap = ap;
    }
}

export class Empresarial{
    ac: number;
    sacomp: number;
    enf: number;
    ap: number;

    constructor(ac: number, sacomp: number, enf: number, ap: number){
        this.ac = ac;
        this.sacomp = sacomp;
        this.enf = enf;
        this.ap = ap;
    }
}

export class Onde{
    id: number;
    name: string;

    constructor(id: number, name: string){
        this.id = id;
        this.name = name;
    }
}