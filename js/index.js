// select element
var siteNameInput=document.getElementById("site-name");
var siteLinkInput=document.getElementById("site-link");
// var insertData=document.getElementById("rowData");
// var counter=0;
var container=[];
console.log(siteNameInput);
if(localStorage.getItem('site')!=null){
    container=JSON.parse(localStorage.getItem("site"));
    display();
}

// add item
function addItem(){
    site={
        sName:siteNameInput.value,
        sLink:siteLinkInput.value
    }
    container.push(site);
    localStorage.setItem("site",JSON.stringify(container)); 
    clearForm();
    display();
}

function clearForm(){
    siteNameInput.value=null;
    siteLinkInput.value=null;
}

function display(){
    var cartona=``;
    var counter=0;
    for(var i=0;i<container.length;i++){
        cartona+=`<tr>
                                <th scope="row" class="text-center">${++counter}</th>
                                <td class="text-center"></i>${container[i].sName}</td>
                                <td><button onclick="visit('${container[i].sLink}')" type="button" class="btn btn-success w-100 d-flex justify-content-center align-items-center text-capitalize"><i class="fa-solid fa-eye mx-2"></i>Visit</button></td>
                                <td><button onclick="deleteSite(${i})" class="btn btn-outline-danger btn-sm w-100 d-flex justify-content-center align-items-center text-capitalize"><i class="fa-solid fa-trash mx-2"></i> delete</button></td>
                            </tr>`
    }
    document.getElementById("table").innerHTML=cartona;
}

function deleteSite(deletedIndex){
    container.splice(deletedIndex,1);
    localStorage.setItem("site",JSON.stringify(container));
    display();
}

function visit(location){
    window.open(location, '_blank');
}
