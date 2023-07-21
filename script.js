function addNewWeField() {
  //   alert("add new work exp");
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("weField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", 3);
  newNode.setAttribute("placeholder", "Enter Here");

  let weOb = document.getElementById("we");
  let weAddButtonOb = document.getElementById("weAddButton");

  weOb.insertBefore(newNode, weAddButtonOb);
}

function addNewAqField() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("aqField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", 3);
  newNode.setAttribute("placeholder", "Enter Here");

  let aqOb = document.getElementById("aq");
  let aqAddButtonOb = document.getElementById("aqAddButton");

  aqOb.insertBefore(newNode, aqAddButtonOb);
}

// Generating CV

function generateCV() {
  // alert("generating CV!");

  let nameField = document.getElementById("nameField").value;

  let nameT1 = document.getElementById("nameT1");

  nameT1.innerHTML = nameField;
  //direct for template paper also

  document.getElementById("nameT2").innerHTML = nameField;

  //generate contact
  document.getElementById("contactT").innerHTML =
    document.getElementById("contactField").value;
  //address
  document.getElementById("addressT").innerHTML =
    document.getElementById("addressField").value;
  //social links
  document.getElementById("linkedInT").innerHTML =
    document.getElementById("linkedInField").value;
  document.getElementById("instaT").innerHTML =
    document.getElementById("instagramField").value;
  document.getElementById("twitterT").innerHTML =
    document.getElementById("twitterField").value;

  //objective
  document.getElementById("objectiveT").innerHTML =
    document.getElementById("objectiveField").value;

  //work exp
  let wes = document.getElementsByClassName("weField");
  let str = "";

  for (let e of wes) {
    str = str + `<li> ${e.value} </li>`;
  }
  document.getElementById("weT").innerHTML = str;

  //academic qualification
  let aqs = document.getElementsByClassName("aqField");
  let str1 = "";

  for (let e of aqs) {
    str1 = str1 + `<li> ${e.value} </li>`;
  }
  document.getElementById("aqT").innerHTML = str1;

  // setting image
  let file = document.getElementById("imgField").files[0];
  console.log(file);

  let reader = new FileReader();
  reader.readAsDataURL(file);
  console.log(reader.result);

  // set image to template

  reader.onloadend = () => {
    document.getElementById("imgT").src = reader.result;
  };

  document.getElementById("cv-form").style.display = "none";
  document.getElementById("cv-template").style.display = "block";
}

//printCV
function printCV() {
  window.print();
}
