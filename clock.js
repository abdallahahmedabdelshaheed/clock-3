


let dt =new Date()

let a=0

if(dt.getHours()>12){
     a = dt.getHours() -12
}
else{ 
    a = dt.getHours()
}

let b = dt.getMinutes()
let c = dt.getSeconds()

let i =dt.getSeconds()*6
document.getElementById("seconds").style.transform="translate(-50%, -50%) rotate("+ i +"deg)"
let x1 =setInterval(

function (){
    document.getElementById("seconds").style.transform="translate(-50%, -50%) rotate("+ i +"deg)"
    i+=0.3
},
    1*50
)




let j=((b+(c/60))*6)
    document.getElementById("minutes").style.transform="translate(-50%, -50%) rotate("+ j +"deg)"
let x2 =setInterval(

function (){
    document.getElementById("minutes").style.transform="translate(-50%, -50%) rotate("+ j +"deg)"
    j+=0.01
},
1*100
)


let k =((a+(c/3600)+(b/60))*30)

    document.getElementById("hours").style.transform="translate(-50%, -50%) rotate("+ k +"deg)"

    let x3 =setInterval(
    function (){
    document.getElementById("hours").style.transform="translate(-50%, -50%) rotate("+ k +"deg)"
    k+=0.01
    },
    12*100
    )

