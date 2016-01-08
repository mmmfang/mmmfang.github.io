//SLIDER WILL INITIALIZE UPON ENTERING SITE
    $(document).ready(function(){
      $('.slider').slider({full_width: true});

    });
        
//MODAL TRIGGER  
   $(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal();
  });
