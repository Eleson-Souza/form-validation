class FormService {

    constructor() {
        this.errors = {
            emailError: undefined,
            pointsError: undefined,
            nameError: undefined
        };
    }

    validateFields(email, nome, pontos) {
        // zerando conteúdo dos atributos de erros para uma nova validação.
        this.errors.emailError = undefined;
        this.errors.pointsError = undefined;
        this.errors.nameError = undefined;

        // Validações
        // email vazio
        if(!email) {
            this.errors.emailError = 'O e-mail não pode ser vazio.';
        }

        // pontos vazio
        if(!pontos) {
            this.errors.pointsError = "O campo pontos não pode ser vazio.";
        } else if(pontos < 20) { // pontos inferior a 20
            this.errors.pointsError = "Você não pode ter menos de 20 pontos.";
        }

        // nome vazio
        if(!nome) {
            this.errors.nameError = "O nome não pode ser vazio.";
        } else if(nome.length < 4) { // nome pequeno
            this.errors.nameError = "Este nome é muito pequeno.";
        }

        // verificando e retornando se houve algum erro no preenchimento do formulário.
        if(this.errors.emailError != undefined || 
            this.errors.pointsError != undefined ||
            this.errors.nameError != undefined) {

            return false;

        } else {
            return true;
        }
    }

}

module.exports = new FormService;