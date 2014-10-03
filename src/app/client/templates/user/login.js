Template.login.events({
    'submit .login-form': function(event) {
        event.preventDefault();

        var connection = DDP.connect('http://localhost:3333');
        var username = $('.login-username').val();
        var password = $('.login-password').val();


        DDP.loginWithPassword(connection, {username: username}, password, function (error) {
            if (!error) {
                console.log("Logged in!");

            } else {
                console.log(error);
            }
        });

    }
});
