
const meter = 3.281
const liter = 0.264
const kilogram = 2.204

let box = document.getElementById("box")
const lengthEl = document.getElementById("length-el")
const volume = document.getElementById("volume")
const mass = document.getElementById("mass")
const convBtn= document.getElementById("convert-btn")

convBtn.addEventListener("click", function(){
    let feet= `${box.value} meters = ${(box.value*meter).toFixed(3)} feet`
    let meters = ` ${box.value} feet = ${(box.value/meter).toFixed(3)} meters`
    lengthEl.textContent = `${feet} | ${meters}`
    let liters= `${box.value} gallons = ${(box.value*liter).toFixed(3)} liters`
    let gallons = ` ${box.value} liters = ${(box.value/liter).toFixed(3)} gallons`
    volume.textContent = `${liters} | ${gallons}`
    let kilo= `${box.value} pounds = ${(box.value*kilogram).toFixed(3)} kilo`
    let pounds = ` ${box.value} kilo = ${(box.value/kilogram).toFixed(3)} pounds`
    mass.textContent = `${kilo} | ${pounds}`
})

