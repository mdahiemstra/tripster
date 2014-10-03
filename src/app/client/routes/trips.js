var CurrentTripController = RouteController.extend({
    template: 'current_trip'
});

Router.map(function () {
    this.route('current_trip', {
        path :  '/trips/current',
        controller :  CurrentTripController
    });
});
