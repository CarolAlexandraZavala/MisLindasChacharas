document.querySelector('#resp').addEventListener('click', cel());

function cel(){

    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', 'resPanda.json', true);

    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            let datos = JSON.parse(this.responseText);
            console.log(datos)

            let res = document.querySelector('#rese');
            res.innerHTML = '';


            for (let item of datos) {
                //console.log(item.precio);
                res.innerHTML += "<td>"+item.nombre+ "</td><td>"+item.descripción+"</td><td>"+item.calificacion+"</td>"
                
            
               
                
            }
        }
    }
}