// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
$(document).ready(function() {

	/***************** Waypoints ******************/

	$('.wp1').waypoint(function() {
		$('.wp1').addClass('animated fadeInUp');
	}, {
		offset: '75%'
	});
	$('.wp2').waypoint(function() {
		$('.wp2').addClass('animated fadeInUp');
	}, {
		offset: '75%'
	});
	$('.wp3').waypoint(function() {
		$('.wp3').addClass('animated fadeInLeft');
	}, {
		offset: '75%'
	});
	$('.wp4').waypoint(function() {
		$('.wp4').addClass('animated fadeInRight');
	}, {
		offset: '75%'
	});
	$('.wp10').waypoint(function() {
		$('.wp10').addClass('animated flipInX');
	}, {
		offset: '75%'
	});
	$('.wp11').waypoint(function() {
		$('.wp11').addClass('animated flipInX');
	}, {
		offset: '75%'
	});
	$('.wp12').waypoint(function() {
		$('.wp12').addClass('animated flipInY');
	}, {
		offset: '75%'
	});
	$('.wp13').waypoint(function() {
		$('.wp13').addClass('animated flipInY');
	}, {
		offset: '75%'
	});



});