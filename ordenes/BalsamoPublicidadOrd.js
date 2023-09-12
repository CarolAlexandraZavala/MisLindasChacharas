document.querySelector('#resp').addEventListener('click', hua());

function balp(){

    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', 'productos.json', true);

    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            let datos = JSON.parse(this.responseText);
            console.log(datos)

            let res = document.querySelector('#hua');
            res.innerHTML = '';


            for (let item of datos) {
                //console.log(item.precio);
                if(item.id==5){ res.innerHTML += "<td><a><img src='img/BalsamoPublicidads.jpeg' width='100' height='100'/></a></td><td>"+item.nombre+"</td><td>"+item.precio+
                "</td><td>1</td><td>Llegó el 07 de septiembre</td><td><a href='#'>Ver</a></td>"
            }
               
                
            }
        }
    }
}