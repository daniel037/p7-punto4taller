$(document).ready(function(){
    var a=0;
    var b=0;

        //alert("Bienvenido"); 
    $("#for1").submit(function (parametro){
        parametro.preventDefault();

        var d="";
        var e="";
        d=$("#listaL").val();
        e=$("#listaV").val();
        if(d === e){alert("Error un equipo no puede jugar contra si mismo ");}
        
        
        var pj=0;
        var pg=0;
        var pp=0;
        var pe=0;
        var gf=0;
        var gc=0;
        var pun=0;
        
        a= parseInt($("#txtL").val());
        b= parseInt($("#txtV").val());
        

        pj= parseInt($("#pja").val());
        pg= parseInt($("#pga" ).val());
        pp= parseInt($("#ppa").val());
        pe= parseInt($("#pea").val());
        gf= parseInt($("#gfa").val());
        gc= parseInt($("#gca").val());
        pun= parseInt($("#puna").val());
       
 
            
            //$("#divres").append("<tr>");
            $("#divres").append("<td>" pj "</td>");
            //$("#divres").append("<td>" + c + "</td></tr>");
            //$("#divres").append(c);
        
    
             
    });
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});


