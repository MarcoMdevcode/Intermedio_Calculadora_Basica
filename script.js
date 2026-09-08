function insert(num){
    var a= document.form.pantalla;
    a.value += num;
}
function clean(){
    document.form.pantalla.value="";
}
function back(){
    var exp=document.form.pantalla.value;
    document.form.pantalla.value = exp.substring(0, exp.length-1);
}
    var j=0;
function apag(){
    j++;
    if(j%2==0)
    document.form.pantalla.style.background="black";
    else
    document.form.pantalla.style.background="rgb(223, 218, 155)";
    document.form.pantalla.style.color="black";
}
function equal(){
    var button = document.getElementsByClassName('botonigual');
    var a = document.form.pantalla;
    var exp = a.value;

    if (exp){
        try {a.value = eval(exp);}
        catch (e){
            alert ("¡Error de sintáxis!");
            document.form.pantalla.value = "¡Error de sintáxis!";
            none();
        }
    }
}
function sq(){
    document.form.pantalla.value=Math.sqrt(document.form.pantalla.value);
}

















