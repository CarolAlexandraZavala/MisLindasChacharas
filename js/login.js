const usuario = document.querySelector('#usuario');
const password = document.querySelector('#password');
const formulario = document.getElementById('form');

const users = [
    {
        usuario: 'alfredoerik@gmail.com',
        password: '18defebrero'
    },
    {
        usuario: 'otrousuario@gmail.com',
        password: 'contraseña123'
    },
    {
        usuario: 'ejemplo@gmail.com',
        password: 'secreto456'
    },
    {
        usuario: 'admin@root.com',
        password: 'root123'
    }
];
formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const usuarioTxt = usuario.value;
    const passwordTxt = password.value;
    let flag = false;

    if (usuarioTxt === 'admin@root.com' && passwordTxt === 'root123') {
        flag = true;
        window.alert('Bienvenido, Administrador');
        window.location.href = 'index_admin.html';
    } else {
        for (let i = 0; i < users.length; i++) {
            if (users[i].usuario === usuarioTxt && users[i].password === passwordTxt) {
                flag = true;
                break;
            }
        }

        if (flag) {
            window.alert('Bienvenido');
            window.location.href = 'indexUser.html';
        } else {
            window.alert('Usuario no existente');
        }
    }
});

