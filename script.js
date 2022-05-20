const button = document.getElementById("button");
const coin = document.getElementById("typeOfCoin");
const numberOfCoin = document.getElementById("numberOfCoins");

button.addEventListener("click", () => {
  

  for (let i = 0; i < numberOfCoin.value; i++) {
    const image = document.createElement("img");

    image.style.width = "72px";
  
    if (coin.value === "penny") {
      image.src = "images/penny.png";
    } else if (coin.value === "nickel") {
      image.src = "images/nickel.png";
    } else if (coin.value === "dime") {
      image.src = "images/dime.png";
    } else if (coin.value === "quarter") {
      image.src = "images/quarter.png";
    }
    console.log("loop run");
    document.querySelector("#coinDisplay").appendChild(image);
  }
});
