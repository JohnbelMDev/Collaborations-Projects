$(document).ready(function() {
  $("#addField").click(function() {
    $(".outside").append(
      '<div class="outside_container" style=""><div class="center"><div style="float:left; width:45%;"><label for="username"><b>First Name</b><span class="required"></span> </label><input id="user_first_name" name="FirstName" size="50" type="text" placeholder="Term" /></div><div style="float:right; width:45%;">        <label for="name"><b>Last Name</b><span class="required"></span></label><input id="user_last_name" name="LastName" size="50" type="text" placeholder="answer" /></div></div></div>'
      );
  });
});
