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

    //beta01
    app.post('/beta01/about-benefit', function (req, res) {
        if (req.body.benefit === 'Yes') {
            res.redirect('/beta01/partner')
        } else {
            res.redirect('/beta01/overview')
        }
    })

    app.post('/beta01/partner', function (req, res) {
        if (req.body.partner === 'Yes') {
            res.redirect('/beta01/partner-yes')
        } else {
            res.redirect('/beta01/partner-no')
        }
    })

    app.post('/beta01/money-you-owe', function (req, res) {
        if (req.body.partner === 'Yes') {
            res.redirect('/beta01/debt-repayment')
        } else {
            res.redirect('/beta01/personal-details')
        }
    })

    app.post('/beta01/children', function (req, res) {
        if (req.body.children === 'Yes') {
            res.redirect('/beta01/loan-amount-child')
        } else {
            res.redirect('/beta01/loan-amount-partner')
        }
    })

    app.post('/beta01/children-no-partner', function (req, res) {
        if (req.body.children === 'Yes') {
            res.redirect('/beta01/loan-amount-child')
        } else {
            res.redirect('/beta01/loan-amount-single')
        }
    })


//beta02
   app.post('/beta02/about-benefit', function (req, res) {
        if (req.body.benefit === 'Yes') {
            res.redirect('/beta02/partner')
        } else {
            res.redirect('/beta02/overview')
        }
    })

    app.post('/beta02/partner', function (req, res) {
        if (req.body.partner === 'Yes') {
            res.redirect('/beta02/partner-yes')
        } else {
            res.redirect('/beta02/partner-no')
        }
    })

    app.post('/beta02/money-you-owe', function (req, res) {
        if (req.body.partner === 'Yes') {
            res.redirect('/beta02/debt-repayment')
        } else {
            res.redirect('/beta02/personal-details')
        }
    })

    app.post('/beta02/children', function (req, res) {
        if (req.body.children === 'Yes') {
            res.redirect('/beta02/loan-amount-child')
        } else {
            res.redirect('/beta02/loan-amount-partner')
        }
    })

    app.post('/beta02/children-no-partner', function (req, res) {
        if (req.body.children === 'Yes') {
            res.redirect('/beta02/loan-amount-child')
        } else {
            res.redirect('/beta02/loan-amount-single')
        }
    })

    //beta03

 app.post('/beta03/about-benefit', function (req, res) {
        if (req.body.benefit === 'Yes') {
            res.redirect('/beta03/partner')
        } else {
            res.redirect('/beta03/overview')
        }
    })

    app.post('/beta03/partner', function (req, res) {
        if (req.body.partner === 'Yes') {
            res.redirect('/beta03/partner-yes')
        } else {
            res.redirect('/beta03/partner-no')
        }
    })

    app.post('/beta03/debt-repayments-partner', function (req, res) {
        if (req.body.partner === 'Yes') {
            res.redirect('/beta03/debt-repayment')
        } else {
            res.redirect('/beta03/personal-details')
        }
    })

    app.post('/beta03/children', function (req, res) {
        if (req.body.children === 'Yes') {
            res.redirect('/beta03/loan-amount-child')
        } else {
            res.redirect('/beta03/loan-amount-partner')
        }
    })

    app.post('/beta03/children-no-partner', function (req, res) {
        if (req.body.children === 'Yes') {
            res.redirect('/beta03/loan-amount-child-single')
        } else {
            res.redirect('/beta03/loan-amount-single')
        }
    })


//beta04

 app.post('/beta04/less-than-100', function (req, res) {
        if (req.body.lt100 === 'No') {
            res.redirect('/beta04/about-benefit')
        } else {
            res.redirect('/beta04/about-benefit')
        }
    })

 app.post('/beta04/about-benefit', function (req, res) {
        if (req.body.benefit === 'Yes') {
            res.redirect('/beta04/partner')
        } else {
            res.redirect('/beta04/overview')
        }
    })

    app.post('/beta04/partner', function (req, res) {
        if (req.body.partner === 'Yes') {
            res.redirect('/beta04/partner-yes')
        } else {
            res.redirect('/beta04/partner-no')
        }
    })

    app.post('/beta04/debt-repayments-partner', function (req, res) {
        if (req.body.partner === 'Yes') {
            res.redirect('/beta04/debt-repayment')
        } else {
            res.redirect('/beta04/personal-details')
        }
    })

    app.post('/beta04/children', function (req, res) {
        if (req.body.children === 'Yes') {
            res.redirect('/beta04/loan-amount-child')
        } else {
            res.redirect('/beta04/loan-amount-partner')
        }
    })

    app.post('/beta04/children-no-partner', function (req, res) {
        if (req.body.children === 'Yes') {
            res.redirect('/beta04/loan-amount-child-single')
        } else {
            res.redirect('/beta04/loan-amount-single')
        }
    })

    //beta05
    app.post('/beta05/less-than-100', function (req, res) {
        if (req.body.lt100 === 'No') {
            res.redirect('/beta05/about-benefit')
        } else {
            res.redirect('/beta05/about-benefit')
        }
    })

 app.post('/beta05/about-benefit', function (req, res) {
        if (req.body.benefit === 'Yes') {
            res.redirect('/beta05/partner')
        } else {
            res.redirect('/beta05/overview')
        }
    })

    app.post('/beta05/partner', function (req, res) {
        if (req.body.partner === 'Yes') {
            res.redirect('/beta0/5partner-yes')
        } else {
            res.redirect('/beta05/partner-no')
        }
    })

    app.post('/beta05/debt-repayments-partner', function (req, res) {
        if (req.body.partner === 'Yes') {
            res.redirect('/beta05/debt-repayment')
        } else {
            res.redirect('/beta05/personal-details')
        }
    })

    app.post('/beta05/children', function (req, res) {
        if (req.body.children === 'Yes') {
            res.redirect('/beta05/loan-amount-child')
        } else {
            res.redirect('/beta05/loan-amount-partner')
        }
    })

    app.post('/beta05/children-no-partner', function (req, res) {
        if (req.body.children === 'Yes') {
            res.redirect('/beta05/loan-amount-child-single')
        } else {
            res.redirect('/beta05/loan-amount-single')
        }
    })

    //beta05_validation
    app.post('/beta05_validation/less-than-100', function (req, res) {
        if (req.body.lt100 === 'No') {
            res.redirect('/beta05_validation/about-benefit')
        } else {
            res.redirect('/beta05_validation/about-benefit')
        }
    })

 app.post('/beta05_validation/about-benefit', function (req, res) {
        if (req.body.benefit === 'Yes') {
            res.redirect('/beta05_validation/partner')
        } else {
            res.redirect('/beta05_validation/overview')
        }
    })

    app.post('/beta05_validation/partner', function (req, res) {
        if (req.body.partner === 'Yes') {
            res.redirect('/beta05_validation/partner-yes')
        } else {
            res.redirect('/beta05_validation/partner-no')
        }
    })

    app.post('/beta05_validation/debt-repayments-partner', function (req, res) {
        if (req.body.partner === 'Yes') {
            res.redirect('/beta05_validation/debt-repayment')
        } else {
            res.redirect('/beta05_validation/personal-details')
        }
    })

    app.post('/beta05_validation/children', function (req, res) {
        if (req.body.children === 'Yes') {
            res.redirect('/beta05_validation/loan-amount-child')
        } else {
            res.redirect('/beta05_validation/loan-amount-partner')
        }
    })

    app.post('/beta05_validation/children-no-partner', function (req, res) {
        if (req.body.children === 'Yes') {
            res.redirect('/beta05_validation/loan-amount-child-single')
        } else {
            res.redirect('/beta05_validation/loan-amount-single')
        }
    })

    //eligibilityV1

app.post('/eligibilityV1/less-than-100', function (req, res) {
        if (req.body.lt100 === 'No') {
            res.redirect('/eligibilityV1/about-benefit')
        } else {
            res.redirect('/eligibilityV1/about-benefit')
        }
    })

 app.post('/eligibilityV1/about-benefit', function (req, res) {
        if (req.body.benefit === 'Yes') {
            res.redirect('/eligibilityV1/partner')
        } else {
            res.redirect('/eligibilityV1/overview')
        }
    })

    app.post('/eligibilityV1/partner', function (req, res) {
        if (req.body.partner === 'Yes') {
            res.redirect('/eligibilityV1/partner-yes')
        } else {
            res.redirect('/eligibilityV1/partner-no')
        }
    })

    app.post('/eligibilityV1/debt-repayments-partner', function (req, res) {
        if (req.body.partner === 'Yes') {
            res.redirect('/eligibilityV1/debt-repayment')
        } else {
            res.redirect('/eligibilityV1/personal-details')
        }
    })

    app.post('/eligibilityV1/children', function (req, res) {
        if (req.body.children === 'Yes') {
            res.redirect('/eligibilityV1/loan-amount-child')
        } else {
            res.redirect('/eligibilityV1/loan-amount-partner')
        }
    })

    app.post('/eligibilityV1/children-no-partner', function (req, res) {
        if (req.body.children === 'Yes') {
            res.redirect('/eligibilityV1/loan-amount-child-single')
        } else {
            res.redirect('/eligibilityV1/loan-amount-single')
        }
    })

    //eligibilityV2
    app.post('/eligibilityV2/less-than-100', function (req, res) {
        if (req.body.lt100 === 'No') {
            res.redirect('/eligibilityV2/about-benefit')
        } else {
            res.redirect('/eligibilityV2/about-benefit')
        }
    })

 app.post('/eligibilityV2/about-benefit', function (req, res) {
        if (req.body.benefit === 'Yes') {
            res.redirect('/eligibilityV2/partner')
        } else {
            res.redirect('/eligibilityV2/overview')
        }
    })

    app.post('/eligibilityV2/partner', function (req, res) {
        if (req.body.partner === 'Yes') {
            res.redirect('/eligibilityV2/partner-yes')
        } else {
            res.redirect('/eligibilityV2/partner-no')
        }
    })

    app.post('/eligibilityV2/debt-repayments-partner', function (req, res) {
        if (req.body.partner === 'Yes') {
            res.redirect('/eligibilityV2/debt-repayment')
        } else {
            res.redirect('/eligibilityV2/personal-details')
        }
    })

    app.post('/eligibilityV2/children', function (req, res) {
        if (req.body.children === 'Yes') {
            res.redirect('/eligibilityV2/loan-amount-child')
        } else {
            res.redirect('/eligibilityV2/loan-amount-partner')
        }
    })

    app.post('/eligibilityV2/children-no-partner', function (req, res) {
        if (req.body.children === 'Yes') {
            res.redirect('/eligibilityV2/loan-amount-child-single')
        } else {
            res.redirect('/eligibilityV2/loan-amount-single')
        }
    })

    //MVPv01
    app.post('/MVPv01/about-benefit', function (req, res) {
        if (req.body.benefit === 'Yes') {
            res.redirect('/MVPv01/partner')
        } else {
            res.redirect('/MVPv01/overview')
        }
    })

    app.post('/MVPv01/partner', function (req, res) {
        if (req.body.partner === 'Yes') {
            res.redirect('/MVPv01/partner-yes')
        } else {
            res.redirect('/MVPv01/partner-no')
        }
    })

    app.post('/MVPv01/money-you-owe', function (req, res) {
        if (req.body.partner === 'Yes') {
            res.redirect('/MVPv01/debt-repayment')
        } else {
            res.redirect('/MVPv01/personal-details')
        }
    })

    app.post('/MVPv01/children', function (req, res) {
        if (req.body.children === 'Yes') {
            res.redirect('/MVPv01/loan-amount-child')
        } else {
            res.redirect('/MVPv01/loan-amount-partner')
        }
    })

    app.post('/MVPv01/children-no-partner', function (req, res) {
        if (req.body.children === 'Yes') {
            res.redirect('/MVPv01/loan-amount-child-single')
        } else {
            res.redirect('/MVPv01/loan-amount-single')
        }
    })

    


  }
};
