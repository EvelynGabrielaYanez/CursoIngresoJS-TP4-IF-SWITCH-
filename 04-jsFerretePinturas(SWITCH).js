/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    //------Declaro las variables y constantes
    
    let vNumLamp;
    let vMarcLamp;
    let vPrecioFinal;
    const cPrecioLamp = 35;
    
    //------Asigno valor a las varialbes
    vNumLamp = parseInt(document.getElementById("txtIdCantidad").value);
    vMarcLamp =  document.getElementById("Marca").value;    

	switch(vNumLamp){

        case 1:
        case 2:

            vPrecioFinal =  vNumLamp * cPrecioLamp;

        break;
		case 3:

            switch(vPrecioFinal){

                case "ArgentinaLuz":

                    vPrecioFinal =  vNumLamp * cPrecioLamp * ( 1 - 15/100) ;

                break;
                case "FelipeLamparas":

                    vPrecioFinal =  vNumLamp * cPrecioLamp * ( 1 - 10/100) ;

                break;
                default:

                    vPrecioFinal =  vNumLamp * cPrecioLamp * ( 1 - 5/100) ;
                
                break;

            }


        break;
		case 4:

            switch(vMarcLamp){
                case "ArgentinaLuz":
                case "FelipeLamparas":

                    vPrecioFinal =  vNumLamp * cPrecioLamp * ( 1 - 25/100) ;

                break;
                default:

                    vPrecioFinal =  vNumLamp * cPrecioLamp * ( 1 - 20/100) ;

                break;
            }

        break;
		case 5:

            switch(vMarcLamp){
                case "ArgentinaLuz":

                    vPrecioFinal =  vNumLamp * cPrecioLamp * ( 1 - 40/100) ;

                break;
                default:

                    vPrecioFinal =  vNumLamp * cPrecioLamp * ( 1 - 30/100) ;

                break;

            }

        break;
		default:

            vPrecioFinal =  vNumLamp * cPrecioLamp * ( 1 - 50/100) ;
  
        break;
        
    }

    if( (vNumLamp * cPrecioLamp -  vPrecioFinal) > 120 ){

        alert("Usted pago " +  (vPrecioFinal * 10/100) + " de IIBB.”, siendo " +  (vPrecioFinal * 10/100)  + " el impuesto que se pagó");

        vPrecioFinal = vPrecioFinal * ( 1 + 10/100 );

    }

    document.getElementById("txtIdprecioDescuento").value = vPrecioFinal;


}
