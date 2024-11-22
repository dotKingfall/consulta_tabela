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
import { read } from 'fs';
import { Empresarial, Individual, Onde } from './classes';
import { changeBorder, countPeople, populatePlace } from './mainscript';

//I don't wanna hear about it, I am sleepy and it get the job done, be merciful with my many arrays XD
export var places:Onde[] = [];

//Anápolis Individual
export var aOdontoParcial:Individual[] = [];
export var aOdontoTotal:Individual[] = [];
export var aParcial:Individual[] = [];
export var aTotal:Individual[] = [];

//Anápolis Empresarial
export var aeParcial:Empresarial[] = [];
export var aeTotal:Empresarial[] = [];

//DF Individual
export var dOdontoParcial:Individual[] = [];
export var dOdontoTotal:Individual[] = [];
export var dParcial:Individual[] = [];
export var dTotal:Individual[] = [];

//DF Empresarial
export var deParcial:Empresarial[] = [];
export var deTotal:Empresarial[] = [];

//Goiânia Individual
export var gOdontoParcial:Individual[] = [];
export var gOdontoTotal:Individual[] = [];
export var gParcial:Individual[] = [];
export var gTotal:Individual[] = [];

//Goiânia Empresarial
export var geParcial:Empresarial[] = [];
export var geTotal:Empresarial[] = [];

readJson();

let ispj = 0;
let lugar = "0";

export default function Home() {
  return (
    <div>
      <script>
      </script>

      <header>
        <label className="switch">
          <input id="themeSelector" type="checkbox" onClick={() => changeTheme(document)} />
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
            <select name="estado" id="estadoOptions" onChange={(e) => {lugar = e.currentTarget.value}}>
              <option>Carregando...</option>
            </select>

            <div id='radials'>
              <label id='pflabel' onClick={() => {
                ispj = 0;
                var tmp = document.getElementById('pf') as HTMLInputElement;tmp.checked = true; changeBorder(document, false)}}>P. Física</label>
              <input type='radio' name='persona' value='PF' id='pf' defaultChecked></input>
              
              <label id='pjlabel' onClick={() => {
                ispj = 1;
                var tmp = document.getElementById('pj') as HTMLInputElement; tmp.checked = true; changeBorder(document, true)}}>P. Jurídica</label>
              <input type='radio' name='persona' value='PJ' id='pj'></input>
            </div>
          </form>
        </div>

        <div id='ages'>
          <input type='text' inputMode='numeric' placeholder='Idade (Separadas por vírgula)' id='idade'></input>
          <button onClick={() => {countPeople(document)}}>Generate</button>
        </div>

        <div>Baseado na tabela (a)</div>
        <div>total pessoas</div>

        <div id='textfields'>
          <div contentEditable></div>
          <div contentEditable></div>
        </div>
      </main>

      <footer></footer>
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
    var tmp = new Onde(item.id, item.name);
    places.push(tmp);
  });

  j_AOdontoParcial.forEach((item) => {
    var tmp = new Individual(item.ac, item.amb, item.enf, item.ap);
    aOdontoParcial.push(tmp);
  });

  j_AOdontoTotal.forEach((item) => {
    var tmp = new Individual(item.ac, item.amb, item.enf, item.ap);
    aOdontoTotal.push(tmp);
  });

  j_AParcial.forEach((item) => {
    var tmp = new Individual(item.ac, item.amb, item.enf, item.ap);
    aParcial.push(tmp);
  });

  j_ATotal.forEach((item) => {
    var tmp = new Individual(item.ac, item.amb, item.enf, item.ap);
    aTotal.push(tmp);
  });

  j_DOdontoParcial.forEach((item) => {
    var tmp = new Individual(item.ac, item.amb, item.enf, item.ap);
    dOdontoParcial.push(tmp);
  });

  j_DOdontoTotal.forEach((item) => {
    var tmp = new Individual(item.ac, item.amb, item.enf, item.ap);
    dOdontoTotal.push(tmp);
  });

  j_DParcial.forEach((item) => {
    var tmp = new Individual(item.ac, item.amb, item.enf, item.ap);
    dParcial.push(tmp);
  });

  j_DTotal.forEach((item) => {
    var tmp = new Individual(item.ac, item.amb, item.enf, item.ap);
    dTotal.push(tmp);
  });

  j_GOdontoParcial.forEach((item) => {
    var tmp = new Individual(item.ac, item.amb, item.enf, item.ap);
    gOdontoParcial.push(tmp);
  });

  j_GOdontoTotal.forEach((item) => {
    var tmp = new Individual(item.ac, item.amb, item.enf, item.ap);
    gOdontoTotal.push(tmp);
  });

  j_GParcial.forEach((item) => {
    var tmp = new Individual(item.ac, item.amb, item.enf, item.ap);
    gParcial.push(tmp);
  });

  j_GTotal.forEach((item) => {
    var tmp = new Individual(item.ac, item.amb, item.enf, item.ap);
    gTotal.push(tmp);
  });

  j_AEParcial.forEach((item) => {
    var tmp = new Empresarial(item.ac, item.sacomp, item.enf, item.ap);
    aeParcial.push(tmp);
  });

  j_AETotal.forEach((item) => {
    var tmp = new Empresarial(item.ac, item.sacomp, item.enf, item.ap);
    aeTotal.push(tmp);
  });

  j_DEParcial.forEach((item) => {
    var tmp = new Empresarial(item.ac, item.sacomp, item.enf, item.ap);
    deParcial.push(tmp);
  });

  j_DETotal.forEach((item) => {
    var tmp = new Empresarial(item.ac, item.sacomp, item.enf, item.ap);
    deTotal.push(tmp);
  });

  j_GEParcial.forEach((item) => {
    var tmp = new Empresarial(item.ac, item.sacomp, item.enf, item.ap);
    geParcial.push(tmp);
  });

  j_GETotal.forEach((item) => {
    var tmp = new Empresarial(item.ac, item.sacomp, item.enf, item.ap);
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