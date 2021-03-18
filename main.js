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
    if (data.status==200) {
        result = data.result;
        var respuesta = `<h2>document_tone</h2><p>${JSON.stringify(result.document_tone)}</p> <h2>sentences_tone</h2><p>${JSON.stringify(result.sentences_tone)}</p>`;
        console.log(respuesta);
        document.querySelector('#respuesta').insertAdjacentHTML('beforeend', respuesta);
    } else {
        alert('Error ' + reponse.status + ': ' + reponse.statusText); //error 
    }
}