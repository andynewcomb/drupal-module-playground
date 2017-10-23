/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


jQuery(document).ready(function() {
    var blocks  = jQuery('#sidebar-first div.block');
    
    blocks.hide();
    
    jQuery('#sidebar-first').prepend('<div id="collapsibutton">Show Blocks</div>');
 jQuery('#collapsibutton').css({
 'width': '90px',
 'border': 'solid',
 'border-width': '1px',
 'padding': '5px',
 'background-color': '#fff'
 });
 
 jQuery('#collapsibutton').one('click', function() {
 // Button clicked! Get rid of the button.
 jQuery('#collapsibutton').remove();
 // Display all our hidden blocks using an effect.
 blocks.slideDown("slow");
 }); 
 
 
});