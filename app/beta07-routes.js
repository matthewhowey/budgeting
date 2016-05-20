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

    //Benefits question
		app.post('/sandpit/current-benefits-question/v5/current-benefits', function (req, res) {
			// Pension Credit
			if (req.body.pcbenefittype === 'pcbenefittype1') {
				res.redirect('/sandpit/current-benefits-question/v5/borrow-amount');
			} else if (req.body.pcbenefittype === 'pcbenefittype2') {
				res.redirect('/sandpit/current-benefits-question/v5/not-eligible-current-benefits');
				// Income Support
			} else if (req.body.isbenefittype === 'isbenefittype1') {
				res.redirect('/sandpit/current-benefits-question/v5/borrow-amount');
			} else if (req.body.isbenefittype === 'isbenefittype2') {
				res.redirect('/sandpit/current-benefits-question/v5/not-eligible-current-benefits');
				// Employment and Support
			} else if (req.body.esabenefittype === 'esabenefittype2') {
				res.redirect('/sandpit/current-benefits-question/v5/not-eligible-current-benefits');
			} else if (req.body.esabenefittype === 'esabenefittype1') {
				res.redirect('/sandpit/current-benefits-question/v5/esa-budgeting-loan-before');
				// Job Seeker’s Allowance
			} else if (req.body.jsabenefittype === 'jsabenefittype1') {
				res.redirect('/sandpit/current-benefits-question/v5/borrow-amount');
			} else if (req.body.jsabenefittype === 'jsabenefittype2') {
				res.redirect('/sandpit/current-benefits-question/v5/jsa-budgeting-loan-before');
			} else if (req.body.jsabenefittype === 'jsabenefittype3') {
				res.redirect('/sandpit/current-benefits-question/v5/not-eligible-current-benefits');
				// None of the above
			} else {
				res.redirect('/sandpit/current-benefits-question/v5/not-eligible-current-benefits');
			}
		});

			//Current Benefits ESA part
			app.post('/sandpit/current-benefits-question/v5/esa-budgeting-loan-before', function (req, res) {
				if (req.body.esabenefitbefore === 'esabenefitbefore1') {
					res.redirect('/sandpit/current-benefits-question/v5/esa-change-of-circumstances');
				} else {
					res.redirect('/sandpit/current-benefits-question/v5/esa-benefit-type');
				}
		});

			app.post('/sandpit/current-benefits-question/v5/esa-change-of-circumstances', function (req, res) {
				if (req.body.choice === 'yes') {
					res.redirect('/sandpit/current-benefits-question/v5/esa-benefit-type');
				} else {
					res.redirect('/sandpit/current-benefits-question/v5/borrow-amount');
				}
		});

			app.post('/sandpit/current-benefits-question/v5/esa-benefit-type', function (req, res) {
				if (req.body.esabenefittype === 'esabenefittype1') {
					res.redirect('/sandpit/current-benefits-question/v5/borrow-amount');
				} else if (req.body.esabenefittype === 'esabenefittype2') {
					res.redirect('/sandpit/current-benefits-question/v5/not-eligible-current-benefits');
				} else if (req.body.esabenefittype === 'esabenefittype3') {
					res.redirect('/sandpit/current-benefits-question/v5/esa-activity-group');
				}
		});

			app.post('/sandpit/current-benefits-question/v5/esa-activity-group', function (req, res) {
				if (req.body.duration === 'duration1') {
					res.redirect('/sandpit/current-benefits-question/v5/borrow-amount');
				} else {
					res.redirect('/sandpit/current-benefits-question/v5/not-sure-eligible-esa');
				}
			});

			//Current Benefits JSA part
			app.post('/sandpit/current-benefits-question/v5/jsa-budgeting-loan-before', function (req, res) {
				if (req.body.esabenefitbefore === 'esabenefitbefore1') {
					res.redirect('/sandpit/current-benefits-question/v5/jsa-change-of-circumstances');
				} else {
					res.redirect('/sandpit/current-benefits-question/v5/jsa-worked');
				}
			});

			app.post('/sandpit/current-benefits-question/v5/jsa-change-of-circumstances', function (req, res) {
				if (req.body.choice === 'yes') {
					res.redirect('/sandpit/current-benefits-question/v5/jsa-worked');
				} else {
					res.redirect('/sandpit/current-benefits-question/v5/borrow-amount');
				}
			});

			app.post('/sandpit/current-benefits-question/v5/jsa-worked', function (req, res) {
				if (req.body.choice === 'no') {
					res.redirect('/sandpit/current-benefits-question/v5/borrow-amount');
				} else if (req.body.duration === 'duration1') {
					res.redirect('/sandpit/current-benefits-question/v5/not-eligible-current-benefits');
				}	else if (req.body.duration === 'duration2') {
						res.redirect('/sandpit/current-benefits-question/v5/jsa-partner');
				}
			});

			app.post('/sandpit/current-benefits-question/v5/jsa-partner', function (req, res) {
				if (req.body.choice === 'no') {
					res.redirect('/sandpit/current-benefits-question/v5/borrow-amount');
				} else if (req.body.duration === 'duration1') {
						res.redirect('/sandpit/current-benefits-question/v5/jsa-benefit-type');
				} else if (req.body.duration === 'duration2') {
							res.redirect('/sandpit/current-benefits-question/v5/borrow-amount');
				}
			});

			app.post('/sandpit/current-benefits-question/v5/jsa-benefit-type', function (req, res) {
				if (req.body.duration === 'duration1') {
					res.redirect('/sandpit/current-benefits-question/v5/borrow-amount');
				} else if (req.body.duration === 'duration2') {
					res.redirect('/sandpit/current-benefits-question/v5/not-eligible-current-benefits');
				}	else if (req.body.type === 'option2') {
					res.redirect('/sandpit/current-benefits-question/v5/not-eligible-current-benefits');
				} else if (req.body.type === 'option3') {
					res.redirect('/sandpit/current-benefits-question/v5/not-sure-eligible-jsa');
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
