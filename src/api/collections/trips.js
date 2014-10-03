App.Collections.Trips = new Meteor.Collection('trips', {
    schema: new SimpleSchema({
        name: {
            type: String
        },
        created_at: {
            type: Date,
            defaultValue: new Date()
        },
        updated_at: {
            type: Date,
            defaultValue: new Date()
        }
    })
});

App.Collections.Trips.allow({
    insert : function () {
        return true;
    },
    update : function () {
        return false;
    },
    remove : function () {
        return false;
    }
});

//App.Collections.Trips.insert({name: 'foobar'});
