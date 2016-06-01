module.exports = function (app) {

// BETA 08

  //Social fund question
  app.post('/beta08/outstanding-social-fund-loans', function (req, res) {
    if (req.body.choice === 'yes') {
      res.redirect('/beta08/not-eligible-social-fund');
    } else if (req.body.choice === 'no') {
      res.redirect('/beta08/current-benefits');
    } else if (req.body.choice === 'unsure') {
      res.redirect('/beta08/not-sure-eligible-social-fund');
    }
  });

  //Benefits question
  app.post('/beta08/current-benefits', function (req, res) {
    // Pension Credit
    if (req.body.pcbenefittype === 'pcbenefittype1') {
        res.redirect('/beta08/borrow-amount');
    } else if (req.body.pcbenefittype === 'pcbenefittype2') {
        res.redirect('/beta08/not-eligible-pension-credit-length');
        // Income Support
    } else if (req.body.isbenefittype === 'isbenefittype1') {
        res.redirect('/beta08/borrow-amount');
    } else if (req.body.isbenefittype === 'isbenefittype2') {
        res.redirect('/beta08/not-eligible-current-benefits');
        // Employment and Support
    } else if (req.body.esabenefittype === 'esabenefittype2') {
        res.redirect('/beta08/not-eligible-current-benefits');
    } else if (req.body.esabenefittype === 'esabenefittype1') {
        res.redirect('/beta08/esa-budgeting-loan-before');
        // Job Seeker’s Allowance
    } else if (req.body.jsabenefittype === 'jsabenefittype1') {
        res.redirect('/beta08/borrow-amount');
    } else if (req.body.jsabenefittype === 'jsabenefittype2') {
        res.redirect('/beta08/jsa-budgeting-loan-before');
    } else if (req.body.jsabenefittype === 'jsabenefittype3') {
        res.redirect('/beta08/not-eligible-current-benefits');
        // None of the above
    } else {
        res.redirect('/beta08/not-eligible-current-benefits');
    }
  });

    //Current Benefits ESA part
    app.post('/beta08/esa-budgeting-loan-before', function (req, res) {
      if (req.body.esabenefitbefore === 'esabenefitbefore1') {
        res.redirect('/beta08/esa-change-of-circumstances');
      } else {
        res.redirect('/beta08/esa-activity-group');
    }
  });

    app.post('/beta08/esa-change-of-circumstances', function (req, res) {
      if (req.body.choice === 'yes') {
        res.redirect('/beta08/esa-activity-group');
      } else {
        res.redirect('/beta08/borrow-amount');
    }
  });

  app.post('/beta08/esa-activity-group', function (req, res) {
    if (req.body.duration === 'duration1') {
        res.redirect('/beta08/borrow-amount');
    } else {
      res.redirect('/beta08/esa-benefit-type');
    }
  });

  app.post('/beta08/esa-benefit-type', function (req, res) {
    if (req.body.esabenefittype === 'esabenefittype1') {
        res.redirect('/beta08/borrow-amount');
    } else if (req.body.esabenefittype === 'esabenefittype2') {
        res.redirect('/beta08/not-eligible-current-benefits');
    } else if (req.body.esabenefittype === 'esabenefittype3') {
        res.redirect('/beta08/not-sure-eligible-esa');
    }
  });

    //Current Benefits JSA part
    app.post('/beta08/jsa-budgeting-loan-before', function (req, res) {
      if (req.body.esabenefitbefore === 'esabenefitbefore1') {
        res.redirect('/beta08/jsa-change-of-circumstances');
      } else {
          res.redirect('/beta08/jsa-worked');
      }
    });

    app.post('/beta08/jsa-change-of-circumstances', function (req, res) {
      if (req.body.choice === 'yes') {
        res.redirect('/beta08/jsa-worked');
      } else {
        res.redirect('/beta08/borrow-amount');
      }
    });

    app.post('/beta08/jsa-worked', function (req, res) {
      if (req.body.choice === 'no') {
        res.redirect('/beta08/borrow-amount');
      } else if (req.body.duration === 'duration1') {
          res.redirect('/beta08/not-eligible-current-benefits');
        } else if (req.body.duration === 'duration2') {
          res.redirect('/beta08/jsa-partner');
      }
    });

    app.post('/beta08/jsa-partner', function (req, res) {
        if (req.body.choice === 'no') {
            res.redirect('/beta08/borrow-amount');
        } else if (req.body.duration === 'duration1') {
                res.redirect('/beta08/jsa-benefit-type');
        } else if (req.body.duration === 'duration2') {
                    res.redirect('/beta08/borrow-amount');
        }
    });

    app.post('/beta08/jsa-benefit-type', function (req, res) {
        if (req.body.type === 'option1') {
            res.redirect('/beta08/borrow-amount');
        }   else if (req.body.type === 'option2') {
            res.redirect('/beta08/not-eligible-current-benefits');
        } else if (req.body.type === 'option3') {
            res.redirect('/beta08/not-sure-eligible-jsa');
        }
    });

  // Borrow amount
  app.post('/beta08/borrow-amount', function (req, res) {
    if (req.body.borrowamount === 'yes') {
      res.redirect('/beta08/industrial-action');
    } else if (req.body.borrowamount === 'no') {
      res.redirect('/beta08/not-eligible-borrow-amount');
    }
  });

  // Industrial action
  app.post('/beta08/industrial-action', function (req, res) {
    if (req.body.choice === 'yes') {
      res.redirect('/beta08/not-eligible-industrial-action');
    } else if (req.body.choice === 'no') {
      res.redirect('/beta08/eligible');
    }
  });

  // Eligible
  app.post('/beta08/eligible', function (req, res) {
    res.redirect('/beta08/partner');
  });

  // Partner
  app.post('/beta08/partner', function (req, res) {
    if (req.body.choice === 'yes') {
      res.redirect('/beta08/your-partner');
    } else if (req.body.choice === 'no') {
      res.redirect('/beta08/recent-partners');
    }
  });

  // Recent partners
  app.post('/beta08/recent-partners', function (req, res) {
    if (req.body.choice === 'yes') {
      res.redirect('/beta08/child-benefit-you-or-partner');
    } else if (req.body.choice === 'no') {
      res.redirect('/beta08/child-benefit');
    }
  });

  // Your partner
  app.post('/beta08/your-partner', function (req, res) {
    res.redirect('/beta08/child-benefit-you-or-partner');
  });

  // Child benefit
  app.post('/beta08/child-benefit', function (req, res) {
    res.redirect('/beta08/repayments-credit-store-cards');
  });

  // Child benefit (you or your partner)
  app.post('/beta08/child-benefit-you-or-partner', function (req, res) {
    res.redirect('/beta08/repayments-credit-store-cards-partner');
  });

  // Debt repayments

    // Credit and store cards
    app.post('/beta08/repayments-credit-store-cards', function (req, res) {
      res.redirect('/beta08/repayments-loans');
    });
    // Credit and store cards (partner)
    app.post('/beta08/repayments-credit-store-cards-partner', function (req, res) {
      res.redirect('/beta08/repayments-loans-partner');
    });
    // Loans
    app.post('/beta08/repayments-loans', function (req, res) {
      res.redirect('/beta08/repayments-rent-to-own');
    });
    // Loans (partner)
    app.post('/beta08/repayments-loans-partner', function (req, res) {
      res.redirect('/beta08/repayments-rent-to-own-partner');
    });
    // Rent to own
    app.post('/beta08/repayments-rent-to-own', function (req, res) {
      res.redirect('/beta08/repayments-landlord-payments');
    });
    // Rent to own (partner)
    app.post('/beta08/repayments-rent-to-own-partner', function (req, res) {
      res.redirect('/beta08/repayments-landlord-payments-partner');
    });
    // Landlord payments
    app.post('/beta08/repayments-landlord-payments', function (req, res) {
      res.redirect('/beta08/loan-amount');
    });
    // Landlord payments (partner)
    app.post('/beta08/repayments-landlord-payments-partner', function (req, res) {
      res.redirect('/beta08/loan-amount-partner');
    });

  // Loan amount
  app.post('/beta08/loan-amount', function (req, res) {
    res.redirect('/beta08/about-you');
  });
  // Loan amount (partner)
  app.post('/beta08/loan-amount-partner', function (req, res) {
    res.redirect('/beta08/about-you-partner');
  });

  // About you
  app.post('/beta08/about-you', function (req, res) {
    res.redirect('/beta08/your-contact-details');
  });
  // About you (partner)
  app.post('/beta08/about-you-partner', function (req, res) {
    res.redirect('/beta08/your-contact-details-partner');
  });

  // Your contact details
  app.post('/beta08/your-contact-details', function (req, res) {
    res.redirect('/beta08/savings-under63');
  });
  // Your contact details (partner)
  app.post('/beta08/your-contact-details-partner', function (req, res) {
    res.redirect('/beta08/savings-under63-partner');
  });

  // Savings
    // Amount of savings
    app.post('/beta08/savings-under63', function (req, res) {
      res.redirect('/beta08/savings-under63-property');
    });
    // Amount of savings (partner)
    app.post('/beta08/savings-under63-partner', function (req, res) {
      res.redirect('/beta08/savings-under63-partner-property');
    });
    // Property
    app.post('/beta08/savings-under63-property', function (req, res) {
      res.redirect('/beta08/declaration');
    });
    // Property (partner)
    app.post('/beta08/savings-under63-partner-property', function (req, res) {
      res.redirect('/beta08/declaration');
    });

  // Declaration
  app.post('/beta08/declaration', function (req, res) {
    res.redirect('/beta08/what-happens-next');
  });

// END OF BETA 08
}
