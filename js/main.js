
$(document).ready(function(){
    $('#cpf').mask('000.000.000-00');
    $('#cep').mask('00000-000');
    $('#telefone').mask('(00) 00000-0000')

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            endereco: {
                required: true
            },  
            cep: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira seu nome!',
            email: 'Seu email é muito importante!',
            cpf: 'Não vamos fazer compra no seu nome!',
            endereco: 'Queremos saber onde você mora!',
            cep: 'O cep faz parte!',
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })
});

