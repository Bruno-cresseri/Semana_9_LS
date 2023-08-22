document.getElementById("buttonText").addEventListener("click", function(){
    const textInput = document.getElementById("inputText").value;
        if (localStorage.getItem("array")){
            //alert("si");
            let a = JSON.parse(localStorage.getItem("array"));
            a.push(" "+textInput);
            localStorage.setItem("array", JSON.stringify(a));
        } else {
            //alert("no");
            let array = [];
            array.push(textInput);
            localStorage.setItem("array", JSON.stringify(array));
        }
        document.getElementById("inputText").value = null;
    }
);