console.log("saravana tha elamey igaaa");
const a=10;
console.log(a);
const b="string";
console.log(b);
const arr=[1,1.3,"tha",false];
console.log(arr);
arr[1]=5.3;
console.log(arr[1]);
arr.push(4);
console.log(arr)
arr.pop();
console.log(arr)


function example(){
    console.log("iam a supperman")
}

const ff=document.getElementById("ptag").innerHTML="hello"

const input=document.getElementById("input");
const output=document.getElementById("inputField");

input.addEventListener("input",()=>{
    output.textContent=input.value
})

const ptag=document.createElement("h3");
ptag.textContent="some text";
document.body.appendChild(ptag);

ptag.remove()