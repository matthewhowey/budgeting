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
		});

		app.post('/alpha06/partner', function (req, res) {
			if (req.body.partner === 'Yes') {
				res.redirect('/alpha06/partner-yes')
			} else {
				res.redirect('/alpha06/partner-no')
			}
		});

		app.post('/alpha06/money-you-owe', function (req, res) {
			if (req.body.partner === 'Yes') {
				res.redirect('/alpha06/debt-repayment')
			} else {
				res.redirect('/alpha06/personal-details')
			}
		});

		//version07
		app.post('/alpha07/about-benefit', function (req, res) {
			if (req.body.benefit === 'Yes') {
				res.redirect('/alpha07/partner')
			} else {
				res.redirect('/alpha07/overview')
			}
		});

		app.post('/alpha07/partner', function (req, res) {
			if (req.body.partner === 'Yes') {
				res.redirect('/alpha07/partner-yes')
			} else {
				res.redirect('/alpha07/partner-no')
			}
		});

		app.post('/alpha07/money-you-owe', function (req, res) {
			if (req.body.partner === 'Yes') {
				res.redirect('/alpha07/debt-repayment')
			} else {
				res.redirect('/alpha07/personal-details')
			}
		});

		//beta01
		app.post('/beta01/about-benefit', function (req, res) {
			if (req.body.benefit === 'Yes') {
				res.redirect('/beta01/partner')
			} else {
				res.redirect('/beta02/overview')
			}
		});

		app.post('/beta01/partner', function (req, res) {
			if (req.body.partner === 'Yes') {
				res.redirect('/beta01/partner-yes')
			} else {
				res.redirect('/beta01/partner-no')
			}
		});

		app.post('/beta01/money-you-owe', function (req, res) {
			if (req.body.partner === 'Yes') {
				res.redirect('/beta01/debt-repayment')
			} else {
				res.redirect('/beta01/personal-details')
			}
		});

		app.post('/beta01/children', function (req, res) {
			if (req.body.children === 'Yes') {
				res.redirect('/beta01/loan-amount-child')
			} else {
				res.redirect('/beta01/loan-amount-partner')
			}
		});

		app.post('/beta01/children-no-partner', function (req, res) {
			if (req.body.children === 'Yes') {
				res.redirect('/beta01/loan-amount-child')
			} else {
				res.redirect('/beta01/loan-amount-single')
			}
		});


		//beta02
		app.post('/beta02/about-benefit', function (req, res) {
			if (req.body.benefit === 'Yes') {
				res.redirect('/beta02/partner')
			} else {
				res.redirect('/beta02/overview')
			}
		});

		app.post('/beta02/partner', function (req, res) {
			if (req.body.partner === 'Yes') {
				res.redirect('/beta02/partner-yes')
			} else {
				res.redirect('/beta02/partner-no')
			}
		});

		app.post('/beta02/money-you-owe', function (req, res) {
			if (req.body.partner === 'Yes') {
				res.redirect('/beta02/debt-repayment')
			} else {
				res.redirect('/beta02/personal-details')
			}
		});

		app.post('/beta02/children', function (req, res) {
			if (req.body.children === 'Yes') {
				res.redirect('/beta02/loan-amount-child')
			} else {
				res.redirect('/beta02/loan-amount-partner')
			}
		});

		app.post('/beta02/children-no-partner', function (req, res) {
			if (req.body.children === 'Yes') {
				res.redirect('/beta02/loan-amount-child')
			} else {
				res.redirect('/beta02/loan-amount-single')
			}
		});

		//beta03

		app.post('/beta03/about-benefit', function (req, res) {
			if (req.body.benefit === 'Yes') {
				res.redirect('/beta03/partner')
			} else {
				res.redirect('/beta03/overview')
			}
		});

		app.post('/beta03/partner', function (req, res) {
			if (req.body.partner === 'Yes') {
				res.redirect('/beta03/partner-yes')
			} else {
				res.redirect('/beta03/partner-no')
			}
		});

		app.post('/beta03/debt-repayments-partner', function (req, res) {
			if (req.body.partner === 'Yes') {
				res.redirect('/beta03/debt-repayment')
			} else {
				res.redirect('/beta03/personal-details')
			}
		});

		app.post('/beta03/children', function (req, res) {
			if (req.body.children === 'Yes') {
				res.redirect('/beta03/loan-amount-child')
			} else {
				res.redirect('/beta03/loan-amount-partner')
			}
		});

		app.post('/beta03/children-no-partner', function (req, res) {
			if (req.body.children === 'Yes') {
				res.redirect('/beta03/loan-amount-child-single')
			} else {
				res.redirect('/beta03/loan-amount-single')
			}
		});


		//beta04

		app.post('/beta04/less-than-100', function (req, res) {
			if (req.body.lt100 === 'No') {
				res.redirect('/beta04/about-benefit')
			} else {
				res.redirect('/beta04/about-benefit')
			}
		});

		app.post('/beta04/about-benefit', function (req, res) {
			if (req.body.benefit === 'Yes') {
				res.redirect('/beta04/partner')
			} else {
				res.redirect('/beta04/overview')
			}
		});

		app.post('/beta04/partner', function (req, res) {
			if (req.body.partner === 'Yes') {
				res.redirect('/beta04/partner-yes')
			} else {
				res.redirect('/beta04/partner-no')
			}
		});

		app.post('/beta04/debt-repayments-partner', function (req, res) {
			if (req.body.partner === 'Yes') {
				res.redirect('/beta04/debt-repayment')
			} else {
				res.redirect('/beta04/personal-details')
			}
		});

		app.post('/beta04/children', function (req, res) {
			if (req.body.children === 'Yes') {
				res.redirect('/beta04/loan-amount-child')
			} else {
				res.redirect('/beta04/loan-amount-partner')
			}
		});

		app.post('/beta04/children-no-partner', function (req, res) {
			if (req.body.children === 'Yes') {
				res.redirect('/beta04/loan-amount-child-single')
			} else {
				res.redirect('/beta04/loan-amount-single')
			}
		});

		//beta05
		app.post('/beta05/less-than-100', function (req, res) {
			if (req.body.lt100 === 'No') {
				res.redirect('/beta05/about-benefit')
			} else {
				res.redirect('/beta05/about-benefit')
			}
		});

		app.post('/beta05/about-benefit', function (req, res) {
			if (req.body.benefit === 'Yes') {
				res.redirect('/beta05/partner')
			} else {
				res.redirect('/beta05/overview')
			}
		});

		app.post('/beta05/partner', function (req, res) {
			if (req.body.partner === 'Yes') {
				res.redirect('/beta0/5partner-yes')
			} else {
				res.redirect('/beta05/partner-no')
			}
		});

		app.post('/beta05/debt-repayments-partner', function (req, res) {
			if (req.body.partner === 'Yes') {
				res.redirect('/beta05/debt-repayment')
			} else {
				res.redirect('/beta05/personal-details')
			}
		});

		app.post('/beta05/children', function (req, res) {
			if (req.body.children === 'Yes') {
				res.redirect('/beta05/loan-amount-child')
			} else {
				res.redirect('/beta05/loan-amount-partner')
			}
		});

		app.post('/beta05/children-no-partner', function (req, res) {
			if (req.body.children === 'Yes') {
				res.redirect('/beta05/loan-amount-child-single')
			} else {
				res.redirect('/beta05/loan-amount-single')
			}
		});

		//beta05_validation
		app.post('/beta05_validation/less-than-100', function (req, res) {
			if (req.body.lt100 === 'No') {
				res.redirect('/beta05_validation/about-benefit')
			} else {
				res.redirect('/beta05_validation/about-benefit')
			}
		});

		app.post('/beta05_validation/about-benefit', function (req, res) {
			if (req.body.benefit === 'Yes') {
				res.redirect('/beta05_validation/partner')
			} else {
				res.redirect('/beta05_validation/overview')
			}
		});

		app.post('/beta05_validation/partner', function (req, res) {
			if (req.body.partner === 'Yes') {
				res.redirect('/beta05_validation/partner-yes')
			} else {
				res.redirect('/beta05_validation/partner-no')
			}
		});

		app.post('/beta05_validation/debt-repayments-partner', function (req, res) {
			if (req.body.partner === 'Yes') {
				res.redirect('/beta05_validation/debt-repayment')
			} else {
				res.redirect('/beta05_validation/personal-details')
			}
		});

		app.post('/beta05_validation/children', function (req, res) {
			if (req.body.children === 'Yes') {
				res.redirect('/beta05_validation/loan-amount-child')
			} else {
				res.redirect('/beta05_validation/loan-amount-partner')
			}
		});

		app.post('/beta05_validation/children-no-partner', function (req, res) {
			if (req.body.children === 'Yes') {
				res.redirect('/beta05_validation/loan-amount-child-single')
			} else {
				res.redirect('/beta05_validation/loan-amount-single')
			}
		});

  	// beta06

  	app.post('/beta06/outstanding-social-fund-loans', function (req, res) {
  	 if (req.body.choice === 'yes') {
  		res.redirect('/beta06/not-eligible-social-fund');
  	 } else if (req.body.choice === 'no') {
  		res.redirect('/beta06/current-benefits');
  	 } else if (req.body.choice === 'unsure') {
          res.redirect('/beta06/not-sure-eligible-social-fund');
      }
  	});

    app.post('/beta06/current-benefits', function (req, res) {
      // Pension Credit
      if (req.body.benefit === 'pc') {
        res.redirect('/beta06/current-benefits-pc');
      // Income Support
      } else if (req.body.benefit === 'is') {
        res.redirect('/beta06/current-benefits-is');
      // Employment and Support Allowance
      } else if (req.body.benefit === 'esa') {
        if (req.body.esabenefittype === 'esabenefittype1') {
          res.redirect('/beta06/current-benefits-esa');
          } else if (req.body.esabenefittype === 'esabenefittype2') {
            res.redirect('/beta06/not-eligible-current-benefits');
          } else {
            res.redirect('/beta06/not-sure-eligible-esa');
        }
      // Jobseeker’s Allowance
      } else if (req.body.benefit === 'jsa') {
        if (req.body.jsabenefittype === 'jsabenefittype1') {
          res.redirect('/beta06/current-benefits-jsa');
          } else if (req.body.jsabenefittype === 'jsabenefittype2') {
            res.redirect('/beta06/not-eligible-current-benefits');
          } else {
            res.redirect('/beta06/not-sure-eligible-jsa');
        }
      // Not eligible
      } else {
        res.redirect('/beta06/not-eligible-current-benefits');
      }
    });

    // Pension Credit question
    app.post('/beta06/current-benefits-pc', function (req, res) {
      if (req.body.duration === 'over6') {
        res.redirect('/beta06/borrow-amount');
      } else if (req.body.duration === 'under6') {
        res.redirect('/beta06/not-eligible-current-benefits');
      }
    });

    // Income Support question
    app.post('/beta06/current-benefits-is', function (req, res) {
      if (req.body.duration === 'over6') {
        res.redirect('/beta06/borrow-amount');
      } else if (req.body.duration === 'under6') {
        res.redirect('/beta06/not-eligible-current-benefits');
      }
    });

    // ESA question
    app.post('/beta06/current-benefits-esa', function (req, res) {
      if (req.body.duration === 'over6') {
        res.redirect('/beta06/borrow-amount');
      } else if (req.body.duration === 'under6') {
        res.redirect('/beta06/not-eligible-current-benefits');
      }
    });

    // JSA question
    app.post('/beta06/current-benefits-jsa', function (req, res) {
      if (req.body.duration === 'over6') {
        res.redirect('/beta06/borrow-amount');
      } else if (req.body.duration === 'under6') {
        res.redirect('/beta06/not-eligible-current-benefits');
      }
    });

    // Borrow amount
    app.post('/beta06/borrow-amount', function (req, res) {
      if (req.body.borrowamount === 'yes') {
        res.redirect('/beta06/industrial-action');
      } else if (req.body.borrowamount === 'no') {
        res.redirect('/beta06/not-eligible-borrow-amount');
      }
    });

    // Industrial action
    app.post('/beta06/industrial-action', function (req, res) {
      if (req.body.choice === 'yes') {
        res.redirect('/beta06/not-eligible-industrial-action');
      } else if (req.body.choice === 'no') {
        res.redirect('/beta06/eligible');
      }
    });

    // Eligable
    app.post('/beta06/eligible', function (req, res) {
      res.redirect('/beta06/partner');
    });

    // Partner
    app.post('/beta06/partner', function (req, res) {
      if (req.body.choice === 'yes') {
        res.redirect('/beta06/your-partner');
      } else if (req.body.choice === 'no') {
        res.redirect('/beta06/recent-partners');
      }
    });

    // Recent partners
    app.post('/beta06/recent-partners', function (req, res) {
      if (req.body.choice === 'yes') {
        res.redirect('/beta06/child-benefit-you-or-partner');
      } else if (req.body.choice === 'no') {
        res.redirect('/beta06/child-benefit');
      }
    });

    // Your partner
    app.post('/beta06/your-partner', function (req, res) {
      res.redirect('/beta06/child-benefit-you-or-partner');
    });

    // Child benefit
    app.post('/beta06/child-benefit', function (req, res) {
      res.redirect('/beta06/loan-amount');
    });

    // Child benefit (you or your partner)
    app.post('/beta06/child-benefit-you-or-partner', function (req, res) {
      res.redirect('/beta06/loan-amount');
    });

    // Loan amount
    app.post('/beta06/loan-amount', function (req, res) {
      res.redirect('/beta06/savings');
    });

    // Savings
    app.post('/beta06/savings', function (req, res) {
      if (req.body.choice === 'yes') {
        res.redirect('/beta06/debt-repayments');
      } else if (req.body.choice === 'no') {
        res.redirect('/beta06/debt-repayments');
      }
    });

    // Debt repayments
    app.post('/beta06/debt-repayments', function (req, res) {
      if (req.body.choice === 'yes') {
        res.redirect('/beta06/debt-repayments-detail');
      } else if (req.body.choice === 'no') {
        res.redirect('/beta06/about-you');
      }
    });

    // Debt repayments detail
    app.post('/beta06/debt-repayments-detail', function (req, res) {
      res.redirect('/beta06/debt-repayments-other');
    });

    // Other debt repayments
    app.post('/beta06/debt-repayments-other', function (req, res) {
      if (req.body.choice === 'yes') {
        res.redirect('/beta06/debt-repayments-detail');
      } else if (req.body.choice === 'no') {
        res.redirect('/beta06/about-you');
      }
    });

    // About you
    app.post('/beta06/about-you', function (req, res) {
      res.redirect('/beta06/your-contact-details');
    });

    // Your contact details
    app.post('/beta06/your-contact-details', function (req, res) {
      res.redirect('/beta06/declaration');
    });

    // Declaration
    app.post('/beta06/declaration', function (req, res) {
      res.redirect('/beta06/what-happens-next');
    });


    //////////////////////////////////////////////////////////
    // SANDPIT
    //////////////////////////////////////////////////////////

    // loan offer - channel question
    app.post('/sandpit/loan-offer/channel/1-1', function (req, res) {
      res.redirect('/sandpit/loan-offer/channel/1-2');
    });
    app.post('/sandpit/loan-offer/channel/1-2', function (req, res) {
      res.redirect('/sandpit/loan-offer/channel/1-3');
    });
    
    //loan offer - accept/reject version 1
	app.post('/sandpit/loan-offer/version-1/loan-offer', function (req, res) {
	 	if (req.body.choice === 'yes') {
	    res.redirect('/sandpit/loan-offer/version-1/loan-offer-accept');
	  } else if (req.body.choice === 'no') {
	    res.redirect('/sandpit/loan-offer/version-1/loan-offer-reject');
      }
    });

    //loan offer - accept/reject partial offer version 1
    app.post('/sandpit/loan-offer/version-1/partial-loan-offer', function (req, res) {
	 	if (req.body.choice === 'yes') {
	    res.redirect('/sandpit/loan-offer/version-1/partial-loan-offer-accept');
	  } else if (req.body.choice === 'no') {
	    res.redirect('/sandpit/loan-offer/version-1/partial-loan-offer-reject');
      }
    });


    //loan offer - accept/reject version 2
    app.post('/sandpit/loan-offer/version-2/loan-offer-partial', function (req, res) {
        if (req.body.choice === 'yes') {
        res.redirect('/sandpit/loan-offer/version-2/loan-offer-accept-partial');
      } else if (req.body.choice === 'no') {
        res.redirect('/sandpit/loan-offer/version-2/loan-offer-reject-partial');
      }
    });

    app.post('/sandpit/loan-offer/version-2/loan-offer-full', function (req, res) {
        if (req.body.choice === 'yes') {
        res.redirect('/sandpit/loan-offer/version-2/loan-offer-accept-full');
      } else if (req.body.choice === 'no') {
        res.redirect('/sandpit/loan-offer/version-2/loan-offer-reject-full');
      }
    });

    //current benefits question - v1
    app.post('/sandpit/current-benefits-question/v1/current-benefits', function (req, res) {
        if (req.body.esabenefittype === 'esabenefittype1') {
        res.redirect('/sandpit/current-benefits-question/v1/current-benefits-esa');
      } else if (req.body.jsabenefittype === 'jsabenefittype1') {
        res.redirect('/sandpit/current-benefits-question/v1/current-benefits-jsa');
      } else if (req.body.choice === 'no') {
        res.redirect('/sandpit/loan-offer/version-1/loan-offer-reject');
      }
    });

    //Current benefits question - v2

    app.post('/sandpit/current-benefits-question/v2/current-benefits', function (req, res) {
      // Pension Credit
      if (req.body.pcbenefittype === 'pcbenefittype1') {
        res.redirect('/sandpit/current-benefits-question/v2/borrow-amount');
      } else if (req.body.pcbenefittype === 'pcbenefittype2') {
        res.redirect('/sandpit/current-benefits-question/v2/not-eligible-current-benefits');
      // Income Support
      } else if (req.body.isbenefittype === 'isbenefittype1') {
        res.redirect('/sandpit/current-benefits-question/v2/borrow-amount');
      } else if (req.body.isbenefittype === 'isbenefittype2') {
        res.redirect('/sandpit/current-benefits-question/v2/not-eligible-current-benefits');
      // Employment and Support
      } else if (req.body.esabenefittype === 'esabenefittype1') {
        res.redirect('/sandpit/current-benefits-question/v2/borrow-amount');
      } else if (req.body.esabenefittype === 'esabenefittype2') {
        res.redirect('/sandpit/current-benefits-question/v2/current-benefits-esa');
      } else if (req.body.esabenefittype === 'esabenefittype3') {
        res.redirect('/sandpit/current-benefits-question/v2/not-eligible-current-benefits');
      // Job Seeker’s Allowance
      } else if (req.body.jsabenefittype === 'jsabenefittype1') {
        res.redirect('/sandpit/current-benefits-question/v2/borrow-amount');
      } else if (req.body.jsabenefittype === 'jsabenefittype2') {
        res.redirect('/sandpit/current-benefits-question/v2/current-benefits-jsa');
      } else if (req.body.jsabenefittype === 'jsabenefittype3') {
        res.redirect('/sandpit/current-benefits-question/v2/not-eligible-current-benefits');
      // None of the above
      } else {
        res.redirect('/sandpit/current-benefits-question/v2/not-eligible-current-benefits');
      }
    });

    // Current benefits ESA part
    app.post('/sandpit/current-benefits-question/v2/current-benefits-esa', function (req, res) {
        if (req.body.duration === 'duration1') {
        res.redirect('/sandpit/current-benefits-question/v2/borrow-amount');
      } else if (req.body.duration === 'duration2') {
        res.redirect('/sandpit/current-benefits-question/v2/not-eligible-current-benefits');
      } else if (req.body.type === 'option2') {
        res.redirect('/sandpit/current-benefits-question/v2/not-eligible-current-benefits');
      } else if (req.body.type === 'option3') {
        res.redirect('/sandpit/current-benefits-question/v2/not-sure-eligible-esa');
      }
    });

    // Current benefits JSA part
    app.post('/sandpit/current-benefits-question/v2/current-benefits-jsa', function (req, res) {
        if (req.body.duration === 'duration1') {
        res.redirect('/sandpit/current-benefits-question/v2/borrow-amount');
      } else if (req.body.duration === 'duration2') {
        res.redirect('/sandpit/current-benefits-question/v2/not-eligible-current-benefits');
      } else if (req.body.type === 'option2') {
        res.redirect('/sandpit/current-benefits-question/v2/not-eligible-current-benefits');
      } else if (req.body.type === 'option3') {
        res.redirect('/sandpit/current-benefits-question/v2/not-sure-eligible-jsa');
      }
    });

    // Applying for someone else
    app.post('/sandpit/applying-for-someone-else/v1/', function (req, res) {
        if (req.body.options === 'yes') {
        res.redirect('/sandpit/applying-for-someone-else/v1/written-consent');
      }
    });

    app.post('/sandpit/applying-for-someone-else/v1/written-consent', function (req, res) {
        if (req.body.options === 'no') {
        res.redirect('/sandpit/applying-for-someone-else/v1/written-consent-detail');
      }
    });


    //DEBT - REPAYMENTS

    //v3 - Credit and store cards
    app.post('/sandpit/debt-repayments/v3/credit-store-cards', function (req, res) {
      res.redirect('/sandpit/debt-repayments/v3/loans');
    });
    //v3 - Loans
    app.post('/sandpit/debt-repayments/v3/loans', function (req, res) {
      res.redirect('/sandpit/debt-repayments/v3/mobile-phone-contract');
    });
    //v3 - Mobile phone
    app.post('/sandpit/debt-repayments/v3/mobile-phone-contract', function (req, res) {
      res.redirect('/sandpit/debt-repayments/v3/rent-to-own');
    });
    //v3 - Rent to own
    app.post('/sandpit/debt-repayments/v3/rent-to-own', function (req, res) {
      res.redirect('/sandpit/debt-repayments/v3/about-you');
    });


    //v5 - Credit and store cards
    app.post('/sandpit/debt-repayments/v5/credit-store-cards', function (req, res) {
      res.redirect('/sandpit/debt-repayments/v5/loans');
    });
    //v5 - Loans
    app.post('/sandpit/debt-repayments/v5/loans', function (req, res) {
      res.redirect('/sandpit/debt-repayments/v5/rent-to-own');
    });
    //v5 - Rent to own
    app.post('/sandpit/debt-repayments/v5/rent-to-own', function (req, res) {
      res.redirect('/sandpit/debt-repayments/v5/about-you');
    });


    //SAVINGS

    //Single - under 63
    app.post('/sandpit/savings/v3/savings-under63-single', function (req, res) {
      res.redirect('/sandpit/savings/v3/savings-under63-single-property');
    });

    //Single - over 63
    app.post('/sandpit/savings/v3/savings-over63-single', function (req, res) {
      res.redirect('/sandpit/savings/v3/savings-over63-single-property');
    });

    //With partner - under 63
    app.post('/sandpit/savings/v3/savings-under63-partner', function (req, res) {
      res.redirect('/sandpit/savings/v3/savings-under63-partner-property');
    });

    //With partner - over 63
    app.post('/sandpit/savings/v3/savings-over63-partner', function (req, res) {
      res.redirect('/sandpit/savings/v3/savings-over63-partner-property');
    });




    //////////////////////////////////////////////////////////
    // END OF SANDPIT
    //////////////////////////////////////////////////////////

    // loan offer - updates 2
    app.post('/sandpit/loan-offer/channel/2-1', function (req, res) {
      res.redirect('/sandpit/loan-offer/channel/2-2');
    });
    app.post('/sandpit/loan-offer/channel/2-2', function (req, res) {
      res.redirect('/sandpit/loan-offer/channel/2-3');
    });



		// eligibilityV1
		app.post('/eligibilityV1/less-than-100', function (req, res) {
			if (req.body.lt100 === 'Yes') {
				res.redirect('/eligibilityV1/about-benefit-pension-credit');
			}
		});

		app.post('/eligibilityV1/about-benefit-pension-credit', function(req, res) {

			var pension = req.body['pension-credit'];
			var pensionLength = req.body['pc-how-long'];

			if (pension === 'No' || pensionLength === 'No') {
				res.redirect('/eligibilityV1/about-benefit-income-support');
			} else if (pension === 'Yes' && pensionLength === 'Yes') {
				res.redirect('/eligibilityV1/partner');
			}

		});

		app.post('/eligibilityV1/about-benefit-income-support', function(req, res) {

			var income = req.body['income-support'];
			var incomeLength = req.body['is-how-long'];

			if (income === 'No' || incomeLength === 'No') {
				res.redirect('/eligibilityV1/about-benefit-jsa');
			} else if (income === 'Yes' && incomeLength === 'Yes') {
				res.redirect('/eligibilityV1/partner');
			}

		});

		app.post('/eligibilityV1/about-benefit-jsa', function(req, res) {

			var jsa = req.body['jsa'];
			var jsaType = req.body['jsa-type'];
			var jsaLength = req.body['jsa-length'];

			if (jsa === 'No') {
				res.redirect('/eligibilityV1/about-benefit-esa');
			} else if (jsa === 'Yes' && jsaType === 'Contribution' || jsaType === 'Unsure') {
				res.redirect('/eligibilityV1/eligibility-exit');
			} else if (jsaType === 'Income' && jsaLength === 'over6') {
				res.redirect('/eligibilityV1/partner');
			} else if (jsaType === 'Income' && jsaLength === 'under6') {
				res.redirect('/eligibilityV1/eligibility-exit');
			}

		});

		app.post('/eligibilityV1/about-benefit-esa', function(req, res) {

			var esa = req.body['esa'];
			var esaType = req.body['esa-type'];
			var esaLength = req.body['esa-length'];

			if (esa === 'No') {
				res.redirect('/eligibilityV1/eligibility-exit');
			} else if (esa === 'Yes' && esaType === 'Contribution' || esaType === 'Unsure') {
				res.redirect('/eligibilityV1/eligibility-exit');
			} else if (esaType === 'Income' && esaLength === 'over6') {
				res.redirect('/eligibilityV1/partner');
			} else if (esaType === 'Income' && esaLength === 'under6') {
				res.redirect('/eligibilityV1/eligibility-exit');
			}

		});

		app.post('/eligibilityV1/about-benefit', function (req, res) {
			if (req.body.benefit === 'Yes') {
				res.redirect('/eligibilityV1/partner')
			} else {
				res.redirect('/eligibilityV1/overview')
			}
		});

		app.post('/eligibilityV1/partner', function (req, res) {
			if (req.body.partner === 'Yes') {
				res.redirect('/eligibilityV1/partner-yes')
			} else {
				res.redirect('/eligibilityV1/partner-no')
			}
		});

		app.post('/eligibilityV1/debt-repayments-partner', function (req, res) {
			if (req.body.partner === 'Yes') {
				res.redirect('/eligibilityV1/debt-repayment')
			} else {
				res.redirect('/eligibilityV1/personal-details')
			}
		});

		app.post('/eligibilityV1/children', function (req, res) {
			if (req.body.children === 'Yes') {
				res.redirect('/eligibilityV1/loan-amount-child')
			} else {
				res.redirect('/eligibilityV1/loan-amount-partner')
			}
		});

		app.post('/eligibilityV1/children-no-partner', function (req, res) {
			if (req.body.children === 'Yes') {
				res.redirect('/eligibilityV1/loan-amount-child-single')
			} else {
				res.redirect('/eligibilityV1/loan-amount-single')
			}
		});

		//eligibilityV2

		app.post('/eligibilityV2/before-you-start', function (req, res) {

			var amount       = req.body['less-than-100'];
			var benefit      = req.body['benefit'];
			var oweSocial    = req.body['owe-social-fund'];
			var savings      = req.body['savings'];
			var industrial   = req.body['industrial-action'];

			if (amount === 'Yes' && benefit === 'Yes' && oweSocial === 'No' && savings === 'No' && industrial === 'No') {
				res.redirect('/eligibilityV2/partner')
			} else if (amount === 'Yes' && benefit === 'Yes' && oweSocial === 'Yes' && savings === 'Yes' && industrial === 'Yes') {
				res.redirect('/eligibilityV2/eligibility-exit');
			} else if (benefit === 'No') {
				res.redirect('/eligibilityV2/eligibility-exit-benefit');
			} else if (amount === 'No') {
				res.redirect('eligibilityV2/eligibility-exit-100');
			}
			else {
				res.redirect('/eligibilityV2/eligibility-exit')
			}
		});

		app.post('/eligibilityV2/less-than-100', function (req, res) {
			if (req.body.lt100 === 'No') {
				res.redirect('/eligibilityV2/about-benefit')
			} else {
				res.redirect('/eligibilityV2/about-benefit')
			}
		});

		app.post('/eligibilityV2/about-benefit', function (req, res) {
			if (req.body.benefit === 'Yes') {
				res.redirect('/eligibilityV2/partner')
			} else {
				res.redirect('/eligibilityV2/overview')
			}
		});

		app.post('/eligibilityV2/partner', function (req, res) {
			if (req.body.partner === 'Yes') {
				res.redirect('/eligibilityV2/partner-yes')
			} else {
				res.redirect('/eligibilityV2/partner-no')
			}
		});

		app.post('/eligibilityV2/debt-repayments-partner', function (req, res) {
			if (req.body.partner === 'Yes') {
				res.redirect('/eligibilityV2/debt-repayment')
			} else {
				res.redirect('/eligibilityV2/personal-details')
			}
		});

		app.post('/eligibilityV2/children', function (req, res) {
			if (req.body.children === 'Yes') {
				res.redirect('/eligibilityV2/loan-amount-child')
			} else {
				res.redirect('/eligibilityV2/loan-amount-partner')
			}
		});

		app.post('/eligibilityV2/children-no-partner', function (req, res) {
			if (req.body.children === 'Yes') {
				res.redirect('/eligibilityV2/loan-amount-child-single')
			} else {
				res.redirect('/eligibilityV2/loan-amount-single')
			}
		});

		//eligiblity-v3

app.post('/eligibility-v3/before-you-start', function (req, res) {

			
		});

		app.post('/eligibility-v3/less-than-100', function (req, res) {
			if (req.body.lt100 === 'No') {
				res.redirect('/eligibility-v3/eligibility-exit-100')
			} else {
				res.redirect('/eligibility-v3/about-benefit')
			}
		});

		app.post('/eligibility-v3/social-fund-debt', function (req, res) {
			if (req.body.socialfund === 'No') {
				res.redirect('/eligibility-v3/savings')
			} else if (req.body.socialfund ==='Yes') { 
				res.redirect('/eligibility-v3/eligibility-exit-social-fund-la')
			} else { 
				res.redirect('/eligibility-v3/eligibility-exit-social-fund')
			}

		});
			
		app.post('/eligibility-v3/savings', function (req, res) {
			if (req.body.savings === 'No') {
				res.redirect('/eligibility-v3/industrial-action')
			} else {
				res.redirect('/eligibility-v3/eligibility-exit-savings')
			}

		});

		app.post('/eligibility-v3/industrial-action', function (req, res) {
			if (req.body.industrialaction=== 'No') {
				res.redirect('/eligibility-v3/eligibility-confirmation')
			} else {
				res.redirect('/eligibility-v3/eligibility-exit-industrial-action')
			}

		});	

		app.post('/eligibility-v3/about-benefit', function (req, res) {
			var hasEnoughBenefit=(
				req.body.incomesupport6 === 'Yes' ||
				req.body.pensioncredit6 === 'Yes' ||
				req.body.jsa6 === 'Yes' ||
				req.body.esa6 === 'Yes' 
			)
			var needsMoreInfo=(
				req.body.esatype === 'Unsure' ||
				req.body.jsatype === 'Unsure'
			)
			if (hasEnoughBenefit){
				res.redirect('/eligibility-v3/social-fund-debt')
			} else if (needsMoreInfo){
				res.redirect('/eligibility-v3/eligibility-exit-benefit')
			} else {
				res.redirect('/eligibility-v3/eligibility-exit-benefit-la')
			}
		});

		app.post('/eligibility-v3/partner', function (req, res) {
			if (req.body.partner === 'Yes') {
				res.redirect('/eligibility-v3/partner-yes')
			} else {
				res.redirect('/eligibility-v3/partner-no')
			}
		});

		app.post('/eligibility-v3/debt-repayments-partner', function (req, res) {
			if (req.body.partner === 'Yes') {
				res.redirect('/eligibility-v3/debt-repayment')
			} else {
				res.redirect('/eligibility-v3/personal-details')
			}
		});

		app.post('/eligibility-v3/children', function (req, res) {
			if (req.body.children === 'Yes') {
				res.redirect('/eligibility-v3/loan-amount-child')
			} else {
				res.redirect('/eligibility-v3/loan-amount-partner')
			}
		});

		app.post('/eligibility-v3/children-no-partner', function (req, res) {
			if (req.body.children === 'Yes') {
				res.redirect('/eligibility-v3/loan-amount-child-single')
			} else {
				res.redirect('/eligibility-v3/loan-amount-single')
			}
		});

		//eligibilty-v4

		app.post('/eligibility-v4/before-you-start', function (req, res) {

			
		});

		app.post('/eligibility-v4/less-than-100', function (req, res) {
			if (req.body.lt100 === 'No') {
				res.redirect('/eligibility-v4/eligibility-exit-100')
			} else {
				res.redirect('/eligibility-v4/savings')
			}
		});

		app.post('/eligibility-v4/social-fund-debt', function (req, res) {
			if (req.body.socialfund === 'No') {
				res.redirect('/eligibility-v4/about-benefit')
			} else if (req.body.socialfund ==='Yes') { 
				res.redirect('/eligibility-v4/eligibility-exit-social-fund-la')
			} else { 
				res.redirect('/eligibility-v4/eligibility-exit-social-fund')
			}

		});
			
		app.post('/eligibility-v4/savings', function (req, res) {
			if (req.body.savings === 'No') {
				res.redirect('/eligibility-v4/industrial-action')
			} else {
				res.redirect('/eligibility-v4/eligibility-exit-savings')
			}

		});

		app.post('/eligibility-v4/industrial-action', function (req, res) {
			if (req.body.industrialaction=== 'No') {
				res.redirect('/eligibility-v4/eligibility-confirmation')
			} else {
				res.redirect('/eligibility-v4/eligibility-exit-industrial-action')
			}

		});	

		app.post('/eligibility-v4/about-benefit', function (req, res) {
			var hasEnoughBenefit=(
				req.body.incomesupport6 === 'Yes' ||
				req.body.pensioncredit6 === 'Yes' ||
				req.body.jsalength === 'Yes' ||
				req.body.esalength === 'Yes' 
			)
			var needsMoreInfo=(
				req.body.esatype === 'Unsure' ||
				req.body.jsatype === 'Unsure'
			)
			if (hasEnoughBenefit){
				res.redirect('/eligibility-v4/less-than-100')
			} else if (needsMoreInfo){
				res.redirect('/eligibility-v4/eligibility-exit-benefit')
			} else {
				res.redirect('/eligibility-v4/eligibility-exit-benefit-la')
			}
		});

		app.post('/eligibility-v4/partner', function (req, res) {
			if (req.body.partner === 'Yes') {
				res.redirect('/eligibility-v4/partner-yes')
			} else {
				res.redirect('/eligibility-v4/partner-no')
			}
		});

		app.post('/eligibility-v4/debt-repayments-partner', function (req, res) {
			if (req.body.partner === 'Yes') {
				res.redirect('/eligibility-v4/debt-repayment')
			} else {
				res.redirect('/eligibility-v4/personal-details')
			}
		});

		app.post('/eligibility-v4/children', function (req, res) {
			if (req.body.children === 'Yes') {
				res.redirect('/eligibility-v4/loan-amount-child')
			} else {
				res.redirect('/eligibility-v4/loan-amount-partner')
			}
		});

		app.post('/eligibility-v4/children-no-partner', function (req, res) {
			if (req.body.children === 'Yes') {
				res.redirect('/eligibility-v4/loan-amount-child-single')
			} else {
				res.redirect('/eligibility-v4/loan-amount-single')
			}
		});

		//eligibility-v5

		app.post('/eligibility-v5/before-you-start', function (req, res) {

			
		});

		app.post('/eligibility-v5/less-than-100', function (req, res) {
			if (req.body.lt100 === 'No') {
				res.redirect('/eligibility-v5/eligibility-exit-100')
			} else {
				res.redirect('/eligibility-v5/industrial-action')
			}
		});

		app.post('/eligibility-v5/social-fund-debt', function (req, res) {
			if (req.body.socialfund === 'No') {
				res.redirect('/eligibility-v5/about-benefit')
			} else if (req.body.socialfund ==='Yes') { 
				res.redirect('/eligibility-v5/eligibility-exit-social-fund-la')
			} else { 
				res.redirect('/eligibility-v5/eligibility-exit-social-fund')
			}

		});

		app.post('/eligibility-v5/industrial-action', function (req, res) {
			if (req.body.industrialaction=== 'No') {
				res.redirect('/eligibility-v5/eligibility-confirmation')
			} else {
				res.redirect('/eligibility-v5/eligibility-exit-industrial-action')
			}

		});	

		app.post('/eligibility-v5/about-benefit', function (req, res) {
			var hasEnoughBenefit=(
				req.body.incomesupport6 === 'Yes' ||
				req.body.pensioncredit6 === 'Yes' ||
				req.body.jsalength === 'Yes' ||
				req.body.esalength === 'Yes' 
			)
			var needsMoreInfo=(
				req.body.esatype === 'Unsure' ||
				req.body.jsatype === 'Unsure'
			)
			if (hasEnoughBenefit){
				res.redirect('/eligibility-v5/less-than-100')
			} else if (needsMoreInfo){
				res.redirect('/eligibility-v5/eligibility-exit-benefit')
			} else {
				res.redirect('/eligibility-v5/eligibility-exit-benefit-la')
			}
		});

		app.post('/eligibility-v5/partner', function (req, res) {
			if (req.body.partner === 'Yes') {
				res.redirect('/eligibility-v5/partner-yes')
			} else {
				res.redirect('/eligibility-v5/partner-no')
			}
		});

		app.post('/eligibility-v5/debt-repayments-partner', function (req, res) {
			if (req.body.partner === 'Yes') {
				res.redirect('/eligibility-v5/debt-repayment')
			} else {
				res.redirect('/eligibility-v5/personal-details')
			}
		});

		app.post('/eligibility-v5/children', function (req, res) {
			if (req.body.children === 'Yes') {
				res.redirect('/eligibility-v5/loan-amount-child')
			} else {
				res.redirect('/eligibility-v5/loan-amount-partner')
			}
		});

		app.post('/eligibility-v5/children-no-partner', function (req, res) {
			if (req.body.children === 'Yes') {
				res.redirect('/eligibility-v5/loan-amount-child-single')
			} else {
				res.redirect('/eligibility-v5/loan-amount-single')
			}
		});


		// MVPv01
		app.post('/MVPv01/about-benefit', function (req, res) {
			if (req.body.benefit === 'Yes') {
				res.redirect('/MVPv01/partner')
			} else {
				res.redirect('/MVPv01/overview')
			}
		});

		app.post('/MVPv01/partner', function (req, res) {
			if (req.body.partner === 'Yes') {
				res.redirect('/MVPv01/partner-yes')
			} else {
				res.redirect('/MVPv01/partner-no')
			}
		});

		app.post('/MVPv01/money-you-owe', function (req, res) {
			if (req.body.partner === 'Yes') {
				res.redirect('/MVPv01/debt-repayment')
			} else {
				res.redirect('/MVPv01/personal-details')
			}
		});

		app.post('/MVPv01/children', function (req, res) {
			if (req.body.children === 'Yes') {
				res.redirect('/MVPv01/loan-amount-child')
			} else {
				res.redirect('/MVPv01/loan-amount-partner')
			}
		});

		app.post('/MVPv01/children-no-partner', function (req, res) {
			if (req.body.children === 'Yes') {
				res.redirect('/MVPv01/loan-amount-child-single')
			} else {
				res.redirect('/MVPv01/loan-amount-single')
			}
		});

		//MVPv02
		app.post('/MVPv02/before-you-start', function (req, res) {

			
		});

		app.post('/MVPv02/less-than-100', function (req, res) {
			if (req.body.lt100 === 'No') {
				res.redirect('/MVPv02/eligibility-exit-100')
			} else {
				res.redirect('/MVPv02/industrial-action')
			}
		});

		app.post('/MVPv02/social-fund-debt', function (req, res) {
			if (req.body.socialfund === 'No') {
				res.redirect('/MVPv02/about-benefit')
			} else if (req.body.socialfund ==='Yes') { 
				res.redirect('/MVPv02/eligibility-exit-social-fund-la')
			} else { 
				res.redirect('/MVPv02/eligibility-exit-social-fund')
			}

		});

		app.post('/MVPv02/industrial-action', function (req, res) {
			if (req.body.industrialaction=== 'No') {
				res.redirect('/MVPv02/eligibility-confirmation')
			} else {
				res.redirect('/MVPv02/eligibility-exit-industrial-action')
			}

		});	

		app.post('/MVPv02/about-benefit', function (req, res) {
			var hasEnoughBenefit=(
				req.body.incomesupport6 === 'Yes' ||
				req.body.pensioncredit6 === 'Yes' ||
				req.body.jsalength === 'Yes' ||
				req.body.esalength === 'Yes' 
			)
			var needsMoreInfo=(
				req.body.esatype === 'Unsure' ||
				req.body.jsatype === 'Unsure'
			)
			if (hasEnoughBenefit){
				res.redirect('/MVPv02/less-than-100')
			} else if (needsMoreInfo){
				res.redirect('/MVPv02/eligibility-exit-benefit')
			} else {
				res.redirect('/MVPv02/eligibility-exit-benefit-la')
			}
		});

		app.post('/MVPv02/partner', function (req, res) {
			if (req.body.partner === 'Yes') {
				res.redirect('/MVPv02/partner-yes')
			} else {
				res.redirect('/MVPv02/partner-no')
			}
		});

		app.post('/MVPv02/debt-repayments-partner', function (req, res) {
			if (req.body.partner === 'Yes') {
				res.redirect('/MVPv02/debt-repayment')
			} else {
				res.redirect('/MVPv02/personal-details')
			}
		});

		app.post('/MVPv02/children', function (req, res) {
			if (req.body.children === 'Yes') {
				res.redirect('/MVPv02/loan-amount-child')
			} else {
				res.redirect('/MVPv02/loan-amount-partner')
			}
		});

		app.post('/MVPv02/children-no-partner', function (req, res) {
			if (req.body.children === 'Yes') {
				res.redirect('/MVPv02/loan-amount-child-single')
			} else {
				res.redirect('/MVPv02/loan-amount-single')
			}
		});
	}
}
