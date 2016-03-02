function hideElementByID(id) {
  var elem = document.getElementById(id);
  if (elem) {
    elem.setAttribute('style', "display:none");
  }
}

function hideElementByClass(className) {
  var elem = document.getElementsByClassName(className)[0];
  if (elem) {
    elem.setAttribute('style', "display:none");
  }
}

function removeElementByID(id) {
  $('#' + id).remove();
}

function loadEmployees() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      //REMOVE EXITING ELEMENTS
      hideElementByID('loginContainer');
      hideElementByClass('loginContainer');
      removeElementByID('employeeTable');

      var users = JSON.parse(xhttp.responseText);
      var container = document.getElementsByClassName("dynamic-content")[0];
      var table = document.createElement("table");
      table.setAttribute("style", "width:99%;");
      table.setAttribute('id', 'employeeTable');
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

function createLoginView() {
  var title = document.getElementsByClassName('title')[0];
  title.innerHTML = "Login";

  removeElementByID('loginForm');

  var container = document.getElementsByClassName("dynamic-content")[0];

  //Login inputs
  var form = document.createElement("form")
  form.setAttribute('id', 'loginForm');
  var div1 = document.createElement("div");
  div1.setAttribute('style', 'width:100%');
  var userInput = document.createElement("input");
  userInput.setAttribute('type', 'text');
  userInput.setAttribute('placeholder', 'Username');
  userInput.setAttribute('name', 'username');
  div1.appendChild(userInput);

  var div2 = document.createElement("div");
  div2.setAttribute('style', 'width:100%');
  var pwInput = document.createElement("input");
  pwInput.setAttribute('type', 'password');
  pwInput.setAttribute('placeholder', 'Password');
  pwInput.setAttribute('name', 'password');
  div2.appendChild(pwInput);

  var div3 = document.createElement("div");
  div3.setAttribute('style', 'width:100%');
  var submitInput = document.createElement("input");
  submitInput.setAttribute('type', 'submit');
  submitInput.setAttribute('value', 'Anmelden');
  submitInput.setAttribute('name', 'submit');
  submitInput.setAttribute('id', 'loginFormSubmit');
  div3.appendChild(submitInput);

  form.appendChild(div1);
  form.appendChild(div2);
  form.appendChild(div3);

  container.appendChild(form);
}
