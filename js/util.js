function loadEmployees() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      var users = JSON.parse(xhttp.responseText);
      console.info(users);
      var container = document.getElementsByClassName("dynamic-content")[0];
      var table = document.createElement("table");
      table.setAttribute("style", "width:99%;");
      var thead = document.createElement("tr");
      var columnID = document.createElement("th");
      columnID.innerHTML = "ID";
      var columnForename = document.createElement("th");
      columnForename.innerHTML = "Forename";
      var columnSurname = document.createElement("th");
      columnSurname.innerHTML = "Surname";
      var columnBirth = document.createElement("th");
      columnBirth.innerHTML = "Date of Birth";

      thead.appendChild(columnID);
      thead.appendChild(columnForename);
      thead.appendChild(columnSurname);
      thead.appendChild(columnBirth);
      table.appendChild(thead);

      for (var user in users) {
        //console.info(user);
        var tr = document.createElement("tr");
        var tdID = document.createElement("td");
        tdID.innerHTML = users[user].id;
        var tdForname = document.createElement("td");
        tdForname.innerHTML = users[user].forename;
        var tdSurname = document.createElement("td");
        tdSurname.innerHTML = users[user].surname;
        var tdDateOfBirth = document.createElement("td");
        tdDateOfBirth.innerHTML = users[user].dateOfBirth;
        tr.appendChild(tdID);
        tr.appendChild(tdForname);
        tr.appendChild(tdSurname);
        tr.appendChild(tdDateOfBirth);
        table.appendChild(tr);
      }

      container.appendChild(table);
      console.info(container);
    }
  };
  xhttp.open("GET", "http://localhost:3000/employee", true);
  xhttp.send();
}
