var dreamCar = {
    make: "bmw M4",
    model: "98",
    color: "charcoal grey",
    year: 1983,
    bodyStyle: "Luxury Car",
    price: 1500
};

document.getElementById("modelyear").innerHTML="2018"
document.getElementById("pricetag").innerHTML= dreamCar.price
document.getElementById("body").innerHTML=dreamCar.make + "  " + dreamCar.bodyStyle.toLocaleUpperCase()
document.getElementById("body").style.backgroundColor = "grey"


