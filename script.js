

//let username = "Антон";

//alert("Привет " + username)

function print_contact() {

alert ("skype: helper \n telegram \n tel: 8 913 938 00 19")

}

function gift_contact() {

    alert ("Вы получили подарок! \n Скидака 25%")

}

//модальное окно

const modalGift = document.getElementById("giftModal") 
const openBtnGift = document.getElementById("giftBtn")
const closeBtnGift = document.getElementById("giftClose")

// 

openBtnGift.onclick = function () {
    modalGift.style.display = "block";
}

closeBtnGift.onclick = function () {
    modalGift.style.display = "none";
}

modalGift.onclick = function (event) {
    if (event.target === modalGift);
        modalGift.style.display = "none";
}

const modalHelper = document.getElementById("helperModal") 
const openBtnHelper = document.getElementById("tpBtn")
const closeBtnHelper = document.getElementById("helperClose")

// 

openBtnHelper.onclick = function () {
    modalHelper.style.display = "block";
}

closeBtnHelper.onclick = function () {
    modalHelper.style.display = "none";
}

modalHelper.onclick = function (event) {
    if (event.target === modalHelper);
        modalHelper.style.display = "none";
}

let siteRating = 0;

function star(starNumber) {

    siteRating = starNumber;

    starNumber = starNumber - 1;

    // console.log(starNumber)

    let ids = ["star-1", "star-2", "star-3", "star-4", "star-5"];

    // console.log(ids[starNumber])

    let star = document.getElementById(ids[starNumber]);

    // console.log(star)

    if (star.src.includes("images/star_2.png")) {
         for (let i = 0; i <= starNumber; i++) {
             let id = ids[i]
             document.getElementById(id).src = "images/star_1.png"

         }

    }

    else {

        for (let i = 0; i < ids.length; i++) {
            if (i > starNumber){
            let id = ids[i]
            document.getElementById(id).src = "images/star_2.png"
            }
        }
    }

}

function resetRating() {

    // console.log("Сбросить")

    siteRating = 0;

    let ids = ["star-1", "star-2", "star-3", "star-4", "star-5"];
    for (let i = 0; i < ids.length; i++) {
        let id = ids[i];
        document.getElementById(id).src = "images/star_2.png"
    }
}

const sendRatingBtn = document.getElementById("sendRating");

sendRatingBtn.addEventListener("click", function () {

    // console.log("Отправить рейтинг") 

    let text;

    switch(siteRating) {
        case 1:
        case 2:
        case 3:
            text = "Спасибо за ваш отзыв!"
            break;
        case 4:
            text = "Спасибо за хороший бал!"
            break;
        case 5:
            text = "Спасибо за высокую оценку!"
            break;
        default:
            text = "Пожалуйста, поставьте оценку от 1 до 5"
            break;
    }

    console.log(text);

    document.getElementById("ratingText").innerText = text
    

});

function rand_tshirt() {

    const arr = ["images/tshirt-3.jpg","images/tshirt-2.jpg","images/tshirt-1.jpg"]
    console.log(arr)
}