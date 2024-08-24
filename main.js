document.body.style.cssText = "margin: 0px; background-color: rgb(236,236,236);font-family: Tahoma, Arial;";

let myHeader = document.createElement("header");
myHeader.className = "website-head";
myHeader.style.cssText = "display: flex; padding: 20px; background-color: rgb(255, 255, 255); justify-content: space-between; align-items: center;";

let myH1 = document.createElement("h1");
myH1.style.cssText = "color: #23a96e"
myH1.prepend("Redouane");

let myUl = document.createElement("ul");
myUl.style.cssText = "list-style: none; display:flex; align-items:center; justify-content:center; margin: 0; padding: 0;"

for (let index = 0; index < 4; index++) {
    let myLi = document.createElement("li");
    let myA = document.createElement("a");
    myA.style.cssText = "color: #858585; text-decoration:none; padding: 0 10px;"
    myA.setAttribute("href", "#");
    myLi.appendChild(myA);
    myUl.appendChild(myLi);
}
myHeader.appendChild(myH1);
myHeader.appendChild(myUl);


document.body.appendChild(myHeader);

let a = document.getElementsByTagName("a");

a[0].prepend("Home");
a[1].prepend("About");
a[2].prepend("Service");
a[3].prepend("Contact");


// ------------------


let myContentDiv = document.createElement("div");
myContentDiv.className = "content";
myContentDiv.style.cssText = "display: flex; padding: 20px;flex-wrap: wrap; justify-content: center; gap: 20px; min-height: calc(100vh - 142px); box-sizing: border-box;";


for (let index = 0; index < 15; index++) {
    let myProductDiv = document.createElement("div");
    myProductDiv.className = "product";
    myProductDiv.style.cssText = "padding: 20px; background-color: rgb(255, 255, 255); border: 1px solid rgb(221, 221, 211); width: calc((100% - 40px) / 3); box-sizing: border-box; text-align: center; color: rgb(136, 136, 136); border-radius: 6px;";
    
    let mySpan = document.createElement("span");
    mySpan.style.cssText = "font-size: 40px; color: black; font-weight: normal; display: block; margin-bottom: 10px; margin-top: 10px";
    mySpan.prepend(`${index + 1}`);
    
    myProductDiv.appendChild(mySpan);
    myProductDiv.prepend("Product");
    myContentDiv.appendChild(myProductDiv);
}
document.body.appendChild(myContentDiv);


let myFooter = document.createElement("footer");

myFooter.style.cssText = "background-color: rgb(35, 169, 110); font-size: 26px; text-align: center; padding: 20px; color: rgb(255, 255, 255);";
myFooter.prepend("Copyright 2024");
myFooter.className = "footer";

document.body.appendChild(myFooter);

let jsScript = document.createElement("script");
jsScript.setAttribute("src", "main.js");

document.body.appendChild(jsScript);

jsFirstScript = document.querySelectorAll("script");
jsFirstScript[0].remove();