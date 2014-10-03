var DashboardController = RouteController.extend({
    template: 'dashboard'
});

Router.map(function () {
    this.route('dashboard', {
        path :  '/',
        controller :  DashboardController
    });
});
