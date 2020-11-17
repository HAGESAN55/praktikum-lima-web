function send(){
    let pesan = document.getElementById("input").value;
    document.getElementById("box").innerHTML += pesan + "<br/>";
    document.getElementById("input").value="";
    return false;
}