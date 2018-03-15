exports.login = function *login(){
    var email = req.body.email;
    var password = req.body.password;

    try
    { 
        yield security.rateLimitRequest( 'reset', req );

        var account = yield db.Account.find({email: email, password: password});
        account.statistics = yield account.getAccountStatistics(account);

        yield account.incrementAccountLoginCount(account);

        this.body = account;
    }
    catch( err ) { 
        return res.status( 400 ).send( err );
    }
}
