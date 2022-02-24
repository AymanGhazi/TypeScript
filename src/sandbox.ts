
import {hasFormatter} from './Interfaces/hasFormatter.js';
import {Invoice}from "./classes/Invoices.js"
import{Payment}from "./classes/Payments.js"
import { Listemplates } from './classes/TempLists.js';


const form=document.querySelector(".new-item-form") as HTMLFormElement

//inputs
const type =document.querySelector("#type")as HTMLSelectElement

const toForm =document.querySelector("#tofrom")as HTMLInputElement

const details =document.querySelector("#details")as HTMLInputElement

const amount =document.querySelector("#amount")as HTMLInputElement


//list template
const ul=document.querySelector("ul")!
const list=new Listemplates(ul)


form.addEventListener("submit",(e:Event)=>{
    e.preventDefault()
let values:[string,string,number];
 values=[toForm.value,details.value,amount.valueAsNumber]

let doc: hasFormatter;
  if (type.value === 'invoice') {
    doc = new Invoice(...values);
  } else {
    doc = new Payment(...values);
  }
  list.render(doc,type.value,"end")
})



//addEnums
enum ResourceType{
    Book,Author,Film,Director,Person
}

// addUId
const addUiD=<T extends {name:string}>(obj:T)=>{
let uid=Math.floor(Math.random())*100
return {...obj,uid}
}
let docOne=addUiD({name:"ayman",age:200})

interface Resource<T>{
    Uid:Number,
    Resourcename:string,
    ResourceType:ResourceType
    data:T
}
const docThree:Resource<string>={
    Uid:22,
    Resourcename:"Ayman",
    ResourceType:ResourceType.Book,
    data:"Ayma"
}

//Tuples
//---array
let arr=["string",22,true]
arr[0]=false
arr=[30,false,"Ayman"]

//--Tuples
let tup:[string,number,boolean]=["ayman",25,false]
