var LoginController = RouteController.extend({
    template: 'login'
});

Router.map(function () {
    this.route('user_login', {
        path :  '/user/login',
        controller :  LoginController
    });
});
