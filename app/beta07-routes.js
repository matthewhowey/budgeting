module.exports = {

	bind : function (app) {

		app.get('/', function (req, res) {
			res.render('index');
		});

		app.get('/examples/template-data', function (req, res) {
			res.render('examples/template-data', { 'name' : 'Foo' });
		});


    app.post('/beta07/outstanding-social-fund-loans', function (req, res) {
      if (req.body.choice === 'yes') {
        res.redirect('/beta07/not-eligible-social-fund');
      } else if (req.body.choice === 'no') {
        res.redirect('/beta07/current-benefits');
      } else if (req.body.choice === 'unsure') {
        res.redirect('/beta07/not-sure-eligible-social-fund');
      }
    });

    // Borrow amount
    app.post('/beta07/borrow-amount', function (req, res) {
      if (req.body.borrowamount === 'yes') {
        res.redirect('/beta07/industrial-action');
      } else if (req.body.borrowamount === 'no') {
        res.redirect('/beta07/not-eligible-borrow-amount');
      }
    });

    // Industrial action
    app.post('/beta07/industrial-action', function (req, res) {
      if (req.body.choice === 'yes') {
        res.redirect('/beta07/not-eligible-industrial-action');
      } else if (req.body.choice === 'no') {
        res.redirect('/beta07/eligible');
      }
    });

    // Eligable
    app.post('/beta07/eligible', function (req, res) {
      res.redirect('/beta07/partner');
    });

    // Partner
    app.post('/beta07/partner', function (req, res) {
      if (req.body.choice === 'yes') {
        res.redirect('/beta07/your-partner');
      } else if (req.body.choice === 'no') {
        res.redirect('/beta07/recent-partners');
      }
    });

    // Recent partners
    app.post('/beta07/recent-partners', function (req, res) {
      if (req.body.choice === 'yes') {
        res.redirect('/beta07/child-benefit-you-or-partner');
      } else if (req.body.choice === 'no') {
        res.redirect('/beta07/child-benefit');
      }
    });

    // Your partner
    app.post('/beta07/your-partner', function (req, res) {
      res.redirect('/beta07/child-benefit-you-or-partner');
    });

    // Child benefit
    app.post('/beta07/child-benefit', function (req, res) {
      res.redirect('/beta07/loan-amount');
    });

    // Child benefit (you or your partner)
    app.post('/beta07/child-benefit-you-or-partner', function (req, res) {
      res.redirect('/beta07/loan-amount');
    });

    // Loan amount
    app.post('/beta07/loan-amount', function (req, res) {
      res.redirect('/beta07/savings');
    });

    // Savings
    app.post('/beta07/savings', function (req, res) {
      if (req.body.choice === 'yes') {
        res.redirect('/beta07/debt-repayments');
      } else if (req.body.choice === 'no') {
        res.redirect('/beta07/debt-repayments');
      }
    });

    // Debt repayments
    app.post('/beta07/debt-repayments', function (req, res) {
      if (req.body.choice === 'yes') {
        res.redirect('/beta07/debt-repayments-detail');
      } else if (req.body.choice === 'no') {
        res.redirect('/beta07/about-you');
      }
    });

    // Debt repayments detail
    app.post('/beta07/debt-repayments-detail', function (req, res) {
      res.redirect('/beta07/debt-repayments-other');
    });

    // Other debt repayments
    app.post('/beta07/debt-repayments-other', function (req, res) {
      if (req.body.choice === 'yes') {
        res.redirect('/beta07/debt-repayments-detail');
      } else if (req.body.choice === 'no') {
        res.redirect('/beta07/about-you');
      }
    });

    // About you
    app.post('/beta07/about-you', function (req, res) {
      res.redirect('/beta07/your-contact-details');
    });

    // Your contact details
    app.post('/beta07/your-contact-details', function (req, res) {
      res.redirect('/beta07/declaration');
    });

    // Declaration
    app.post('/beta07/declaration', function (req, res) {
      res.redirect('/beta07/what-happens-next');
    });
