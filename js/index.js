document.getElementById("buttonText").addEventListener("click", function(){
    const textinput = document.getElementById("inputText").value;
    localStorage.setItem("valor", textinput);
})