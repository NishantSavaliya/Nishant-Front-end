// clear when click on c button

function clr() {
      document.getElementById("result").value="";
}

// when press on button its value get in result

function getResult(val) {
      document.getElementById("result").value+=val;
}

// when press on backspace its clear or slice one-one values

function clrSlice(val){
      var bck = document.getElementById("result").value;
      var res = bck.slice(0,-1);
      document.getElementById("result").value=res;
}

// get all arithmetic result here

function getFinalResult(){
      // get final result eval() => all arithmetic operator evalute here

      x = document.getElementById("result").value;
      y = eval(x);

      document.getElementById("result").value=+y;
}

//create function for sqroot()

function sqrootResult(){
      var number = parseInt(document.getElementById("result").value);
      var res = Math.sqrt(number);
      document.getElementById("result").value=res
}

//create function for squar()

function sqrResult(){
      var number = parseInt(document.getElementById("result").value);
      var res = Math.pow(number,2);
      document.getElementById("result").value=res
}