let result = confirm("biror son o`yladim uni topishga tayyormisiz")

let trueAnswer = 5
if(result){
    let answer 
    if(answer){
        while(true){
            answer = parseInt(prompt("taxminingiz : "))
        
              if(answer === trueAnswer){
                  alert("topdingiz")
                  break;
              }else if(answer > trueAnswer){
                  confirm("Men o`ylagan son bundan kichik!")
                  if(confirm == false)
              }else{
                  confirm("Men o`ylagan son bundan katta!")
              }
          }
    }
}