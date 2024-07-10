// enable  or  disable submit btn

function enbBtn(btnId){
      document.getElementById(btnId).disabled=false;
}

// window load function

window.onload=()=>{

      let addForm = document.querySelector("#add-form");
      let item = document.getElementById("item");
      let items = document.getElementById("items");

      // add items via user input by create eventListner

      addForm.addEventListener("submit", addItem);

      //remove items via user create event listner

      items.addEventListener("click", removeItem)
}

// add items callback function

function addItem(e){

      e.preventDefault(); // prevent refress or redirection after click on submit btn

      let newItem = document.getElementById("item").value;

      // trim white space from start & end of input value

      if(newItem.trim()=="" || newItem.trim()=='null'){
            Swal.fire({
                  title: "Something went wrong",
                  text: "Please do not left blank please input something to Add Items",
                  icon: "error"
                });
      }
      else{
            // add items here

            let li = document.createElement("li");

            li.className="list-group-item m-0 mt-3 w-100 new-item"

            // store data via createTextNode()

            li.appendChild(document.createTextNode(newItem));

            Swal.fire({
                  title: "Wow",
                  text: "Data addedd successfully",
                  icon: "success"
                });
   
            // display data in items

            items.appendChild(li);

            // reset all data

            e.target.reset();


            // add delet btn & edit btn via create element

            // delet button
            
            let delBtn = document.createElement("button");
            delBtn.className = "btn btn-sm btn-danger text-white float-end ms-2 delete";
            delBtn.appendChild(document.createTextNode("Delete"));

            // edit button 
                
            let editBtn = document.createElement("button");
            editBtn.className = "btn btn-sm btn-primary text-white float-end ms-2 edit";
            editBtn.appendChild(document.createTextNode("edit"));

            // delete btn add in items

            li.appendChild(delBtn);

            // edit btn add in items

            li.appendChild(editBtn);
      }
}      

// remove items callback function