const button = document.getElementById("button");
button.addEventListener("click", () => {
  const image = document.createElement("img");
  image.style.width = "72px";
  image.src = "images/penny.png";
  image.src = "images/nickel.png";
  image.src = "images/dime.png";
  image.src = "images/quarter.png";
  document.querySelector("#coinDisplay").appendChild(image);
});
