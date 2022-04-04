function* get_id(){
    let i=1;
    while(true){
        yield (i++);
    }
}
let id=get_id();

function retriveData(){
    let keys=Object.keys(localStorage);
    keys.sort(function(a, b){return a - b});
    let target=document.getElementsByClassName("list_box")[0];
    for(let i =0;i<keys.length;i++){
        let listItem=create_list(localStorage[keys[i]],id.next().value);
        target.appendChild(listItem);
    }
}

retriveData()

function create_list(text,id){
    id=String(id);
    
    let node=document.createElement("li");
    node.setAttribute("class","list-item");
    let s=(`
    <input id="check-${id}" type="checkbox">
        <label for="check-${id}">${text}</label>
        <button class="del"  onClick="del(this,${id})" ><i class="fas fa-trash-alt"></i></button>
    `);
    node.innerHTML=s;
    
    return node;
}

function add(){
    let input=document.getElementById('input');
    let text=input.value;
    if(text==""){
        return;
    }
    let newId=id.next().value;
    localStorage.setItem(newId,text);
    let target=document.getElementsByClassName("list_box")[0];
    let listItem=create_list(text,newId);
    target.appendChild(listItem);
}

function del(x,id){
    localStorage.removeItem(id);
    x.parentElement.remove();
}


