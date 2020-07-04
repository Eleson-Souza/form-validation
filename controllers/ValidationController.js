const FormService = require('../services/FormService');

class ValidationController {

    formOpen(req, res) {
        // Armazenando flashs.
        var emailError = req.flash('emailError');
        var pointsError = req.flash('pointsError');
        var nameError = req.flash('nameError');
        var email = req.flash('email');
        var name = req.flash('name');
        var points = req.flash('points');

        // retornando undefined caso flash esteja vazia ([]).
        emailError = (emailError == undefined || emailError.length == 0) ? undefined : emailError;
        pointsError = (pointsError == undefined || pointsError.length == 0) ? undefined : pointsError;
        nameError = (nameError == undefined || nameError.length == 0) ? undefined : nameError;

        email = (email == undefined) ? "" : email;
        name = (name == undefined) ? "" : name;
        points = (points == undefined) ? "" : points;

        res.render('index', { emailError, pointsError, nameError, email, name, points });
    }

    formSubmit(req, res) {
        var {email, nome, pontos} = req.body;
        
        var isValid = FormService.validateFields(email, nome, pontos);

        if(isValid == false) {
            req.flash("emailError", FormService.errors.emailError);
            req.flash("pointsError", FormService.errors.pointsError);
            req.flash("nameError", FormService.errors.nameError);

            req.flash('email', email);
            req.flash('name', nome);
            req.flash('points', pontos);

            res.redirect('/');
        } else {
            res.send('Formulário validado com sucesso!');
        }
    }

}

module.exports = new ValidationController();