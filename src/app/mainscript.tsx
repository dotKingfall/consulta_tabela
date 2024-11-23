import { createElement, InputHTMLAttributes } from "react";
import { aeParcial, aeTotal, aOdontoParcial, aOdontoTotal, aParcial, aTotal, deParcial, deTotal, dOdontoParcial, dOdontoTotal, dParcial, dTotal, geParcial, geTotal, gOdontoParcial, gOdontoTotal, gParcial, gTotal, ispj, lugar, places } from "./page";
import { PessoaF, PessoaJ } from "./classes";

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
    navigator.clipboard.writeText(element.innerHTML);
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

    var pfArr:PessoaF[] =  [];
    var pjArr:PessoaJ[] =  [];

    if(ispj === 0){
        let imgSrc = '../tables/images/individual';

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
                var el1 = aOdontoParcial[position];
                var el2 = aOdontoTotal[position];
                var el3 = aParcial[position];
                var el4 = aTotal[position];
    
                var tmp = new PessoaF(el1.amb, el1.enf, el1.ap, el2.amb, el2.enf, el2.ap, el3.amb, el3.enf, el3.ap, el4.amb, el4.enf, el4.ap);
                pfArr.push(tmp);
            }
            else if(parseInt(lugar) == 1){
                var el1 = dOdontoParcial[position];
                var el2 = dOdontoTotal[position];
                var el3 = dParcial[position];
                var el4 = dTotal[position];
    
                var tmp = new PessoaF(el1.amb, el1.enf, el1.ap, el2.amb, el2.enf, el2.ap, el3.amb, el3.enf, el3.ap, el4.amb, el4.enf, el4.ap);
                pfArr.push(tmp);
            }
            else if(parseInt(lugar) == 2){
                var el1 = gOdontoParcial[position];
                var el2 = gOdontoTotal[position];
                var el3 = gParcial[position];
                var el4 = gTotal[position];
    
                var tmp = new PessoaF(el1.amb, el1.enf, el1.ap, el2.amb, el2.enf, el2.ap, el3.amb, el3.enf, el3.ap, el4.amb, el4.enf, el4.ap);
                pfArr.push(tmp);
            }
        });
    }
    else{
        let imgSrc = '../tables/images/empresarial';

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
    
                var tmp = new PessoaJ(el1.sacomp, el1.enf, el1.ap, el2.sacomp, el2.enf, el2.ap);
                pjArr.push(tmp);
            }
            else if(parseInt(lugar) == 1){
                var el1 = deParcial[position];
                var el2 = deTotal[position];
    
                var tmp = new PessoaJ(el1.sacomp, el1.enf, el1.ap, el2.sacomp, el2.enf, el2.ap);
                pjArr.push(tmp);
            }
            else if(parseInt(lugar) == 2){
                var el1 = geParcial[position];
                var el2 = geTotal[position];
    
                var tmp = new PessoaJ(el1.sacomp, el1.enf, el1.ap, el2.sacomp, el2.enf, el2.ap);
                pjArr.push(tmp);
            }
        });
    }

    let tmplen = pfArr.length;

    if(tmplen != 0){total = tmplen}
    else{total = pjArr.length;}

    pfArr = []; pjArr = [];

    document.getElementById('m2')!.innerHTML = total.toString();
}