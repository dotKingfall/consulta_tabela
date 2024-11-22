import { createElement, InputHTMLAttributes } from "react";
import { ispj, places } from "./page";

export function populatePlace(document: Document){
    const parent = document.getElementById('estadoOptions');

    for(let i = 0; i < places.length; i++){
        var child = parent!.appendChild(document.createElement('option'));
        child.value = i.toString();
        child.text = places[i].name;
    }

    parent!.firstChild?.remove();
}

export function changeBorder(document: Document, dowhat: boolean){
    var l1 = document.getElementById('pflabel');
    var l2 = document.getElementById('pjlabel');

    if(!dowhat){
        l1!.style.border = "thin solid #F5F5F5";
        l2!.style.border = "none";
    }
    else{
        l2!.style.border = "thin solid #F5F5F5";
        l1!.style.border = "none";
    }
}

export function copyToClipboard(element: HTMLElement){
    navigator.clipboard.writeText(element.innerHTML);
}

export function countPeople(document: Document){
    var tmp = document.getElementById('idade') as HTMLInputElement;
    let value = tmp.value;
    const tmpArr = value.split(',');
    var ages:Number[] =  [];

    tmpArr.forEach((item) => {
        var tmp = parseInt(item);

        if(isNaN(tmp) == false){
            ages.push(tmp);
        }
;    });

    if(ispj === 0){
        let imgSrc = '../tables/images/individual';
    }
    else{
        let imgSrc = '../tables/images/empresarial';
    }
}