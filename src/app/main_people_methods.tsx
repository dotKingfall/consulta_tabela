import { PessoaF, PessoaJ } from "./main_classes";
import { showImg, writeMessage } from "./main_return_methods";
import { aeParcial, aeTotal, aOdontoParcial, aOdontoTotal, aParcial, aTotal, deParcial, deTotal, dOdontoParcial, dOdontoTotal, dParcial, dTotal, geParcial, geTotal, gOdontoParcial, gOdontoTotal, gParcial, gTotal, ispj, lugar } from "./main_script";

export function countPeople(document: Document){
    const tmp = document.getElementById('idade') as HTMLInputElement;
    const value = tmp.value;
    const tmpArr = value.split('.');
    const ages:number[] =  [];

    tmpArr.forEach((item) => {
        const tmp = parseInt(item);

        if(isNaN(tmp) == false){
            ages.push(tmp);
        }
    });

    let position = 0;
    let total = 0;
    let imgSrc = '';

    let pfArr:PessoaF[] =  [];
    let pjArr:PessoaJ[] =  [];

    if(ispj === 0){
        imgSrc = '/images/individual';

        ages.forEach((item) => {
            if(item <= 18){position = 0;}
            else if(item <= 23){position = 1;} //I wonder why switch case doesn't work
            else if(item <= 28){position = 2;}
            else if(item <= 33){position = 3;}
            else if(item <= 38){position = 4;}
            else if(item <= 43){position = 5;}
            else if(item <= 48){position = 6;}
            else if(item <= 53){position = 7;}
            else if(item <= 58){position = 8;}
            else{position = 9;}
    
            if(parseInt(lugar) == 0){
                const el1 = aOdontoParcial[position];
                const el2 = aOdontoTotal[position];
                const el3 = aParcial[position];
                const el4 = aTotal[position];
    
                const tmp = new PessoaF(item, el1.amb, el1.enf, el1.ap, el2.amb, el2.enf, el2.ap, el3.amb, el3.enf, el3.ap, el4.amb, el4.enf, el4.ap);
                pfArr.push(tmp);
            }
            else if(parseInt(lugar) == 1){
                const el1 = dOdontoParcial[position];
                const el2 = dOdontoTotal[position];
                const el3 = dParcial[position];
                const el4 = dTotal[position];
    
                const tmp = new PessoaF(item, el1.amb, el1.enf, el1.ap, el2.amb, el2.enf, el2.ap, el3.amb, el3.enf, el3.ap, el4.amb, el4.enf, el4.ap);
                pfArr.push(tmp);
            }
            else if(parseInt(lugar) == 2){
                const el1 = gOdontoParcial[position];
                const el2 = gOdontoTotal[position];
                const el3 = gParcial[position];
                const el4 = gTotal[position];
    
                const tmp = new PessoaF(item, el1.amb, el1.enf, el1.ap, el2.amb, el2.enf, el2.ap, el3.amb, el3.enf, el3.ap, el4.amb, el4.enf, el4.ap);
                pfArr.push(tmp);
            }
        });
    }
    else{
        imgSrc = '/images/empresarial';

        ages.forEach((item) => {
            if(item <= 18){position = 0;}
            else if(item <= 23){position = 1;} //I wonder why switch case doesn't work
            else if(item <= 28){position = 2;}
            else if(item <= 33){position = 3;}
            else if(item <= 38){position = 4;}
            else if(item <= 43){position = 5;}
            else if(item <= 48){position = 6;}
            else if(item <= 53){position = 7;}
            else if(item <= 58){position = 8;}
            else{position = 9;}
    
            if(parseInt(lugar) == 0){
                const el1 = aeParcial[position];
                const el2 = aeTotal[position];
    
                const tmp = new PessoaJ(item, el1.sacomp, el1.enf, el1.ap, el2.sacomp, el2.enf, el2.ap);
                pjArr.push(tmp);
            }
            else if(parseInt(lugar) == 1){
                const el1 = deParcial[position];
                const el2 = deTotal[position];
    
                const tmp = new PessoaJ(item, el1.sacomp, el1.enf, el1.ap, el2.sacomp, el2.enf, el2.ap);
                pjArr.push(tmp);
            }
            else if(parseInt(lugar) == 2){
                const el1 = geParcial[position];
                const el2 = geTotal[position];
    
                const tmp = new PessoaJ(item, el1.sacomp, el1.enf, el1.ap, el2.sacomp, el2.enf, el2.ap);
                pjArr.push(tmp);
            }
        });
    }

    const tmplen = pfArr.length;

    if(tmplen != 0){total = tmplen}
    else{total = pjArr.length;}

    document.getElementById('m2')!.innerHTML = total.toString();
    
    showImg(document, imgSrc);
    writeMessage(document, pfArr, pjArr);

    pfArr = []; pjArr = [];
}