function valid(){

      // validation for first name

      if(document.frm.fname.value==""){
            alert('Please enter Your first Name');
            document.frm.fname.focus();
            return false;
      }

      // applied regex for enter only alphabatic char as first name

      var fnm=/^[a-zA-Z]+$/;

      if(!fnm.test(document.frm.fname.value)){
            alert('Please enter First Name as alphabatic charecter only.');
            document.frm.fname.focus();
            return false;
      }


      // validation for last name

      if(document.frm.lname.value==""){
            alert('Please enter Your last Name');
            document.frm.lname.focus();
            return false;
      }

      // applied regex for enter only alphabatic char as last name

      var lnm=/^[a-zA-Z]+$/;

      if(!lnm.test(document.frm.lname.value)){
            alert('Please enter Last Name as alphabatic charecter only.');
            document.frm.lname.focus();
            return false;
      }

      // validation for email

      if(document.frm.email.value==""){
            alert('Please enter Your Email');
            document.frm.email.focus();
            return false;
      }

      // applied regex for valid email

      var em=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if(!em.test(document.frm.email.value)){
            alert('Please enter your valid Email');
            document.frm.email.focus();
            return false;
      }

      // validation for phone

      if(document.frm.phone.value==""){
            alert('Please enter Your Phone');
            document.frm.phone.focus();
            return false;
      }

      // applied regex for valid phone

      var ph=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

      if(!ph.test(document.frm.phone.value)){
            alert('Please enter your valid phone.');
            document.frm.phone.focus();
            return false;
      }

      // validation for subject

      if(document.frm.subject.value==""){
            alert('Please enter Your Subject');
            document.frm.subject.focus();
            return false;
      }

}