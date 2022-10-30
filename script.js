function BMI(weight,height) { 
    let weight1 = document.getElementById("weight").value
    let height1 = document.getElementById("height").value
   let result1 = weight1 / (height1*height1)
   return result1
}

console.log(BMI())

function Status(BodyMass) {  
    if(BodyMass <18.5 ){
       return "لديك نقص في الوزن"
    }else if(BodyMass<25 && BodyMass>= 18.5) { 
        return "وزنك صحي"
    } else if ( BodyMass >= 25 )
    return "لديك زيادة في الوزن"
} 
 function calculate(){
    let weight = document.getElementById("weight").value
    let height = document.getElementById("height").value
    let bmi_value = BMI(weight, height)
    let desc = Status(bmi_value)
    let box = document.getElementById('result')
    if(bmi_value<18.5){
        box.style.color = "orange"
    }else if (bmi_value<25 && bmi_value>= 18.5) {
        box.style.color = "green"

    }else if (bmi_value>= 25){
        box.style.color= "red"
    }

   if(bmi_value>180){
    box.innerText = 'inter a vaild number'
   } else{
   box.innerText = bmi_value + " == " + desc
 }
}


 function dark() {
    let back = document.getElementById("mydiv").style.backgroundColor = "black" 
    let button1 = document.getElementById("night").style.color = "black" 
    let img = document.getElementById("myimg").style.backgroundColor = "white"
 } 

