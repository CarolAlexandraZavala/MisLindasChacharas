document.querySelector('#btnOrdenes').addEventListener('click', ord());

function ord(){

    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', 'productos.json', true);

    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            let datos = JSON.parse(this.responseText);
            console.log(datos)

            let res = document.querySelector('#ord');
            res.innerHTML = '';


            for (let item of datos) {
                //console.log(item.precio);
                if(item.id==1){ res.innerHTML += "<h1>"+item.nombre+"</h1><br><br><p>Precio:"+item.precio+"</p><br><p>Cantidad:"+item.cantidad+"</p><br><p>Descripción:"+item.descripción+"</p><br>"
                
            }
               
                
            }
        }
    }
}