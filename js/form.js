
//class contato

class Contato {
    constructor(nome, email, telefone, tipoContato, mensagem) {
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.tipoContato = tipoContato;
        this.mensagem = mensagem;
    }
}

function Post(form) {
    if (!form) return null;

    let data = new Contato(
        form.elements.namedItem("nome").value,
        form.elements.namedItem("email").value,
        form.elements.namedItem("telefone").value,
        form.elements.namedItem("tipoContato").value,
        form.elements.namedItem("mensagem").value
    );

    return data;
}

function Enviar(event) {
    if (event) {
        event.preventDefault();
    }

    const form = document.getElementById("formContato");

    if (!form) {
        alert("Formulário não encontrado.");
        return;
    }

    var nome = form.elements.namedItem("nome").value;

    if (nome !== "") {
        const data = Post(form);
        alert("Obrigado sr(a) " + nome + " os seus dados foram encaminhados com sucesso");
        console.log(data);
        form.reset();
    }
}
