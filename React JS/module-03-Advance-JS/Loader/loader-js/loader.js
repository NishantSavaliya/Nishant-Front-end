var myVar;
console.log('hiii');
function mainFunction(){
      myVar = setTimeout(loaderLoad,"5000");
}

function loaderLoad(){
      document.getElementsByClassName("loader").style="display:none";
      document.getElementsByClassName("main-page").style="display:block !important";
}