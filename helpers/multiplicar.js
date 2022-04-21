const fs = require('fs');
const crearArchivo = async(base = 5 ,l = false,h=10) =>{
    try{
        let salida = '';
        for(let i=1;i<=h;i++){
         salida += `${base} x ${i} = ${base*i}\n`;
        }
        
        if(l){
            console.log(salida);
        }

        fs.writeFileSync(`./salida/tabla-del-${ base}.txt`,salida);
        return `tabla-del-${ base}.txt`;
        
    }
    catch(err){
        throw err;
    }

}

module.exports = {
    crearArchivo
}