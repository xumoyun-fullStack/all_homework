let d = new Date()

let date = d.getDate()
let month = d.getMonth()
let weekDay = d.getDay()
let hour = d.getHours()
let min = d.getMinutes()


let Month
switch(month){
    case 0: Month = "Yanvar"; break;
    case 1: Month = "Fevral"; break;
    case 2: Month = "Mart"; break;
    case 3: Month = "Aprel"; break;
    case 4: Month = "May"; break;
    case 5: Month = "Iyun"; break;
    case 6: Month = "Iyul"; break;
    case 7: Month = "Avgust"; break;
    case 8: Month = "Sentabr"; break;
    case 9: Month = "Oktabr"; break;
    case 10: Month = "Noyabr"; break;
    case 11: Month = "Dekabr"; break;

    default: Month = "bunday oy yo`q"
}

let Week
switch(weekDay){
    case 1: Week = "Dushanba"; break;
    case 2: Week = "Seshanba"; break;
    case 3: Week = "Chorshanba"; break;
    case 4: Week = "Payshanba"; break;
    case 5: Week = "Juma"; break;
    case 6: Week = "Shanba"; break;
    case 7: Week = "Yakshanba"; break;

}
alert(`Bugun ${Week}, ${date}-${Month} soat ${hour}:${min}`)

