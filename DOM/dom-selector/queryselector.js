//*document.querySelector() --> Mengembalikan elemen

const p4 = document.querySelector("#b p");
p4.style.color = "green";
p4.style.fontSize = "50px";

const li2 = document.querySelector("section#b ul li:nth-Child(2)");
li2.style.background = "orange";

//*document.querySelecetorAll
const p = document.querySelectorAll("p");
for (let i = 0; i < p.length; i++) {
  p[i].style.backgroundColor = "pink";
}
