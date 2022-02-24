import { Invoice } from "./classes/Invoices.js";
import { Payment } from "./classes/Payments.js";
import { Listemplates } from './classes/TempLists.js';
const form = document.querySelector(".new-item-form");
//inputs
const type = document.querySelector("#type");
const toForm = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
//list template
const ul = document.querySelector("ul");
const list = new Listemplates(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let values;
    values = [toForm.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, "end");
});
//addEnums
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["Book"] = 0] = "Book";
    ResourceType[ResourceType["Author"] = 1] = "Author";
    ResourceType[ResourceType["Film"] = 2] = "Film";
    ResourceType[ResourceType["Director"] = 3] = "Director";
    ResourceType[ResourceType["Person"] = 4] = "Person";
})(ResourceType || (ResourceType = {}));
// addUId
const addUiD = (obj) => {
    let uid = Math.floor(Math.random()) * 100;
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUiD({ name: "ayman", age: 200 });
const docThree = {
    Uid: 22,
    Resourcename: "Ayman",
    ResourceType: ResourceType.Book,
    data: "Ayma"
};
//Tuples
//---array
let arr = ["string", 22, true];
arr[0] = false;
arr = [30, false, "Ayman"];
//--Tuples
let tup = ["ayman", 25, false];
//# sourceMappingURL=sandbox.js.map