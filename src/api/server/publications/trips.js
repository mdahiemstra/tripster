Meteor.publish('trips', function() {
    return App.Collections.Trips.find();
});
