$(function (){
   nbrFormItem = $('.form_wizard .form_wizard_content .form_item').length;
   $('.form_wizard section .form_steps .progress-bar-animated').css('height',100/nbrFormItem+'%');
   nbrStep = 0;
   $('.nxt_step').click(function (){
        nbrStep = nbrStep + 1;
        $('.form_wizard section .form_steps .progress-bar-animated').height(0);
        $('.form_wizard section .form_steps .progress-bar-animated').
                css('height',(100/nbrFormItem)*(nbrStep+1)+'%');
        
        $('.form_wizard .form_wizard_content .form_item:visible').fadeOut(500,function (){
            $('.form_wizard .form_wizard_content .form_item').eq(nbrStep).fadeIn(700);
        });
   });
   
   $('.step_click').click(function (){
      nbrStep = 0; 
      nbr_step = $(this).attr('nbr-step');
      $('.form_wizard section .form_steps .progress-bar-animated').
              css('height',(nbr_step*100)/nbrFormItem+'%');
       $('.form_wizard .form_wizard_content .form_item:visible').fadeOut(500,function (){
            $('.form_wizard .form_wizard_content .form_item').eq(nbr_step-1).fadeIn(700);
       });
   });
});