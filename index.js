const addmsg = (e) => {
    let curr=e.currentTarget;
    let currinp=curr.previousElementSibling;
    if(currinp.value.length>0){
        let newmsg=document.createElement("li");
        newmsg.innerHTML=`
            <span>${currinp.value}</span> 
            <button id="delbtn" class="del btn" onclick="delmsg(this)">Delete</button>
            <button id="editbtn" class="edit btn" onclick="editmsg(this)">Edit</button>
        `;
        newmsg.classList.add("msgs")

        document.getElementById("msglist").appendChild(newmsg);
    }
}
const delmsg = (msg) => {
    msg.parentElement.remove();    
}
const editmsg = (msg) =>{
    let currmsg=msg.parentElement.firstElementChild.textContent;
    console.log(currmsg);
    if(msg.textContent=="Edit"){
        msg.innerText="Done";
        let newinp=document.createElement("input");
        newinp.type="text";
        newinp.value=currmsg;
        newinp.style.width= "auto";
        newinp.style.margin="0";
        msg.parentElement.replaceChild(newinp,msg.parentElement.firstElementChild);
    }
    else{
        msg.innerText="Edit";
        let editedmsg=msg.parentElement.firstElementChild
        let editedspan=document.createElement("span");
        editedspan.textContent=editedmsg.value;
        msg.parentElement.replaceChild(editedspan,msg.parentElement.firstElementChild);
    }

}
let addbtn=document.getElementById("addbtn");
addbtn.addEventListener("click",addmsg);
