import { PessoaF, PessoaJ } from "./main_classes";
import { ispj, isOdonto, lugar } from "./main_script";

export function writeMessage(document: Document, pfArr: Array<PessoaF>, pjArr: Array<PessoaJ>){
    const e1 = document.getElementById('edtb1')!;
    const e2 = document.getElementById('edtb2')!;

    const real = new Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'});

    if(ispj === 0){
        let ambPS = '';
        let enfPS = '';
        let apPS = '';

        let ambTS = '';
        let enfTS = '';
        let apTS = '';

        const ambTitle = 'AMBULATORIAL\n';
        const enfTitle = 'ENFERMARIA\n';
        const apTitle = 'APARTAMENTO\n';

        let tAmb1 = 0;
        let tEnf1 = 0;
        let tAp1 = 0;

        let tAmb2 = 0;
        let tEnf2 = 0;
        let tAp2 = 0;

        if(isOdonto === 1){
            pfArr.forEach((person) => {
                ambPS += `${person.age} anos: ${real.format(person.ambOP)}\r\n`;
                enfPS += `${person.age} anos: ${real.format(person.enfOP)}\r\n`;
                apPS +=`${person.age} anos: ${real.format(person.apOP)}\r\n`;
    
                ambTS += `${person.age} anos: ${real.format(person.ambOT)}\r\n`;
                enfTS += `${person.age} anos: ${real.format(person.enfOT)}\r\n`;
                apTS +=`${person.age} anos: ${real.format(person.apOT)}\r\n`;

                tAmb1 += person.ambOP;
                tEnf1 += person.enfOP;
                tAp1 += person.apOP;

                tAmb2 += person.ambOT;
                tEnf2 += person.enfOT;
                tAp2 += person.apOT;

            });
        }
        else{
            pfArr.forEach((person) => {
                ambPS += `${person.age} anos: ${real.format(person.ambP)}\r\n`;
                enfPS += `${person.age} anos: ${real.format(person.enfP)}\r\n`;
                apPS +=`${person.age} anos: ${real.format(person.apP)}\r\n`;
    
                ambTS += `${person.age} anos: ${real.format(person.ambT)}\r\n`;
                enfTS += `${person.age} anos: ${real.format(person.enfT)}\r\n`;
                apTS +=`${person.age} anos: ${real.format(person.apT)}\r\n`;

                tAmb1 += person.ambP;
                tEnf1 += person.enfP;
                tAp1 += person.apP;
                
                tAmb2 += person.ambT;
                tEnf2 += person.enfT;
                tAp2 += person.apT;
            });
        }

        e1.innerHTML = `<span id="f3">${apTitle}</span>${apPS}Total ao mês: ${real.format(tAp1)}\r\n\r\n<span id="f2">${enfTitle}</span>${enfPS}Total ao mês: ${real.format(tEnf1)}\r\n\r\n<span id="f1">${ambTitle}</span>${ambPS}Total ao mês: ${real.format(tAmb1)}`;
        e2.innerHTML = `<span id="f6">${apTitle}</span>${apTS}Total ao mês: ${real.format(tAp2)}\r\n\r\n<span id="f5">${enfTitle}</span>${enfTS}Total ao mês: ${real.format(tEnf2)}\r\n\r\n<span id="f4">${ambTitle}</span>${ambTS}Total ao mês: ${real.format(tAmb2)}`;
    }
    else{
        let sacompPS = '';
        let enfPS = '';
        let apPS = '';

        let sacompTS = '';
        let enfTS = '';
        let apTS = '';

        const sacompTitle = 'SEM ACOMPANHAMENTO\n';
        const enfTitle = 'ENFERMARIA\n';
        const apTitle = 'APARTAMENTO\n';

        let tSacomp1 = 0;
        let tEnf1 = 0;
        let tAp1 = 0;

        let tSacomp2 = 0;
        let tEnf2 = 0;
        let tAp2 = 0;

        if(parseInt(lugar) != 1){
            pjArr.forEach((person) => {
                enfPS += `${person.age} anos: ${real.format(person.enfP)}\r\n`;
                apPS += `${person.age} anos: ${real.format(person.apP)}\r\n`;

                enfTS += `${person.age} anos: ${real.format(person.enfT)}\r\n`;
                apTS += `${person.age} anos: ${real.format(person.apT)}\r\n`;

                tEnf1 += person.enfP;
                tAp1 += person.apP;

                tEnf2 += person.enfT;
                tAp2 += person.apT;
            });

            e1.innerHTML = `<span id="f3">${apTitle}</span>${apPS}Total ao mês: ${real.format(tAp1)}\r\n\r\n<span id="f2">${enfTitle}</span>${enfPS}Total ao mês: ${real.format(tEnf1)}\r\n`;
            e2.innerHTML = `<span id="f6">${apTitle}</span>${apTS}Total ao mês: ${real.format(tAp2)}\r\n\r\n<span id="f5">${enfTitle}</span>${enfTS}Total ao mês: ${real.format(tEnf2)}\r\n`;
        }
        else{
            pjArr.forEach((person) => {
                sacompPS += `${person.age} anos: ${real.format(person.sacompP)}\r\n`
                enfPS += `${person.age} anos: ${real.format(person.enfP)}\r\n`;
                apPS += `${person.age} anos: ${real.format(person.apP)}\r\n`;
                
                sacompTS += `${person.age} anos: ${real.format(person.sacompT)}\r\n`
                enfTS += `${person.age} anos: ${real.format(person.enfT)}\r\n`;
                apTS += `${person.age} anos: ${real.format(person.apT)}\r\n`;

                tSacomp1 += person.sacompP;
                tEnf1 += person.enfP;
                tAp1 += person.apP;

                tSacomp2 += person.sacompT;
                tEnf2 += person.enfT;
                tAp2 += person.apT;
            });

            e1.innerHTML = `<span id="f3">${apTitle}</span>${apPS}Total ao mês: ${real.format(tAp1)}\r\n\r\n<span id="f2">${enfTitle}</span>${enfPS}Total ao mês: ${real.format(tEnf1)}\r\n\r\n<span id="f1">${sacompTitle}</span>${sacompPS}Total ao mês: ${real.format(tSacomp1)}`;
            e2.innerHTML = `<span id="f6">${apTitle}</span>${apTS}Total ao mês: ${real.format(tAp2)}\r\n\r\n<span id="f5">${enfTitle}</span>${enfTS}Total ao mês: ${real.format(tEnf2)}\r\n\r\n<span id="f4">${sacompTitle}</span>${sacompTS}Total ao mês: ${real.format(tSacomp2)}`;
        }
    }
}

export function showImg(document:Document, imgSrc: string){
    const imgEl1 = document.getElementById('img1')! as HTMLImageElement;
    const imgEl2 = document.getElementById('img2')! as HTMLImageElement;

    let imgPath1 = '';
    let imgPath2 = '';

    if(ispj === 0){
        if(parseInt(lugar) ==  0){
            imgPath1 = 'ian';
            imgPath2 = 'iano';
        }
        else if(parseInt(lugar) ==  1){
            imgPath1 = 'idf';
            imgPath2 = 'idfo';
        }
        else if(parseInt(lugar) ==  2){
            imgPath1 = 'igo';
            imgPath2 = 'igoo';
        }
    }
    else{
        if(parseInt(lugar) ==  0){
            imgPath1 = 'eanp';
            imgPath2 = 'eant';
        }
        else if(parseInt(lugar) ==  1){
            imgPath1 = 'edfp';
            imgPath2 = 'edft';
        }
        else if(parseInt(lugar) ==  2){
            imgPath1 = 'egop';
            imgPath2 = 'egot';
        }
    }

    document.getElementById('footerimgs')!.style.display = "block";

    imgEl1.src = `${imgSrc}/${imgPath1}.jpg`;
    imgEl2.src = `${imgSrc}/${imgPath2}.jpg`;
}