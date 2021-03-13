$(function (){
	$('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover();
    $('.carousel').carousel({interval: 3000
    });


    $('#info').on('show.bs.modal', function (e) {
       console.log('el modal se muestra'); 
     

        $('#infoBtn').removeClass ('btn-info');
        $('#infoBtn').addClass ('btn-dark');
        $('#infoBtn').prop ('disabled', true);
        });



    $('#info').on('shown.bs.modal', function (e) {
    console.log('el modal fue mostrado'); 
    });

    $('#info').on('hide.bs.modal', function (e) {
    console.log('el modal se oculta'); 
    });

    $('#info').on('hidden.bs.modal', function (e) {
    console.log('el modal fue ocultado'); 
        $('#infoBtn').removeClass ('btn-dark');
        $('#infoBtn').addClass ('btn-info');
        $('#infoBtn').prop ('disabled', false);
        });
    });        

    
    $("#footer").load("../templates/footer.html"); // carga el footer
    
    
		
	  
	