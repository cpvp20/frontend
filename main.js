let form = document.querySelector('#form');
let url = 'https://backend-lean-turtle-yt.mybluemix.net/tone';

form.addEventListener("submit", function (e) {
    e.preventDefault(); // para que no te recargue la página cuando sometes el formulario

    getResponse(); //Manda la información al back-end  
});

async function getResponse() {
    let options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            texto: form.texto.value
        })
    };
    response = await fetch(url, options);
    data = await response.json();
    if (data) {
        console.log(data);
        document.querySelector('#respuesta').innerHTML = "sucess";
    } else {
        alert('Error ' + request.status + ': ' + request.responseText); //error 
    }
}