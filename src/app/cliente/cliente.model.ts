export class Cliente {
    _id: number;
    nome: string;
    email: string;
    pws: string;
    ativo: boolean;

    validar(confpws: string) {
        let erros: string = "";

        if (this.nome == "") {
            erros += "Nome em branco. <br>";
        }
        if (this.email == "") {
            erros += "E-mail em branco. <br>";
        }
        if (this.pws == "") {
            erros += "Senha em Branco. <br>";
        } else if (this.pws != confpws) {
            erros += "Senhas diferentes. <br>";
        }

        if (erros != "")
            throw erros;

        return true
    }
}
