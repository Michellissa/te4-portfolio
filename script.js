const Name = "Michell Issa";
const role = "Fullstack debeloper";
const Tag = document.querySelector("p");
Tag.textContent = `My name is ${Name} and I am a ${role}`;

let skills = ["HTML", "CSS", "JavaScript", "React", "Node.js"];

let skillslist = "<ul>";
for (let i = 0; i < skills.length; i++) {
  skillslist += "<li>" + skills[i] + "</li>";
}
skillslist += "</ul>";
document.querySelector("section table").innerHTML += skillslist;

const Aboutme = {
  name: "Michell Issa",
  role: "Fullstack developer",
  skills: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
  location: "Stockholm, Sweden",
};

function displayAboutMe(info) {
  let text = "";
  for (let key in info) {
    text += key + ": " + info[key] + "<br>";
  }

  document.querySelector("#About .para").innerHTML += "<br><br>" + text;
}

displayAboutMe(Aboutme);

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  let name = document.querySelector("input[type='text']").value;

  alert("Thank you " + name + "! I'll get back to you soon.");
});
