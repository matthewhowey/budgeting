function ShowHideContent() {
  var self = this;
  self.showHideRadioToggledContent = function () {
	$(".block-label input[type='radio']").each(function () {

	  var $radio = $(this);
	  var $radioGroupName = $radio.attr('name');
	  var $radioLabel = $radio.parent('label');

	  var dataTarget = $radioLabel.attr('data-target');

	  // Add ARIA attributes

	  // If the data-target attribute is defined
	  if (dataTarget) {

		// Set aria-controls
		$radio.attr('aria-controls', dataTarget);

		$radio.on('click', function () {

		  // Select radio buttons in the same group
		  $radio.closest('form').find(".block-label input[name=" + $radioGroupName + "]").each(function () {
			var $this = $(this);

			var groupDataTarget = $this.parent('label').attr('data-target');
			var $groupDataTarget = $('#' + groupDataTarget);

			// Hide toggled content
			$groupDataTarget.hide();
			// Set aria-expanded and aria-hidden for hidden content
			$this.attr('aria-expanded', 'false');
			$groupDataTarget.attr('aria-hidden', 'true');
		  });

		  var $dataTarget = $('#' + dataTarget);
		  $dataTarget.show();
		  // Set aria-expanded and aria-hidden for clicked radio
		  $radio.attr('aria-expanded', 'true');
		  $dataTarget.attr('aria-hidden', 'false');

		});

	  } else {
		// If the data-target attribute is undefined for a radio button,
		// hide visible data-target content for radio buttons in the same group

		$radio.on('click', function () {

		  // Select radio buttons in the same group
		  $(".block-label input[name=" + $radioGroupName + "]").each(function () {

			var groupDataTarget = $(this).parent('label').attr('data-target');
			var $groupDataTarget = $('#' + groupDataTarget);

			// Hide toggled content
			$groupDataTarget.hide();
			// Set aria-expanded and aria-hidden for hidden content
			$(this).attr('aria-expanded', 'false');
			$groupDataTarget.attr('aria-hidden', 'true');
		  });

		});
	  }

	});
  }
  self.showHideCheckboxToggledContent = function () {

	$(".block-label input[type='checkbox']").each(function() {

	  var $checkbox = $(this);
	  var $checkboxLabel = $(this).parent();

	  var $dataTarget = $checkboxLabel.attr('data-target');

	  // Add ARIA attributes

	  // If the data-target attribute is defined
	  if (typeof $dataTarget !== 'undefined' && $dataTarget !== false) {

		// Set aria-controls
		$checkbox.attr('aria-controls', $dataTarget);

		// Set aria-expanded and aria-hidden
		$checkbox.attr('aria-expanded', 'false');
		$('#'+$dataTarget).attr('aria-hidden', 'true');

		// For checkboxes revealing hidden content
		$checkbox.on('click', function() {

		  var state = $(this).attr('aria-expanded') === 'false' ? true : false;

		  // Toggle hidden content
		  $('#'+$dataTarget).toggle();

		  // Update aria-expanded and aria-hidden attributes
		  $(this).attr('aria-expanded', state);
		  $('#'+$dataTarget).attr('aria-hidden', !state);

		});
	  }

	});
  }
}

$(document).ready(function() {

  // Turn off jQuery animation
  jQuery.fx.off = true;

  // Use GOV.UK selection-buttons.js to set selected
  // and focused states for block labels
  var $blockLabels = $(".block-label input[type='radio'], .block-label input[type='checkbox']");
  new GOVUK.SelectionButtons($blockLabels);

  // Details/summary polyfill
  // See /javascripts/vendor/details.polyfill.js

  // Where .block-label uses the data-target attribute
  // to toggle hidden content
  var toggleContent = new ShowHideContent();
  toggleContent.showHideRadioToggledContent();
  toggleContent.showHideCheckboxToggledContent();



	$("#show-debt2").click(function(e) {
		e.preventDefault();
		$("#debt2").removeClass("js-hidden");
	});

	$("#show-debt3").click(function(e) {
 		e.preventDefault();
 		$("#debt3").removeClass("js-hidden");
	});

	$("#show-debt4").click(function(e) {
 		e.preventDefault();
		$("#debt4").removeClass("js-hidden");
	});

	$("#remove-debt2").click(function (e) {
		e.preventDefault();
		$("#debt2").addClass("js-hidden");
	});

	$("#remove-debt3").click(function (e) {
 		e.preventDefault();
 		$("#debt3").addClass("js-hidden");
	});

	$("#remove-debt4").click(function (e) {
 		e.preventDefault();
 		$("#debt4").addClass("js-hidden");
	});

	$('#pension-credit-1').change(function(){
		if (this.checked && this.value === 'Yes') {
			$('#pc-how-long-1').attr('required', 'true');
		}
	});

	$('#income-support-1').change(function(){
		if (this.checked && this.value === 'Yes') {
			$('#is-how-long-1').attr('required', 'true');
		}
	});

	$('#jsa-1').change(function(){
		if (this.checked && this.value === 'Yes') {
			$('#jsa-type-1').attr('required', 'true');
		}
	});

	$('#jsa-type-1').change(function(){
		if (this.checked && this.value === 'Income') {
			$('#jsa-length-1').attr('required', 'true');
		}
	});

	$('#esa-1').change(function(){
		if (this.checked && this.value === 'Yes') {
			$('#esa-type-1').attr('required', 'true');
		}
	});

	$('#esa-type-1').change(function(){
		if (this.checked && this.value === 'Income') {
			$('#esa-length-1').attr('required', 'true');
		}
	});

});
