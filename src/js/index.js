window.$ = window.jQuery = require('jquery');
window.Popper = require('popper.js');
require('bootstrap');

import './../scss/index.scss'

console.log("success");

$('.btn-link').click(function(){
    $(this).siblings().toggleClass('active');
    $(this).parent().next().slideToggle();
});
$('.carousel').carousel({
    interval: 3000
});