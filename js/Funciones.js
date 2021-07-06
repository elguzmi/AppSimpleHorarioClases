$(document).ready(function () {

    //recogo el div  de infromacion de programacion
    var InfoProgramer = $("#Info-Programer");
    var InfoSeguridad = $('#Info-Seguridad');
    var InfoTrabajoGrado = $("#Info-TrabajoGrado");
    var InfoBussines = $('#Info-ebussines');
    var InfoAuditoria = $('#Info-Auditoria');
    var InfoSeminario = $('#Info-Seminario');

    InfoSeminario.css('display','none');
    InfoAuditoria.css('display','none');
    InfoBussines.css('display','none');
    InfoTrabajoGrado.css('display','none'); 
    InfoSeguridad.css('display', 'none');
    InfoProgramer.css("display","none");

    $(".Programacion").click(function () { 
        $(this).append(InfoProgramer);
        InfoProgramer.slideToggle('slow');
    });

    
    $(".Seguridad").click(function () {
      $(this).append(InfoSeguridad);
      InfoSeguridad.slideToggle('slow');  
    });


    $('.TdTrabajoGrado').click(function() {
       $(this).append(InfoTrabajoGrado);
       InfoTrabajoGrado.slideToggle('slow'); 
    });


    $('.Tdebussines').click(function() {
        $(this).append(InfoBussines);
        InfoBussines.slideToggle('slow'); 
     });

    
     $('.TdAuditoria').click(function() {
        $(this).append(InfoAuditoria);
        InfoAuditoria.slideToggle('slow'); 
     });

     $('.TdSeminario').click(function() {
        $(this).append(InfoSeminario);
        InfoSeminario.slideToggle('slow'); 
     });

    

});