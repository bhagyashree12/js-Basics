function insert(num){
document.forms["form"]["text"].value=document.forms["form"]["text"].value+num;
}
function find(){
    var exp=document.forms["form"]["text"].value;
    if(exp){
        document.forms["form"]["text"].value=eval(exp);
    }


}

function clean(){
 document.forms["form"]["text"].value = "";
  
}