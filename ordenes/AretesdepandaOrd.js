document.querySelector('#tec').addEventListener('click', cel());

function pan(){

    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', 'productos.json', true);

    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            let datos = JSON.parse(this.responseText);
            console.log(datos)

            let res = document.querySelector('#tit');
            res.innerHTML = '';


            for (let item of datos) {
                //console.log(item.precio);
                if(item.id==3){ res.innerHTML += "<h1>"+item.nombre+"</h1><br><br>Precio:"+item.precio+
                "<br><br>Descripcion:"+item.descripción+
                "<br><br>Cantidad:"+item.cantidad
            }
               
                
            }
        }
    }
}