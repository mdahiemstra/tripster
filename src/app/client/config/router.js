Router.configure({
    layoutTemplate: 'default',
    waitOn: function() {

    },
    before: function() {

//        var unsecure_pages = ['user_login', 'user_logout', 'user_lost_password', 'user_reset_password'];
//
//        if (!Meteor.loggingIn() && !Meteor.user() && !_.include(unsecure_pages, this.route.name)) {
//            Router.go('user_login');
//        }
    }
});
