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

import { Empresarial, Individual, Onde} from './main_classes';
import { countPeople } from './main_people_methods';

//I don't wanna hear about it, I am sleepy and it get the job done, be merciful with my many arrays XD
export const places:Onde[] = [];

//Anápolis Individual
export const aOdontoParcial:Individual[] = [];
export const aOdontoTotal:Individual[] = [];
export const aParcial:Individual[] = [];
export const aTotal:Individual[] = [];

//Anápolis Empresarial
export const aeParcial:Empresarial[] = [];
export const aeTotal:Empresarial[] = [];

//DF Individual
export const dOdontoParcial:Individual[] = [];
export const dOdontoTotal:Individual[] = [];
export const dParcial:Individual[] = [];
export const dTotal:Individual[] = [];

//DF Empresarial
export const deParcial:Empresarial[] = [];
export const deTotal:Empresarial[] = [];

//Goiânia Individual
export const gOdontoParcial:Individual[] = [];
export const gOdontoTotal:Individual[] = [];
export const gParcial:Individual[] = [];
export const gTotal:Individual[] = [];

//Goiânia Empresarial
export const geParcial:Empresarial[] = [];
export const geTotal:Empresarial[] = [];

readJson();

export let ispj = 0;
export let isOdonto = 1;
export let lugar = "0";

export default function MainScript(){
    return(
    <div>
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

            <label className='promolabel'>Desconto (%): </label>
            <input type='number' onChange={() =>{savePromoValue(document)}} id='promo' defaultValue={0} min={0} max={100}></input>

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
          <input type='text' inputMode='numeric' placeholder='Idade (Separadas por ponto)' id='idade'></input>
          <div>
            <button id='agb2' onClick={() => {ignoreDiscount(document)}}>Desconto</button>
            <button id='agb1' onClick={() => {countPeople(document)}}>Gerar</button>
          </div>
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
    populatePromo(document);
  }, 500);

  const theme = localStorage.getItem('theme');
  document.documentElement.setAttribute('data-theme', theme || 'dark');

  if(theme === 'dark'){
    document.getElementById('themeSelector')?.setAttribute('checked', 'true');
  }
  else if (theme === 'light'){
    document.getElementById('themeSelector')?.removeAttribute('checked');
  }
}

function populatePlace(document: Document){
  const parent = document.getElementById('estadoOptions');

  for(let i = 0; i < places.length; i++){
      const child = parent!.appendChild(document.createElement('option'));
      child.value = i.toString();
      child.text = places[i].name;
  }

  parent!.firstChild?.remove();
}

function copyToClipboard(element: HTMLElement){
    navigator.clipboard.writeText(element.textContent || '');
}

function changeTheme(document: Document){
  const box = document.getElementById('themeSelector') as HTMLInputElement;

  if(box!.checked == true){
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  }
  else{
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  }
}

function changeBorder1(document: Document, dowhat: boolean){
  const l1 = document.getElementById('pflabel');
  const l2 = document.getElementById('pjlabel');

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

function changeBorder2(document: Document, dowhat: boolean){
  const l1 = document.getElementById('solabel');
  const l2 = document.getElementById('colabel');

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

function savePromoValue(document: Document){
  const tmp = document.getElementById('promo') as HTMLInputElement;
  localStorage.setItem('promo', tmp.value);
}

let ignoreDiscountValue = false;
function ignoreDiscount(document: Document){
  const tmp = document.getElementById('agb2')!.style;
  const pvalue = document.getElementById('promo') as HTMLInputElement;

  if(!ignoreDiscountValue){ //AJEITAR ISSO, NÃO RECONHECENDO TEXT-DECOR
    tmp!.setProperty('text-decoration', 'line-through');
    pvalue.value = '0';
    ignoreDiscountValue = true;
    
    countPeople(document);
  }
  else{
    tmp!.setProperty('text-decoration', 'none');
    pvalue.value = localStorage.getItem('promo') || '0';
    ignoreDiscountValue = false;

    countPeople(document);
  }
}

function populatePromo(document: Document){
  const el = document.getElementById('promo') as HTMLInputElement;
  const promo = localStorage.getItem('promo')
  el.value = promo || '0';
}

function readJson(){
  if(places.length === 0){
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
}
