
let list = ["Abd El Wahed Boutamine", 
"ABDALLAH HUSAM HIFZI ABU-BALLAN",
"Abdrohman Mohamed  Alfaihan",
"ABDUL RAHIEM AMMAR ALAMIR",
"Abdelrahman Tarek Omran Gad",
"MOUSTAFA ABD ALMAJEED",
"KHALID IMAD KANDAKJI",
"OMAR KHALED" ,
"Mostafa Hussam Askar",
"Ali Ameen" ,
"Mustafa Qusay",
"HASHEM JEHAD" ,
"OMAR QAIS" ,
"Abdelrahman Mohamed Shaaban",
"Mohammad Najeeb Masoud Taiseer Shenar",
"MOHAMED ISLAM MOHAMED MOHAMED",
"Mahmoud Elsayed Mahmoud Amin",
"ANAS AHMED ALNABLSI",
"Yousef Mohamed Badawi Elhosseini",
"OMAR ABDELRAHMAN MOHAMED ABOU BAKR ALY",
"Faraj Ahmed CHAYEB",
"MOHAMMAD JALAL AHMED",
"SULEIMAN AMJAD" ,
"AHMED MOHAMED"]

let getName = () => rando(list).value

export default () => {
  let btn = document.querySelector(".randomizer-btn")
  let box = document.querySelector(".randomizer-text")
  btn.addEventListener("click", e => {
    for(let i = 0; i <= 100; i ++) {
      setTimeout(() => {
        box.textContent = rando(list).value
      }, i*50);
    }
  })
} 