
  function toggleButton(){
    if(document.getElementById("txtSearch").value == "")
    {
      document.getElementById("btnSearch").disabled = true;
    }
    else{
      document.getElementById("btnSearch").disabled = false;
    }
  }

  function getDate(){
    // TBD display current date in the span tag with id="date" in web page footer
    var currentDate = new Date();
    document.getElementById("date").innerHTML = currentDate.toDateString();
    // hint: https://www.w3schools.com/js/tryit.asp?filename=tryjs_date_current
  }