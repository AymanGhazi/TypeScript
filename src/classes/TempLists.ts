import { hasFormatter } from './../Interfaces/hasFormatter';


export class Listemplates{
    constructor(private container:HTMLUListElement){}
    render(item :hasFormatter,heading:string,position:"start"|"end" ){
const li=document.createElement("li")
const h4=document.createElement("h4")
h4.innerText=heading
li.appendChild(h4)
const p=document.createElement("p")
p.innerText=item.format()
li.append(p)
if (position=="start") {
    this.container.prepend(li)
 }else{
     this.container.append(li)
 }
    }
}