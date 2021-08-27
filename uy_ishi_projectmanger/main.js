const texts = ["interesting ", "useful ", "beautiful "]
//language changer

let lang1 = document.querySelector(".eng")
document.querySelector(".cur_lang").innerHTML = lang1.innerHTML
lang1.addEventListener("click", function(e){
    document.querySelector(".cur_lang").innerHTML = lang1.innerHTML
    document.querySelector(".list1").innerHTML = "Home"
    document.querySelector(".list2").innerHTML = "About us"
    document.querySelector(".list3").innerHTML = "Portfolio"
    document.querySelector(".list4").innerHTML = "News"
})
let lang2 = document.querySelector(".uzb")
lang2.addEventListener("click", function(e){
    document.querySelector(".list1").innerHTML = "Uy"
    document.querySelector(".list2").innerHTML = "Biz haqimizda"
    document.querySelector(".list3").innerHTML = "Portfolio"
    document.querySelector(".list4").innerHTML = "Yangiliklar"
    document.querySelector(".cur_lang").innerHTML = lang2.innerHTML
})


//Selectors

let cursor = document.querySelector(".cursor")


let i = 0
let j = 0
let currentText = []
let letter = ''
let textDisplay = document.querySelector(".typing")
let isDeleting = false
let isEnd = false


window.addEventListener("mousemove", cursorMove)

//Functions

function cursorMove(e){
    let pageX = e.pageX
    let pageY = e.pageY
    cursor.style.top = `${pageY}px`
    cursor.style.left =  `${pageX}px`
}

function loop(){
    isEnd = false
    textDisplay.innerHTML = currentText.join('')

    if(i < texts.length){
        if(!isDeleting && j <= texts[i].length){
            currentText.push(texts[i][j])
            j++
            
        }

        if(isDeleting && j <= texts[i].length){
            currentText.pop(texts[i][j])
            j--
            
        }

        if(j === texts[i].length){
            isEnd = true
            isDeleting = true
             
        }

        if(isDeleting && j === 0){
            currentText = []
            isDeleting = false
            i++
        }
        if(i == texts.length){
            i = 0
        }
    }

    const speedUp = Math.random() * (80 -50) + 50
    const normalSpeed = Math.random() * (100 -50) + 50
    const time = isEnd ? 2000 : isDeleting ? speedUp:normalSpeed
    setTimeout(loop, time)
    
}
loop()


document.querySelector(".cur_lang").addEventListener("mouseenter", function(){
    document.querySelector(".lang").style.display = "block"
    setInterval(400)
})

document.querySelector(".lang").addEventListener("mouseup", function(){
    console.log("ishladi")
    document.querySelector(".lang").style.display = "none"
})
