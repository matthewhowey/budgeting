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
	}
}
