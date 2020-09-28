function dig(n){
 if(document.getElementById('area').value=='0'|| document.getElementById('area').value==null){
   document.getElementById('area').value=n;
 }else{
   document.getElementById('area').value += n
 }
}
function uguale(){
 document.getElementById('area').value = eval(document.getElementById('area').value);
}
function sqrt(){
  if(document.getElementById('area').value>=0){

  document.getElementById('area').value=String(Math.sqrt(Number(document.getElementById('area').value)));
  }else{
    document.getElementById('area').value="errore"
  }
}
function azzera(){
  document.getElementById('area').value="0";
}

function elimina(){
  var a =document.getElementById('area').value.split("");
 var b= a.pop(); document.getElementById('area').value=
   a.join("");
}

function PI(){
  document.getElementById('area').value +=Math.PI;
}

function ln(){
  if(document.getElementById('area').value>0){
    document.getElementById('area').value=Math.log(document.getElementById('area').value);
  } else{
    document.getElementById('area').value="errore"
  }
}
