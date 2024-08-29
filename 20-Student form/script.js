const newcont = document.getElementById("newcont");
const names = document.getElementById("name");
const age = document.getElementById("age");
const gender = document.getElementsByName("gender");
const course = document.getElementById("course");
const email = document.getElementById("email");
const btn = document.getElementById("btn");


function save(){
    const big = document.createElement("tr");
    const t1 = document.createElement("td");
    const t2 = document.createElement("td");
    const t3 = document.createElement("td");
    const t4 = document.createElement("td");
    const t5 = document.createElement("td");
    const t6 = document.createElement("td");
    const t7 = `<td>${names}</td>`
    

    var i;
     for(i=0; i<gender.length; i++){
        if(gender[i].checked){
            t3.innerHTML=gender[i].value;
        }
    }

    t1.innerHTML=names.value;
    t2.innerHTML=age.value;
    t4.innerHTML=course.value;
    t5.innerHTML=email.value;
    t6.innerHTML="<button onclick='delItem(event)'> Delete </button>"

    big.append(t1,t2,t3,t4,t5,t6,t7);
    newcont.appendChild(big);
};

function delItem(event){

    event.target.parentElement.parentElement.remove();
};