var myVar;

function mainFunction(){
      myVar = setTimeout(loaderLoad, 2000);
      
}

function loaderLoad(){
      document.getElementById("loader").style="display:none";
    document.getElementById("main-page").style="display:block";
      // alert('Well come to Home page')
 }