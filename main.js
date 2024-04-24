// Funtion to play the respective sound of the key
function play(idElementAudio){
   document.querySelector(idElementAudio).play();
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
    
    key.onkeydown = function(){
        key.classList.add('ativa');
    }
    
    key.onkeyup = function(){
        key.classList.remove('ativa');      
    }
}
