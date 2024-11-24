'use client';

import j_places from '../tables/places.json';

//Anápolis Individual JSON
import j_AOdontoParcial from '../tables/individual/anapolis_individual_odonto_parcial.json';
import j_AOdontoTotal from '../tables/individual/anapolis_individual_odonto_total.json';
import j_AParcial from '../tables/individual/anapolis_individual_parcial.json';
import j_ATotal from '../tables/individual/anapolis_individual_total.json';

//Anápolis Empresarial JSON
import j_AEParcial from '../tables/empresarial/anapolis_empresarial_parcial.json';
import j_AETotal from '../tables/empresarial/anapolis_empresarial_total.json';

//DF Individual JSON
import j_DOdontoParcial from '../tables/individual/df_individual_odonto_parcial.json';
import j_DOdontoTotal from '../tables/individual/df_individual_odonto_total.json';
import j_DParcial from '../tables/individual/df_individual_parcial.json';
import j_DTotal from '../tables/individual/df_individual_total.json';

//DF Empresarial JSON
import j_DEParcial from '../tables/empresarial/df_empresarial_parcial.json';
import j_DETotal from '../tables/empresarial/df_empresarial_total.json';

//Goiânia Individual JSON
import j_GOdontoParcial from '../tables/individual/goiania_individual_odonto_parcial.json';
import j_GOdontoTotal from '../tables/individual/goiania_individual_odonto_total.json';
import j_GParcial from '../tables/individual/goiania_individual_parcial.json';
import j_GTotal from '../tables/individual/goiania_individual_total.json';

//Goiânia Empresarial JSON
import j_GEParcial from '../tables/empresarial/goiania_empresarial_parcial.json';
import j_GETotal from '../tables/empresarial/goiania_empresarial_total.json';

import { Empresarial, Individual, Onde, PessoaF, PessoaJ } from './classes';

//I don't wanna hear about it, I am sleepy and it get the job done, be merciful with my many arrays XD
const places:Onde[] = [];

//Anápolis Individual
const aOdontoParcial:Individual[] = [];
const aOdontoTotal:Individual[] = [];
const aParcial:Individual[] = [];
const aTotal:Individual[] = [];

//Anápolis Empresarial
const aeParcial:Empresarial[] = [];
const aeTotal:Empresarial[] = [];

//DF Individual
const dOdontoParcial:Individual[] = [];
const dOdontoTotal:Individual[] = [];
const dParcial:Individual[] = [];
const dTotal:Individual[] = [];

//DF Empresarial
const deParcial:Empresarial[] = [];
const deTotal:Empresarial[] = [];

//Goiânia Individual
const gOdontoParcial:Individual[] = [];
const gOdontoTotal:Individual[] = [];
const gParcial:Individual[] = [];
const gTotal:Individual[] = [];

//Goiânia Empresarial
const geParcial:Empresarial[] = [];
const geTotal:Empresarial[] = [];

let ispj = 0;
let isOdonto = 1;
let lugar = "0";

readJson();

function populatePlace(document: Document){
    const parent = document.getElementById('estadoOptions');

    for(let i = 0; i < places.length; i++){
        const child = parent!.appendChild(document.createElement('option'));
        child.value = i.toString();
        child.text = places[i].name;
    }

    parent!.firstChild?.remove();
}

function changeBorder1(document: Document, dowhat: boolean){
    const l1 = document.getElementById('pflabel');
    const l2 = document.getElementById('pjlabel');

    if(!dowhat){
        l1!.style.border = "thin solid hsl(let(--twc-bg_main))";
        l1!.style.color = "#097969";
        l1!.style.backgroundColor = "hsl(let(--twc-bg_main))";

        l2!.style.border = "none";
        l2!.style.color = "hsl(let(--twc-bg_main))";
        l2!.style.backgroundColor = "#097969";
    }
    else{
        l2!.style.border = "thin solid hsl(let(--twc-bg_main))";
        l2!.style.color = "#097969";
        l2!.style.backgroundColor = "hsl(let(--twc-bg_main))";

        l1!.style.border = "none";
        l1!.style.color = "hsl(let(--twc-bg_main))";
        l1!.style.backgroundColor = "#097969";
    }
}

function changeBorder2(document: Document, dowhat: boolean){
    const l1 = document.getElementById('solabel');
    const l2 = document.getElementById('colabel');

    if(!dowhat){
        l1!.style.border = "thin solid hsl(let(--twc-bg_main))";
        l1!.style.color = "#097969";
        l1!.style.backgroundColor = "hsl(let(--twc-bg_main))";

        l2!.style.border = "none";
        l2!.style.color = "hsl(let(--twc-bg_main))";
        l2!.style.backgroundColor = "#097969";
    }
    else{
        l2!.style.border = "thin solid hsl(let(--twc-bg_main))";
        l2!.style.color = "#097969";
        l2!.style.backgroundColor = "hsl(let(--twc-bg_main))";

        l1!.style.border = "none";
        l1!.style.color = "hsl(let(--twc-bg_main))";
        l1!.style.backgroundColor = "#097969";
    }
}

function copyToClipboard(element: HTMLElement){
    navigator.clipboard.writeText(element.textContent || '');
}

function countPeople(document: Document){
    const tmp = document.getElementById('idade') as HTMLInputElement;
    const value = tmp.value;
    const tmpArr = value.split(',');
    const ages:number[] =  [];

    tmpArr.forEach((item) => {
        const tmp = parseInt(item);

        if(isNaN(tmp) == false){
            ages.push(tmp);
        }
;    });

    let position = 0;
    let total = 0;
    let imgSrc = '';

    let pfArr:PessoaF[] =  [];
    let pjArr:PessoaJ[] =  [];

    if(ispj === 0){
        imgSrc = '/images/individual';

        ages.forEach((item) => {
            if(item <= 18){}
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
            if(item <= 18){}
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

function writeMessage(document: Document, pfArr: Array<PessoaF>, pjArr: Array<PessoaJ>){
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

        e1.innerHTML = `<span id="f1">${ambTitle}</span>${ambPS}Total ao mês: ${real.format(tAmb1)}\r\n\r\n<span id="f2">${enfTitle}</span>${enfPS}Total ao mês: ${real.format(tEnf1)}\r\n\r\n<span id="f3">${apTitle}</span>${apPS}Total ao mês: ${real.format(tAp1)}`;
        e2.innerHTML = `<span id="f4">${ambTitle}</span>${ambTS}Total ao mês: ${real.format(tAmb2)}\r\n\r\n<span id="f5">${enfTitle}</span>${enfTS}Total ao mês: ${real.format(tEnf2)}\r\n\r\n<span id="f6">${apTitle}</span>${apTS}Total ao mês: ${real.format(tAp2)}`;
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

            e1.innerHTML = `<span id="f2">${enfTitle}</span>${enfPS}Total ao mês: ${real.format(tEnf1)}\r\n\r\n<span id="f3">${apTitle}</span>${apPS}Total ao mês: ${real.format(tAp1)}\r\n`;
            e2.innerHTML = `<span id="f5">${enfTitle}</span>${enfTS}Total ao mês: ${real.format(tEnf2)}\r\n\r\n<span id="f6">${apTitle}</span>${apTS}Total ao mês: ${real.format(tAp2)}\r\n`;
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

            e1.innerHTML = `<span id="f1">${sacompTitle}</span>${sacompPS}Total ao mês: ${real.format(tSacomp1)}\r\n\r\n<span id="f2">${enfTitle}</span>${enfPS}Total ao mês: ${real.format(tEnf1)}\r\n\r\n<span id="f3">${apTitle}</span>${apPS}Total ao mês: ${real.format(tAp1)}`;
            e2.innerHTML = `<span id="f4">${sacompTitle}</span>${sacompTS}Total ao mês: ${real.format(tSacomp2)}\r\n\r\n<span id="f5">${enfTitle}</span>${enfTS}Total ao mês: ${real.format(tEnf2)}\r\n\r\n<span id="f6">${apTitle}</span>${apTS}Total ao mês: ${real.format(tAp2)}`;
        }
    }
}

function showImg(document:Document, imgSrc: string){
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

export default function Home() {
  return (
    <div>
      <script>
      </script>

      <header>
        <label className="switch">
          <input id="themeSelector" type="checkbox" defaultChecked onClick={() => changeTheme(document)} />
          <span className="slider"></span>
        </label>

        <div id="topbar">
          <div>Consulta de Valores (Nov/2024)</div>
        </div>
      </header>

      <main>
        <div id='bottomOptions'>
          <form>
            <label>Em:   </label>
            <select name="estado" id="estadoOptions" onChange={(e) => {lugar = e.currentTarget.value;}}>
              <option>Carregando...</option>
            </select>

            <div id='radialsPersona'>
              <label id='pflabel' className='selects' onClick={() => {
                ispj = 0;
                const tmp = document.getElementById('pf') as HTMLInputElement;tmp.checked = true;
                document.getElementById('radialsOdonto')!.style.display = 'initial';
                changeBorder1(document, false)}}>P. Física</label>
              <input type='radio' name='persona' value='PF' id='pf' defaultChecked></input>
              
              <label id='pjlabel' className='selects' onClick={() => {
                ispj = 1;
                const tmp = document.getElementById('pj') as HTMLInputElement; tmp.checked = true;
                document.getElementById('radialsOdonto')!.style.display = 'none';
                changeBorder1(document, true)}}>P. Jurídica</label>
              <input type='radio' name='persona' value='PJ' id='pj'></input>
            </div>

            <div id='radialsOdonto'>
              <label id='solabel' className='selects' onClick={() => {
                isOdonto = 1;
                const tmp = document.getElementById('ooff') as HTMLInputElement;tmp.checked = true; changeBorder2(document, false)}}>C/ Odonto</label>
              <input type='radio' name='odonto' value='off' id='ooff' defaultChecked></input>
              
              <label id='colabel' className='selects' onClick={() => {
                isOdonto = 0;
                const tmp = document.getElementById('oon') as HTMLInputElement; tmp.checked = true; changeBorder2(document, true)}}>S/ Odonto</label>
              <input type='radio' name='odonto' value='on' id='oon'></input>
            </div>
          </form>
        </div>

        <div id='ages'>
          <input type='text' inputMode='numeric' placeholder='Idade (Separadas por vírgula)' id='idade'></input>
          <button onClick={() => {countPeople(document)}}>Gerar</button>
        </div>

        <div className='meta'>
          <div className='float-end'>Total pessoas: <span id='m2'>0</span></div>
        </div>

        <div id='textfields'>
          <table>
            <thead>
              <tr>
                <td className='copTitle'>Coparticipação <span className='cop'>Parcial</span></td>
                <td className='copTitle'>Coparticipação <span className='cop'>Total</span></td>
              </tr>
            </thead>
            
              <tbody>
              <tr>
                <td className='h-80'>
                  <div contentEditable className='editable' id='edtb1'></div>
                </td>
                <td className='h-80'>
                  <div contentEditable className='editable' id='edtb2'></div>
                </td>
              </tr>
            </tbody>

            <tfoot>
              <tr>
                <td>
                  <button className='copybutton' onClick={() => copyToClipboard(document.getElementById('edtb1')!)}>Copiar</button>
                </td>
                <td>
                  <button className='copybutton' onClick={() => copyToClipboard(document.getElementById('edtb2')!)}>Copiar</button>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </main>

      <footer>
        <div id='footerimgs'>
          <div className='meta'>
            <span>Baseado nas tabelas: <span id='m1'></span></span>
          </div>
          <div className='imagesRow'>
            <div className='imagesColumn'>
              <img alt='img1' id='img1'></img>
            </div>
            <div className='imagesColumn'>
              <img alt='img2' id='img2'></img>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

if(typeof window !== 'undefined'){
  setTimeout(() => {
    populatePlace(document);
  }, 500);
}

function readJson(){
  j_places.forEach((item) => {
    const tmp = new Onde(item.id, item.name);
    places.push(tmp);
  });

  j_AOdontoParcial.forEach((item) => {
    const tmp = new Individual(item.ac, item.amb, item.enf, item.ap);
    aOdontoParcial.push(tmp);
  });

  j_AOdontoTotal.forEach((item) => {
    const tmp = new Individual(item.ac, item.amb, item.enf, item.ap);
    aOdontoTotal.push(tmp);
  });

  j_AParcial.forEach((item) => {
    const tmp = new Individual(item.ac, item.amb, item.enf, item.ap);
    aParcial.push(tmp);
  });

  j_ATotal.forEach((item) => {
    const tmp = new Individual(item.ac, item.amb, item.enf, item.ap);
    aTotal.push(tmp);
  });

  j_DOdontoParcial.forEach((item) => {
    const tmp = new Individual(item.ac, item.amb, item.enf, item.ap);
    dOdontoParcial.push(tmp);
  });

  j_DOdontoTotal.forEach((item) => {
    const tmp = new Individual(item.ac, item.amb, item.enf, item.ap);
    dOdontoTotal.push(tmp);
  });

  j_DParcial.forEach((item) => {
    const tmp = new Individual(item.ac, item.amb, item.enf, item.ap);
    dParcial.push(tmp);
  });

  j_DTotal.forEach((item) => {
    const tmp = new Individual(item.ac, item.amb, item.enf, item.ap);
    dTotal.push(tmp);
  });

  j_GOdontoParcial.forEach((item) => {
    const tmp = new Individual(item.ac, item.amb, item.enf, item.ap);
    gOdontoParcial.push(tmp);
  });

  j_GOdontoTotal.forEach((item) => {
    const tmp = new Individual(item.ac, item.amb, item.enf, item.ap);
    gOdontoTotal.push(tmp);
  });

  j_GParcial.forEach((item) => {
    const tmp = new Individual(item.ac, item.amb, item.enf, item.ap);
    gParcial.push(tmp);
  });

  j_GTotal.forEach((item) => {
    const tmp = new Individual(item.ac, item.amb, item.enf, item.ap);
    gTotal.push(tmp);
  });

  j_AEParcial.forEach((item) => {
    const tmp = new Empresarial(item.ac, item.sacomp, item.enf, item.ap);
    aeParcial.push(tmp);
  });

  j_AETotal.forEach((item) => {
    const tmp = new Empresarial(item.ac, item.sacomp, item.enf, item.ap);
    aeTotal.push(tmp);
  });

  j_DEParcial.forEach((item) => {
    const tmp = new Empresarial(item.ac, item.sacomp, item.enf, item.ap);
    deParcial.push(tmp);
  });

  j_DETotal.forEach((item) => {
    const tmp = new Empresarial(item.ac, item.sacomp, item.enf, item.ap);
    deTotal.push(tmp);
  });

  j_GEParcial.forEach((item) => {
    const tmp = new Empresarial(item.ac, item.sacomp, item.enf, item.ap);
    geParcial.push(tmp);
  });

  j_GETotal.forEach((item) => {
    const tmp = new Empresarial(item.ac, item.sacomp, item.enf, item.ap);
    geTotal.push(tmp);
  });
}

function changeTheme(document: Document){
  const box = document.getElementById('themeSelector') as HTMLInputElement;

  if(box!.checked == true){
    document.documentElement.setAttribute('data-theme', 'dark');
  }
  else{
    document.documentElement.setAttribute('data-theme', 'light');
  }
}
