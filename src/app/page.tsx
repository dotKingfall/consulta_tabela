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

//I don't wanna hear about it, I am sleepy and it get the job done, be merciful with my many arrays XD
let places:Local[] = [];

//Anápolis Individual
let aOdontoParcial:Individual[] = [];
let aOdontoTotal:Individual[] = [];
let aParcial:Individual[] = [];
let aTotal:Individual[] = [];

//Anápolis Empresarial
let aeParcial:Empresarial[] = [];
let aeTotal:Empresarial[] = [];

//DF Individual
let dOdontoParcial:Individual[] = [];
let dOdontoTotal:Individual[] = [];
let dParcial:Individual[] = [];
let dTotal:Individual[] = [];

//DF Empresarial
let deParcial:Empresarial[] = [];
let deTotal:Empresarial[] = [];

//Goiânia Individual
let gOdontoParcial:Individual[] = [];
let gOdontoTotal:Individual[] = [];
let gParcial:Individual[] = [];
let gTotal:Individual[] = [];

//Goiânia Empresarial
let geParcial:Empresarial[] = [];
let geTotal:Empresarial[] = [];


export default function Home() {
  readJson();

  return (
    <div>
      <header>
        <label className="switch">
          <input id="themeSelector" type="checkbox" onClick={() => changeTheme(document)} />
          <span className="slider"></span>
        </label>

        <div id="topbar">
          <div>Consulta de Valores</div>
        </div>
      </header>

      <main>
        <div id="teste">teste</div>
      </main>

      <footer></footer>
    </div>
  );
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

function readJson(){
  j_places.forEach((item) => {
    places.push(item);
  });

  console.log(places[0].id);
}