console.log("Startx");
let list = [...document.querySelectorAll(".Number"), ... document.querySelectorAll(".operations")];
console.log("list.length="+list.length);
for(e of list){
    e.addEventListener('click', function(event)
    {
        document.querySelector("#input").value += this.value;
    });
};

const doc = document.querySelector("#input");

function Clear() {
    document.querySelector("#input").value = '';
}

function Backspace(){
    
    doc.value = doc.value.substring(0, doc.value.length - 1);
}

function EvalThis()
{
    if(doc.value[0]==0 && Number.isInteger(doc.value[1])){
        doc.value = " You can lead with 0 you muppet"
    }
    else{
        try{
  doc.value = eval(doc.value);
        }
        catch(e){
            doc.value = "Doesn't work like that"
        }
    }
}
