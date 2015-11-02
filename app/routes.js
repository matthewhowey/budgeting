module.exports = {
  bind : function (app) {

    app.get('/', function (req, res) {
      res.render('index');
    });

    app.get('/examples/template-data', function (req, res) {
      res.render('examples/template-data', { 'name' : 'Foo' });
    });

    // add your routes here
    app.post('/alpha06/about-benefit', function (req, res) {
    	if (req.body.benefit === 'Yes') {
    		res.redirect('/alpha06/partner')
    	} else {
    		res.redirect('/alpha06/overview')
    	}
    })

    app.post('/alpha06/partner', function (req, res) {
    	if (req.body.partner === 'Yes') {
    		res.redirect('/alpha06/partner-yes')
    	} else {
    		res.redirect('/alpha06/partner-no')
    	}
    })

    app.post('/alpha06/money-you-owe', function (req, res) {
    	if (req.body.partner === 'Yes') {
    		res.redirect('/alpha06/debt-repayment')
    	} else {
    		res.redirect('/alpha06/personal-details')
    	}
    })

    //version07
    app.post('/alpha07/about-benefit', function (req, res) {
        if (req.body.benefit === 'Yes') {
            res.redirect('/alpha07/partner')
        } else {
            res.redirect('/alpha07/overview')
        }
    })

    app.post('/alpha07/partner', function (req, res) {
        if (req.body.partner === 'Yes') {
            res.redirect('/alpha07/partner-yes')
        } else {
            res.redirect('/alpha07/partner-no')
        }
    })

    app.post('/alpha07/money-you-owe', function (req, res) {
        if (req.body.partner === 'Yes') {
            res.redirect('/alpha07/debt-repayment')
        } else {
            res.redirect('/alpha07/personal-details')
        }
    })


  }
};
