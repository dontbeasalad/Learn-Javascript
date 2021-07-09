//TODO MANIPULASI ELEMENT
//element.innerHTML
//element.style.<property>
//element.setAttribute()
//element.classList

// //*element.innerHTML

// const judul = document.getElementById("judul");
// judul.innerHTML = "<em>Diubah dari JS</em>";

// const sectionA = document.querySelector("section#a");
// sectionA.innerHTML = "Hello World";

// //*element.style.<property>
// const sectionB = document.querySelector("section#b ul");
// sectionB.style.backgroundColor = "pink";

//*element.setAttribute
// const judul = document.getElementsByTagName("h1")[0];
// judul.setAttribute("name", "hanif");

// const a = document.querySelector('section#a a');

//*element.classList.
const p2 = document.querySelector("section#a .p2");
p2.classList.add("label");
p2.classList.remove("label");
p2.classList.toggle("label"); //bagaikan lampu
p2.classList.add("name");
// p2.classList.item("2");
// p2.classList.contains("name"); //true or false
p2.classList.replace("name", "satu"); //true or false
