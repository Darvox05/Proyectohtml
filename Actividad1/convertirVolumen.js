function volumenes(valor, deUnidad, aUnidad){
    
    const factores = {
        'cl a dl' : 0.1,
        'dl a cl' : 10,
        'gl a dl' : 378.5411784,
        'dl a gl' : 1 / 378.5411784,
        'oz a cl' : 0.295735296,
        'cl a oz' : 1 / 0.295735296
    }

    let valorEnCL;
    switch(deUnidad){
        case 'dl' : 
            valorEnCL = valor * factores["dl a cl"];
            break;
            
        case 'gl' :
            valorEnCL = valor * factores["gl a dl"] * factores["dl a cl"];
            break;

        case 'oz' : 
            valorEnCL =  valor * factores["oz a cl"];
            break;
        
        case 'cl' : 
        default: 
            valorEnCL = valor;
        break;
    } 

}