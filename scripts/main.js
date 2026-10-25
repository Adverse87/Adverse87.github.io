const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/merk-avatar.jpg") {
    myImage.setAttribute("src", "images/smalldev1.jpg");
  } else {
    myImage.setAttribute("src", "images/merk-avatar.jpg");
  }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Восславь Императора");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Император ${myName}`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Император ${storedName}`;
}

myButton.addEventListener("click", () => {
  setUserName();
});
