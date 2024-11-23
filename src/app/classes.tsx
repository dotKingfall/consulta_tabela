export class PessoaF{
    ambOP: number;
    enfOP: number;
    apOP: number;

    ambOT: number;
    enfOT: number;
    apOT: number;

    ambP: number;
    enfP: number;
    apP: number;

    ambT: number;
    enfT: number;
    apT: number;

    constructor(ambOP: number, enfOP: number, apOP: number, ambOT: number, enfOT: number, apOT: number, ambP: number, enfP: number, apP: number, ambT: number, enfT: number, apT: number,){
        this.ambOP = ambOP;
        this.enfOP = enfOP;
        this.apOP = apOP;

        this.ambOT = ambOT;
        this.enfOT = enfOT;
        this.apOT = apOT;

        this.ambP = ambP;
        this.enfP = enfP;
        this.apP = apP;

        this.ambT = ambT;
        this.enfT = enfT;
        this.apT = apT;
    }
}

export class PessoaJ{
    sacompP: number;
    enfP: number;
    apP: number;

    sacompT: number;
    enfT: number;
    apT: number;

    constructor(sacompP: number, enfP: number, apP: number, sacompT: number, enfT: number, apT: number,){
        this.sacompP = sacompP;
        this.enfP = enfP;
        this.apP = apP;

        this.sacompT = sacompT;
        this.enfT = enfT;
        this.apT = apT;
    }
}

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