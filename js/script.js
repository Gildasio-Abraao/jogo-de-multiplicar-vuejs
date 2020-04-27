let numero = new Vue({
    el:'#user',  
    data:{
        n1: Math.floor(Math.random()*15),
        n2: Math.floor(Math.random()*11),
        n3: undefined,
        n4: 0,
},
    methods: {
        checar: ()=>{
            let n1 = numero.n1;
            let n2 = numero.n2;
            let n3 = numero.n3;
            let n4 = numero.n4;

 //pontos

            if(n3 == n1*n2) {
                numero.n1 = Math.floor(Math.random()*15);
                numero.n2 = Math.floor(Math.random()*11);
                numero.n3 = undefined;
                numero.n4++;
            }
            else {
                numero.n4--;
                numero.n1 = Math.floor(Math.random()*15);
                numero.n2 = Math.floor(Math.random()*11);
                numero.n3 = undefined;
            }
            let usuario = document.getElementById('user');
            let vitoria = document.getElementById('victory');
            let musica = document.getElementById('musica');
            if(numero.n4 >= 10) {
                vitoria.style = 'display: block;';
                usuario.style = 'display: none;';
                musica.setAttribute('src', 'Michael Jackson - Billie Jean (Official Video).mp3');
        }
            else{
                vitoria.style = 'display: none;';
                usuario.style = 'display: block;';
            }
        }
    }
})  
    //CONTAGEM REGRESSIVA
function reloadPage() {
    let n = 40;
    let ponto = parseInt(document.getElementById('ponto'));
    let l = document.getElementById('contagem');
    let contagem = setInterval(function(){
    l.innerHTML = n;
    if(n == 0){
        window.location.href = window.location.href
    }
    let negativo = n--;
    if(numero.n4 >= 10) {
    let negativo = n++;
    }
}, 1000);
}
