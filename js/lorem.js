function geral() {

    const paragrafo = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
    const temp = paragrafo.split (' ');
    const palavras = [...paragrafo.split(' '),...paragrafo.split(' '), ...paragrafo.split(' '), ...paragrafo.split(' '), ...paragrafo.split(' '), ...paragrafo.split(' '), ...paragrafo.split(' '), ...paragrafo.split(' '), ...paragrafo.split(' '), ...paragrafo.split(' '), ...paragrafo.split(' '), ...paragrafo.split(' '), ...paragrafo.split(' '), ...paragrafo.split(' '), ...paragrafo.split(' '), ...paragrafo.split(' '), ...paragrafo.split(' '), ...paragrafo.split(' '), ...paragrafo.split(' '), ...paragrafo.split(' '), ...paragrafo.split(' '), ...paragrafo.split(' '), ...paragrafo.split(' '), ...paragrafo.split(' '), ...paragrafo.split(' '), ...paragrafo.split(' '), ...paragrafo.split(' '), ...paragrafo.split(' '), ...paragrafo.split(' '), ...paragrafo.split(' '), ...paragrafo.split(' ')];
    console.log(palavras.length)

    const paragrafosGerados = document.querySelector('.paragrafosGerados');
    const palavrasGeradas = document.querySelector('.palavrasGeradas');
    const erro = 'Favor inserir um NÚMERO!';
   
    
    const form = document.getElementById('formulario');
    const valor = document.getElementById('textInput')
    const campo = document.getElementById('rangeInput');
    const form2 = document.getElementById('formulario2');
    const campo2 = document.getElementById('rangeInput2');
   

    const copy1 = document.querySelector('#button1');

    function updateTextInput(val) {
        campo.value=val;
        console.log(valor)
        textRange.innerHTML = valor;
      }

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const numero = parseInt(campo.value);
            criaParagrafo(numero);
        }    
    );

    function criaParagrafo(val) {
        for (i = 0; i < val; i++) {
            paragrafosGerados.innerHTML += `<p>${paragrafo} </p>`
        }
    };



    form2.addEventListener('submit', function (e) {
        e.preventDefault();
        const numero = parseInt(campo2.value);
        console.log(numero)
            criaPalavra(numero);
        }    
    );

    function criaPalavra(val) {
        for (i = 0; i < val; i++) {
            const index = palavras[i]
            palavrasGeradas.innerHTML += `${index} `
        }
    };



}

geral();
