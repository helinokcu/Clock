// id=myName
// prompt ile ismini al

let userName = prompt("Adınızı Giriniz")
let myName = document.querySelector("#myName")
myName.innerHTML = `${userName}`

// gunun saat bilgisi: ${new Date().getHours()}
// id=myClock class=clock

let clock = document.querySelector("#myClock")
let tarih = new Date();
const gunler = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]
let gun = gunler[tarih.getDay()];
let saat = tarih.getHours();
let dakika = tarih.getMinutes();
let saniye = tarih.getSeconds();

clock.innerHTML = `${gun}  ${saat} : ${dakika} : ${saniye}`


