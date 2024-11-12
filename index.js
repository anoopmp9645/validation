document.getElementById("myForm").addEventListener("submit", function(event){
     let name = document.getElementById("name").value;
     let email = document.getElementById("email").value;


     if (name === ""){
        alert("name is required!");

        event.preventDefault();
     }


     if (email === ""){
        alert("email is required!");


        event.preventDefault();
     }

     
});

