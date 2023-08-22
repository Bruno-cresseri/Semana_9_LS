document.getElementById("buttonText").addEventListener("click", function(){
    const textInput = document.getElementById("inputText").value;
    localStorage.setItem("valor", textInput);
})