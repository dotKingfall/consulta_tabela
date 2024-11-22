import { createElement, InputHTMLAttributes } from "react";
import { places } from "./page";

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

export function countPeople(document: Document){
    var tmp = document.getElementById('idade') as HTMLInputElement;
    let value = tmp.value;
    const people = value.split(',');
}