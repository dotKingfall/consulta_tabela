import { createElement, InputHTMLAttributes } from "react";
import { aeParcial, aeTotal, aOdontoParcial, aOdontoTotal, aParcial, aTotal, deParcial, deTotal, dOdontoParcial, dOdontoTotal, dParcial, dTotal, geParcial, geTotal, gOdontoParcial, gOdontoTotal, gParcial, gTotal, isOdonto, ispj, lugar, places } from "./page";
import { PessoaF, PessoaJ } from "./classes";
import { write } from "fs";

export function populatePlace(document: Document){
    const parent = document.getElementById('estadoOptions');

    for(let i = 0; i < places.length; i++){
        var child = parent!.appendChild(document.createElement('option'));
        child.value = i.toString();
        child.text = places[i].name;
    }

    parent!.firstChild?.remove();
}

export function changeBorder1(document: Document, dowhat: boolean){
    var l1 = document.getElementById('pflabel');
    var l2 = document.getElementById('pjlabel');

    if(!dowhat){
        l1!.style.border = "thin solid hsl(var(--twc-bg_main))";
        l1!.style.color = "#097969";
        l1!.style.backgroundColor = "hsl(var(--twc-bg_main))";

        l2!.style.border = "none";
        l2!.style.color = "hsl(var(--twc-bg_main))";
        l2!.style.backgroundColor = "#097969";
    }
    else{
        l2!.style.border = "thin solid hsl(var(--twc-bg_main))";
        l2!.style.color = "#097969";
        l2!.style.backgroundColor = "hsl(var(--twc-bg_main))";

        l1!.style.border = "none";
        l1!.style.color = "hsl(var(--twc-bg_main))";
        l1!.style.backgroundColor = "#097969";
    }
}

export function changeBorder2(document: Document, dowhat: boolean){
    var l1 = document.getElementById('solabel');
    var l2 = document.getElementById('colabel');

    if(!dowhat){
        l1!.style.border = "thin solid hsl(var(--twc-bg_main))";
        l1!.style.color = "#097969";
        l1!.style.backgroundColor = "hsl(var(--twc-bg_main))";

        l2!.style.border = "none";
        l2!.style.color = "hsl(var(--twc-bg_main))";
        l2!.style.backgroundColor = "#097969";
    }
    else{
        l2!.style.border = "thin solid hsl(var(--twc-bg_main))";
        l2!.style.color = "#097969";
        l2!.style.backgroundColor = "hsl(var(--twc-bg_main))";

        l1!.style.border = "none";
        l1!.style.color = "hsl(var(--twc-bg_main))";
        l1!.style.backgroundColor = "#097969";
    }
}

export function copyToClipboard(element: HTMLElement){
    navigator.clipboard.writeText(element.textContent || '');
}

export function countPeople(document: Document){
    var tmp = document.getElementById('idade') as HTMLInputElement;
    let value = tmp.value;
    const tmpArr = value.split(',');
    var ages:number[] =  [];

    tmpArr.forEach((item) => {
        var tmp = parseInt(item);

        if(isNaN(tmp) == false){
            ages.push(tmp);
        }
;    });

    let position = 0;
    let total = 0;
    let imgSrc = '';

    var pfArr:PessoaF[] =  [];
    var pjArr:PessoaJ[] =  [];

    if(ispj === 0){
        imgSrc = '/images/individual';

        ages.forEach((item) => {
            if(item <= 23){position = 1;} //I wonder why switch case doesn't work
            else if(item <= 28){position = 2;}
            else if(item <= 33){position = 3;}
            else if(item <= 38){position = 4;}
            else if(item <= 43){position = 5;}
            else if(item <= 48){position = 6;}
            else if(item <= 53){position = 7;}
            else if(item <= 58){position = 8;}
            else{position = 9;}

            //TODO URGENT FIX THIS
    
            if(parseInt(lugar) == 0){
                var el1 = aOdontoParcial[position];
                var el2 = aOdontoTotal[position];
                var el3 = aParcial[position];
                var el4 = aTotal[position];
    
                var tmp = new PessoaF(item, el1.amb, el1.enf, el1.ap, el2.amb, el2.enf, el2.ap, el3.amb, el3.enf, el3.ap, el4.amb, el4.enf, el4.ap);
                pfArr.push(tmp);
            }
            else if(parseInt(lugar) == 1){
                var el1 = dOdontoParcial[position];
                var el2 = dOdontoTotal[position];
                var el3 = dParcial[position];
                var el4 = dTotal[position];
    
                var tmp = new PessoaF(item, el1.amb, el1.enf, el1.ap, el2.amb, el2.enf, el2.ap, el3.amb, el3.enf, el3.ap, el4.amb, el4.enf, el4.ap);
                pfArr.push(tmp);
            }
            else if(parseInt(lugar) == 2){
                var el1 = gOdontoParcial[position];
                var el2 = gOdontoTotal[position];
                var el3 = gParcial[position];
                var el4 = gTotal[position];
    
                var tmp = new PessoaF(item, el1.amb, el1.enf, el1.ap, el2.amb, el2.enf, el2.ap, el3.amb, el3.enf, el3.ap, el4.amb, el4.enf, el4.ap);
                pfArr.push(tmp);
            }
        });
    }
    else{
        imgSrc = '/images/empresarial';

        ages.forEach((item) => {
            if(item <= 23){position = 1;} //I wonder why switch case doesn't work
            else if(item <= 28){position = 2;}
            else if(item <= 33){position = 3;}
            else if(item <= 38){position = 4;}
            else if(item <= 43){position = 5;}
            else if(item <= 48){position = 6;}
            else if(item <= 53){position = 7;}
            else if(item <= 58){position = 8;}
            else{position = 9;}
    
            if(parseInt(lugar) == 0){
                var el1 = aeParcial[position];
                var el2 = aeTotal[position];
    
                var tmp = new PessoaJ(item, el1.sacomp, el1.enf, el1.ap, el2.sacomp, el2.enf, el2.ap);
                pjArr.push(tmp);
            }
            else if(parseInt(lugar) == 1){
                var el1 = deParcial[position];
                var el2 = deTotal[position];
    
                var tmp = new PessoaJ(item, el1.sacomp, el1.enf, el1.ap, el2.sacomp, el2.enf, el2.ap);
                pjArr.push(tmp);
            }
            else if(parseInt(lugar) == 2){
                var el1 = geParcial[position];
                var el2 = geTotal[position];
    
                var tmp = new PessoaJ(item, el1.sacomp, el1.enf, el1.ap, el2.sacomp, el2.enf, el2.ap);
                pjArr.push(tmp);
            }
        });
    }

    let tmplen = pfArr.length;

    if(tmplen != 0){total = tmplen}
    else{total = pjArr.length;}

    document.getElementById('m2')!.innerHTML = total.toString();
    
    showImg(document, imgSrc);
    writeMessage(document, pfArr, pjArr);

    pfArr = []; pjArr = [];
}

function writeMessage(document: Document, pfArr: Array<PessoaF>, pjArr: Array<PessoaJ>){
    var e1 = document.getElementById('edtb1')!;
    var e2 = document.getElementById('edtb2')!;

    if(ispj === 0){
        var ambPS = '';
        var enfPS = '';
        var apPS = '';

        var ambTS = '';
        var enfTS = '';
        var apTS = '';

        var ambTitle = 'AMBULATORIAL\n';
        var enfTitle = 'ENFERMARIA\n';
        var apTitle = 'APARTAMENTO\n';

        if(isOdonto === 1){
            pfArr.forEach((person) => {
                ambPS += `${person.age} anos: R$ ${person.ambOP}\r\n`;
                enfPS += `${person.age} anos: R$ ${person.enfOP}\r\n`;
                apPS +=`${person.age} anos: R$ ${person.apOP}\r\n`;
    
                ambTS += `${person.age} anos: R$ ${person.ambOT}\r\n`;
                enfTS += `${person.age} anos: R$ ${person.enfOT}\r\n`;
                apTS +=`${person.age} anos: R$ ${person.apOT}\r\n`;
            });
        }
        else{
            pfArr.forEach((person) => {
                ambPS += `${person.age} anos: R$ ${person.ambP}\r\n`;
                enfPS += `${person.age} anos: R$ ${person.enfP}\r\n`;
                apPS +=`${person.age} anos: R$ ${person.apP}\r\n`;
    
                ambTS += `${person.age} anos: R$ ${person.ambT}\r\n`;
                enfTS += `${person.age} anos: R$ ${person.enfT}\r\n`;
                apTS +=`${person.age} anos: R$ ${person.apT}\r\n`;
            });
        }

        e1.innerHTML = `<span id="f1">${ambTitle}</span>${ambPS}\r\n<span id="f2">${enfTitle}</span>${enfPS}\r\n<span id="f3">${apTitle}</span>${apPS}`;
        e2.innerHTML = `<span id="f4">${ambTitle}</span>${ambTS}\r\n<span id="f5">${enfTitle}</span>${enfTS}\r\n<span id="f6">${apTitle}</span>${apTS}`;
    }
    else{
        var sacompPS = '';
        var enfPS = '';
        var apPS = '';

        var sacompTS = '';
        var enfTS = '';
        var apTS = '';

        var sacompTitle = 'SEM ACOMPANHAMENTO\n';
        var enfTitle = 'ENFERMARIA\n';
        var apTitle = 'APARTAMENTO\n';

        if(parseInt(lugar) != 1){
            pjArr.forEach((person) => {
                enfPS += `${person.age} anos: R$ ${person.enfP}\r\n`;
                apPS += `${person.age} anos: R$ ${person.apP}\r\n`;

                enfTS += `${person.age} anos: R$ ${person.enfT}\r\n`;
                apTS += `${person.age} anos: R$ ${person.apT}\r\n`;
            });

            e1.innerHTML = `<span id="f2">${enfTitle}</span>${enfPS}\r\n<span id="f3">${apTitle}</span>${apPS}`;
            e2.innerHTML = `<span id="f5">${enfTitle}</span>${enfTS}\r\n<span id="f6">${apTitle}</span>${apTS}`;
        }
        else{
            pjArr.forEach((person) => {
                sacompPS += `${person.age} anos: R$ ${person.sacompP}\r\n`
                enfPS += `${person.age} anos: R$ ${person.enfP}\r\n`;
                apPS += `${person.age} anos: R$ ${person.apP}\r\n`;
                
                sacompTS += `${person.age} anos: R$ ${person.sacompT}\r\n`
                enfTS += `${person.age} anos: R$ ${person.enfT}\r\n`;
                apTS += `${person.age} anos: R$ ${person.apT}\r\n`;
            });

            e1.innerHTML = `<span id="f1">${sacompTitle}</span>${sacompPS}\r\n<span id="f2">${enfTitle}</span>${enfPS}\r\n<span id="f3">${apTitle}</span>${apPS}`;
            e2.innerHTML = `<span id="f4">${sacompTitle}</span>${sacompTS}\r\n<span id="f5">${enfTitle}</span>${enfTS}\r\n<span id="f6">${apTitle}</span>${apTS}`;
        }
    }
}

function showImg(document:Document, imgSrc: string){
    var imgEl1 = document.getElementById('img1')! as HTMLImageElement;
    var imgEl2 = document.getElementById('img2')! as HTMLImageElement;

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