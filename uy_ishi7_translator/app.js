let btn = document.querySelector("button")
let pText = document.querySelector(".translating")
let text, t_text = ""
let changer = document.querySelector(".changer")
let lan1 = document.querySelector(".lan_1")
let lan2 = document.querySelector(".lan_2")

let check = true
    lan1.innerText = "Lotin"
    lan2.innerText = "Krill"

changer.onclick = function(){
   pText.innerText = ""
   document.querySelector("textarea").value = ""
    if(check){
        check = false
        lan2.innerText = "Lotin"
        lan1.innerText = "Krill"
    }else{
        check = true
        lan1.innerText = "Lotin"
        lan2.innerText = "Krill"
    }
    console.log(check)
}
btn.addEventListener("click", function(){
    
    text = document.querySelector("textarea").value.split("")
    console.log(check)
    t_text = ""
    if(check){
        
        for(let i=0; i<text.length; i++){
            if(text[i] !== "s" && text[i+1] !== "h" || text[i] !== "S" && text[i+1] !== "h" || text[i] !== "c" && text[i+1] !== "h" || text[i] !== "C" && text[i+1] !== "h" ){
                switch(text[i]){
                    case 'a': text[i] = "а"; break;
                    case 'b': text[i] = "б"; break;
                    case 'd': text[i] = "д"; break;
                    case 'e': text[i] = "е"; break;
                    case 'f': text[i] = "ф"; break;
                    case 'g': text[i] = "г"; break;
                    case 'h': text[i] = "х"; break;
                    case 'i': text[i] = "и"; break;
                    case 'j': text[i] = "ж"; break;
                    case 'k': text[i] = "к"; break;
                    case 'l': text[i] = "л"; break;
                    case 'm': text[i] = "м"; break;
                    case 'n': text[i] = "н"; break;
                    case 'o': text[i] = "о"; break;
                    case 'p': text[i] = "п"; break;
                    case 'q': text[i] = "к"; break;
                    case 'r': text[i] = "р"; break;
                    case 's': text[i] = "с"; break;
                    case 't': text[i] = "т"; break;
                    case 'u': text[i] = "у"; break;
                    case 'v': text[i] = "в"; break;
                    case 'w': text[i] = "в"; break;
                    case 'x': text[i] = "х"; break;
                    case 'y': text[i] = "й"; break;
                    case 'z': text[i] = "з"; break;
                    case "'": text[i] = "ь"; break;
                }
                
            }else{
                if(text[i] === "s" && text[i+1] === "h" ) {text[i] = "ш"; text[i+1] = ""}
                if(text[i] === "S" && text[i+1] === "h" ) {text[i] = "Ш"; text[i+1] = ""}
                if(text[i] === "c" && text[i+1] === "h" ) {text[i] = "ч"; text[i+1] = ""}
                if(text[i] === "C" && text[i+1] === "h" ) {text[i] = "Ч"; text[i+1] = ""}
            }
         
        }
    }else{
       console.log("else")
        for(let i=0; i<text.length; i++){
          
                console.log("if else")
                switch(text[i]){
                    case 'а': text[i] = "a"; break;
                    case 'я': text[i] = "ya"; break;
                    case 'б': text[i] = "b"; break;
                    case 'с': text[i] = "s"; break;
                    case 'д': text[i] = "d"; break;
                    case 'е': text[i] = "e"; break;
                    case 'ф': text[i] = "f"; break;
                    case 'г': text[i] = "g"; break;
                    case 'х': text[i] = "h"; break;
                    case 'и': text[i] = "i"; break;
                    case 'ж': text[i] = "j"; break;
                    case 'ь': text[i] = "'"; break;
                    case 'л': text[i] = "l"; break;
                    case 'м': text[i] = "m"; break;
                    case 'н': text[i] = "n"; break;
                    case 'о': text[i] = "o"; break;
                    case 'п': text[i] = "p"; break;
                    case 'к': text[i] = "q"; break;
                    case 'р': text[i] = "r"; break;
                    case 'т': text[i] = "t"; break;
                    case 'у': text[i] = "u"; break;
                    case 'в': text[i] = "v"; break;
                    case 'й': text[i] = "y"; break;
                    case 'з': text[i] = "z"; break;
                    case 'ы': text[i] = "i"; break;
                    case 'ш': text[i] = "sh";break;
                    case 'ч': text[i] = "ch"; break;
                   
                }
                
           
         
        }
    }
    

    for(let i=0; i<text.length; i++){
        t_text += text[i]
    }
    console.log(t_text)
    pText.innerText = t_text


})


