// Selecting element
var content = document.getElementById("connect")
var unlist = document.getElementById("lit")

function add() {
    var adlist = document.createElement("li")
    adlist.innerHTML = content.value+ "<button onclick='delet(event)'>Delete</button>"
    unlist.append(adlist)
}
function delet(event){
    event.target.parentElement.remove()
}