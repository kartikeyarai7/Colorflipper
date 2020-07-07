let changeButton = document.querySelector(".changer");
let displayCol = document.querySelector(".col");
let fliper = document.querySelector(".fli");
let finalColor;

changeButton.addEventListener("click",function(){
    randomColorGenerator();
    document.body.style.backgroundColor = finalColor;      
    displayCol.textContent = finalColor; 
    fliper.style.color = finalColor;
});

function randomColorGenerator(){
    // let a = Math.floor(Math.random()*256);
    // let b = Math.floor(Math.random()*256);
    // let c = Math.floor(Math.random()*256);
    // finalColor = `rgb(${a}, ${b}, ${c})`

    let a = Math.floor(Math.random()*10);
    let b = Math.floor(Math.random()*10);
    let c = Math.floor(Math.random()*10);
    let d = Math.floor(Math.random()*10);
    let e = Math.floor(Math.random()*10);
    finalColor = `#F${a}${b}${c}${d}${e}`;
    
}

