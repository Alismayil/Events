const btn = document.querySelector("button");
const table = document.querySelector("table");
const firstName = document.getElementById("user");
const surname = document.getElementById("surname");
const married = document.getElementById("married");
const age = document.getElementById("age");
let id = 1;

btn.addEventListener("click", (event) => {
  event.preventDefault();
  const tr = document.createElement("tr");
  const tdId = document.createElement("td");
  const tdName = document.createElement("td");
  const tdSurname = document.createElement("td");
  const tdMarry = document.createElement("td");
  const tdAge = document.createElement("td");
    
  if ((age.value <= 0 )||
    firstName.value === "" ||
    firstName.value === null ||
    surname.value === "" ||
    surname.value === null ||
    married.value === "" ||
    married.value === null ||
    age.value === "" ||
    age.value === null ) {
    alert("Yanlışdır!!!");
    return false;
    }

  tr.append(tdId, tdName, tdSurname, tdMarry, tdAge);
  table.append(tr);

  tdId.textContent = id;
  tdName.textContent = firstName.value;
  tdSurname.textContent = surname.value;
  tdMarry.textContent = married.value;
  tdAge.textContent = age.value;

  firstName.value = "";
  surname.value = "";
  married.value = "";
  age.value = "";
  id++;
});

// btn.addEventListener("click", (event) => {
//     event.preventDefault();
//     let tdId = document.getElementById("numberId");
//     let id = 1;
//     let user = document.getElementById("user").value;
//     let tdUser = document.getElementById("userId");
//     let surname = document.getElementById("surname").value;
//     let tdSurname = document.getElementById("surnameId");
//     let married = document.getElementById("married").value;
//     let tdMarried = document.getElementById("marriedId");
//     let age = document.getElementById("age").value;
//     let tdAge = document.getElementById("ageId");

//     tdId.textContent = id;
//     tdUser.textContent = user;
//     tdSurname.textContent = surname;
//     tdMarried.textContent = married;
//     tdAge.textContent = age;
//     id++;
//   });
