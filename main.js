// Funtion to play the respective sound of the key
function play(idElementAudio){
    const elementAudio = document.querySelector(idElementAudio);
    console.log(elementAudio.localName);
    if(elementAudio != null && elementAudio.localName === "audio"){
        elementAudio.play();
    }else{
        console.log("Element not found or invalid selector!")
    }
}

// List of keys on Alura MI
const keysList = document.querySelectorAll('.tecla');

for(let cont =0 ; cont < keysList.length ; cont++ ){
    
    const key = keysList[cont];
    const classOfKey = key.classList[1];

    // Creating the audio I dinamic.
    const idAudio = `#som_${classOfKey}`;

    // function play audio when key is clicked
    key.onclick = function(){
        play(idAudio);
    }
    
    key.onkeydown = function(event){
        if(event.code === "Space" || event.code === "Enter"){
            key.classList.add('ativa');
        }
    }   
    
    key.onkeyup = function(event){
        if(event.code === "Space" || event.code === "Enter"){
            key.classList.remove('ativa');      
        }
    }
}
