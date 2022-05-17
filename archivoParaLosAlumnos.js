/*
    TP3: Objetos - Cuentas bancarias
    Desarrollo de Aplicaciones Informáticas - 5to Informática 2021

    ----------------------------------------------------------------

    Se dispone de una lista, array, vector, o como quieran denominarlo, compuesta por objetos. 
    El vector va a contener todas las cuentas bancarias de un determinado banco.

    La página nos servirá tanto para ver información sobre los thiss del banco como para modificar el dato de una
    cuenta bancaria determinada.

    Todas las funciones que usted genere para realizar las consignas deberán ubicarse en este archivo .js
    
    PARÁMETROS DEL OBJETO TIPO "this":
    -------------------------------------
    Cada objeto tendrá como parámetros la información básica de los thiss de un banco, la cual es mínimamente:
    1) DNI del this (va a actuar como ID).
    2) Nombre del this.
    3) Apellido del this.
    4) Saldo en pesos (sea positivo o negativo) que tiene el this con el banco.
    5) Saldo en dólares (siempre positivo) que tiene el this con el banco.
    6) Consumos en la tarjeta de crédito: 
        Será un vector de objetos dónde cada objeto será un consumo en particular.
        Por ejemplo, si el this hizo una compra en un supermercado por $ 1000, deberá haber una posición de este
        vector que tenga en sus parámetros los datos "Supermercado" y "1000".
        Todos los consumos se guardarán en la moneda pesos para simplificar el código.
    7) Saldo a pagar de la tarjeta de crédito: 
        Guarda la plata que el this le debe al banco, por no haber pagado aún la tarjeta de forma completa.
        Este monto puede ser positivo (si el this le debe plata al banco), 0 (si se pagó todo al día) o negativo
        (si el this, cuando efectuó el pago de la tarjeta, pagó más de lo que debía. Sí, puede pasar en la realidad.)

    MÉTODOS DEL OBJETO TIPO "this":
    ----------------------------------
    Así como también contendrá métodos para realizar operaciones con esta cuenta bancaria:

    1) Extrar dinero de la cuenta: 
        El método solicitará por parámetros cuánta plata se desea retirar y de qué cuenta (si la de pesos o la de 
        dólares). En caso de que se desee retirar de la cuenta en dólares se debe verificar que haya saldo suficiente 
        en la cuenta antes de hacer la extracción. De la cuenta en pesos se puede extraer aunque no haya saldo 
        suficiente (quedará con saldo negativo, como un deudor).
        Este método devolverá "true" si se pudo realizar la extracción y "false" si no se pudo.

    2) Ingresar dinero en la cuenta: 
        El método solicitará por parámetro cuánta plata se va a ingresar y a qué cuenta (pesos o dólares).

    3) Transferir dinero a otra cuenta: 
        El método podrá solicitará o el DNI de la cuenta destino o el objeto cuenta destino para realizar la 
        transferencia. A su vez, también debe solicitar cuánta plata se desea transferir.
        Este método deberá utilizar al método 1) para realizar la extracción y al método 2) de la cuenta que recibe 
        el dinero.
        Realizar este método solo para una cuenta (sea la de pesos o la de dólares, a gusto).

    4) Pago realizado con tarjeta: 
        El método recibirá el nombre del comercio dónde se efectuó el pago y el monto de la compra. Deberá crear un 
        nuevo objeto y cargarlo en el vector de consumos de tarjeta del respectivo this (parámetro 6).
        Cada compra nueva deberá sumar su valor al parámetro "saldo a pagar de la tarjeta", parámetro 7).

    5) Pagar tarjeta: 
        El método recibirá el monto que abonó el this de la tarjeta (puede que no haya realizado el pago completo) 
        y debitará el mismo monto del saldo a pagar de la tarjeta (parámetro 7). En caso de que el this pague más 
        plata que la que debe, le quedará saldo a favor (el parámetro del saldo a pagar quedará en negativo).

    CONSIGNAS:
    ----------
    1) Idear una clase con la estructura que va a tener cada objeto "this". Debe contemplar los parámetros arriba
        descriptos.*

    2) Idear una clase con la estructura que va a tener cada objeto "compra con tarjeta de crédito". Debe contemplar
        los parámetros arriba descriptos.

    3) Implementar los 5 métodos solicitados dentro de la clase "this" (o como quiera llamarla).

    4) Crear un vector de objetos de los thiss y precargarle por código al menos 3 thiss (esto para no tener que 
        cargar todos esos datos cada vez que se recargue la página, como les sucede con el TP2).

    5) Implementar una función para el botón "Obtener mayor" que me indique cuál es el this que tiene más plata en 
        todo el banco. La información de este this se deberá mostrar por DOM.

    6) Implementar una función para el botón "Obtener menor" que me indique cuál es el this que tiene menos plata
        en todo el banco (no cuentan los thiss con saldo negativo). La información de este this se deberá mostrar
        por DOM.

    7) Implementar una función para el botón "Obtener mayor dólares" que me indique cuál es el this que tiene más 
        plata en dólares en todo el banco. La información de este this se deberá mostrar por DOM. Sería buena idea
        modificar la función del punto 5 para que reciba un parámetro que indique en qué moneda se quiere buscar.

    8) Implementar una función para el botón "Obtener menor dólares" que me indique cuál es el this que tiene menos 
        plata en dólares en todo el banco. La información de este this se deberá mostrar por DOM. Sería buena idea 
        modificar la función del punto 6 para que reciba un parámetro que indique en qué moneda se quiere buscar.

    9) Implementar una función para el botón "Listar thiss" que muestre todos los thiss del banco en una tabla.
        Indicar en la misma los datos que usted quiera, mínimamente apellido y DNI.

    10) Implementar una función para el botón "Listar thiss CSV" que muestre todos los thiss del banco por 
        consola. Se deberá mostrar en el formato "Apellido1, Nombre1; Apellido2, Nombre2; Apellido3, Nombre3; etc.".
        NOTA: CSV es un formato estándar de manejo de información. Viene de "valores separados por comas" y se utiliza
        muchísimo en programas como Excel.

    11) Implementar una función para el botón "Listar morosos" que muestre todos los thiss del banco que tengan
        su cuenta en pesos con saldo negativo en una tabla. Indicar en la misma los datos que usted quiera, mínimamente 
        apellido y DNI.

    12) A partir del texto ingresado en un cuadro de texto, implementar una función que me permita buscar un this
        por su nombre o su DNI. Todas las coincidencias que encuentre las deberá mostrar en una tabla.
        Cuando se presione sobre una posición de la tabla, la información más detallada de ese this se deberá mostrar
        en el mismo lugar dónde mostraron los datos en los ejercicios 5, 6, 7, 8...

    13) Implementar una función para que, a partir de los datos de los selects this que transfiere el dinero, this 
        que recibe el dinero y el input monto a transferir, realice la transferencia de efectivo. Para la transferencia, 
        debe usar el método disponible en el objeto que contiene al this.

    14) Implementar una función para que, a partir de los datos del select this que realizó el consumo y los inputs 
        nombre del local y consumo realizado, se agregue un nuevo consumo a la tarjeta de crédito de un this.
        Para esta acción, debe usar el método disponible en el objeto que contiene al this.

    15) Implementar una función para que, a partir de los datos del this que va a pagar la tarjeta y el input monto
        a pagar, se vuelque el pago de una tarjeta en el objeto que contiene al this correspondiente. Para esta
        acción, debe usar el método disponible en el objeto que contiene al this.

    16) Implementar una función para el botón "Agregar un this nuevo". El mismo deberá ocultar todos los botones que
        aparecen en pantalla para solicitar información al sistema y mostrar un formulario para el ingreso de los 
        datos del nuevo this.

    17) Implementar una función para un botón que ingrese los datos del nuevo this. El mismo deberá crear el nuevo
        objeto "this" dentro del vector correspondiente, ocultar el formulario de carga de this nuevo y mostrar
        nuevamente todos los botones en los que yo puedo solicitar información al sistema.
        La carga del nuevo this se deberá realizar si y solo si el usuario completó todos los datos solicitados por
        el sistema y el saldo ingresado para la cuenta en dólares es positivo. Si no, deberá mantenerse la pantalla como
        está y mostrar algún tipo de alerta (sea con alert o de otra forma) que indique el error ocurrido.
        NOTA: El nuevo this siempre ingresa sin consumos en su tarjeta.

    18) OPCIONAL: Agregar un botón extra al formulario que nos permita cancelar el ingreso de un nuevo this y volver
        a la "pantalla principal" sin haber ingresado nada.

    19) OPCIONAL: Igual que en el TP2, utilizar el "localStorage" del navegador para almacenar los thiss y que no se
        pierdan cada vez que recargan la página.

    NOTA 1: Recuerden que su mayores activos de trabajo son la consola, los trabajos que ya realizó y el propio 
        navegador en donde podrán buscar información en Internet. Ya en este punto de la materia es fundamental 
        entrenar estas tres habilidades.

    NOTA 2: Se recomienda el uso de la etiqueta <div> para encapsular muchos elementos que quieran ser ocultados y 
        mostrados. Pero, para el caso de los inputs para ingresar datos nuevos, se suelen encapsular en una etiqueta
        <form>. Esto es porque dicha etiqueta es muy útil cuando se trabaja con backend. Considere usarla para la carga
        del nuevo this al menos.

    NOTA 3: Se adjunta video del funcionamiento final del trabajo. La estética no tiene por qué ser exacta. Apliquen
        su propia creatividad, sin perder mucho tiempo en la misma.

    A trabajar! Éxitos!
*/

// PARÁMETROS DEL OBJETO TIPO "this":
// -------------------------------------
// Cada objeto tendrá como parámetros la información básica de los thiss de un banco, la cual es mínimamente:
// 1) DNI del this (va a actuar como ID).
// 2) Nombre del this.
// 3) Apellido del this.
// 4) Saldo en pesos (sea positivo o negativo) que tiene el this con el banco.
// 5) Saldo en dólares (siempre positivo) que tiene el this con el banco.
// 6) Consumos en la tarjeta de crédito: 
//     Será un vector de objetos dónde cada objeto será un consumo en particular.
//     Por ejemplo, si el this hizo una compra en un supermercado por $ 1000, deberá haber una posición de este
//     vector que tenga en sus parámetros los datos "Supermercado" y "1000".
//     Todos los consumos se guardarán en la moneda pesos para simplificar el código.
// 7) Saldo a pagar de la tarjeta de crédito: 
//     Guarda la plata que el this le debe al banco, por no haber pagado aún la tarjeta de forma completa.
//     Este monto puede ser positivo (si el this le debe plata al banco), 0 (si se pagó todo al día) o negativo
//     (si el this, cuando efectuó el pago de la tarjeta, pagó más de lo que debía. Sí, puede pasar en la realidad.)




let listaCliente = [ new Cliente(4522800,"Laura","Perez",105000,2000), new Cliente(3526332,"Esteban","Quito",1000,10000), new Cliente(4166543,"Ximena","Sanchez", 150000,120)]

// 1) Idear una clase con la estructura que va a tener cada objeto "this". Debe contemplar los parámetros arriba
// descriptos.
class Cliente {
    constructor(dni,nombre,apellido,saldoPeso, saldoDolar) {
        this.dni= dni;
        this.nombre=nombre;
        this.apellido= apellido;
        this.saldoPeso= saldoPeso;
        this.saldoDolar=saldoDolar;
        this.consumoTarjeta=[];
        this.saldoAPagar=0;
        };
    
    extraerDineroCuenta(plata, cuenta){
        switch(cuenta){
            case "dolares":
                if(this.saldoDolar >= plata){
                    this.saldoDolar -=plata;
                };
                return thid.saldoDolar >= plata;
                
            case "pesos":
                this.saldoDolar -=plata;
                if(this.saldoPeso <= plata) {
                    this.saldoAPagar = plata - this.saldoPeso
                };
                return true;
            default:
                return 'No hay una cuenta con esta moneda';
        };
            
    };
    ingresarDineroCuenta(plata,cuenta){
        switch(cuenta){
            case "dolares":
                this.saldoDolar +=plata;
                break;
            case "pesos":
                this.saldoDolar +=plata;
                break;
            default:
                return 'No hay una cuenta con esta moneda';
        };
    };
    transferirDinero(dni,receptor,plata){
        if (this.saldoPeso>=plata){
            this.extraerDineroCuenta(plata,"pesos");
            if(receptor != null){
                receptor.ingresarDineroCuenta(plata,"pesos");
            } else if(dni!= null){
                for( let i = 0; i < listaCliente.length();i++){
                if(dni==listaCliente[i].dni){
                dni.ingresarDineroCuenta(plata,"pesos");
                break;
                };
                } ;     
            }else{
                return "No existe esa cuenta de destino"
            };
        
        };
       

    };
    pagoRealizadoConTarjeta(comercio,compra){
        this.consumoTarjeta.push(new CompraConTarjetaDeCrédito(comercio,compra));
        this.saldoAPagar += compra;
    };
    pagarTarjeta(monto){//Ponele que esta bien
        this.saldoPeso-=monto
        this.saldoAPagar-=monto;
    };
};


class CompraConTarjetaDeCrédito{
    constructor(local, consumo) {
        this.local=local;
        this.consumo=consumo;
    };
};
/*
function obtenerMayor(vector, cuenta){
    let mayor=0;
    if(cuenta=="peso"){
    for (let i=0;i<listaCliente.length;i++){
        if (vector[i].saldoPeso>mayor){
            mayor=arr[i];  
        }
    };
    } else if( cuenta=="dolar"){
        for (let i=0;i<listaCliente.length;i++){
            if (vector[i].saldoDolar>mayor){
                mayor=arr[i];  
            }
        }; 
    }else{
        return "No existe"
    }
    return mayor;
};
function obtenerMenor(vector, cuenta){
    let menor=99999999999999999999999;
    if( cuenta=="peso"){
    for (let i=0;i<listaCliente.length;i++){
            if (vector[i].saldoPeso>0){
                if(vector[i].saldoPeso<menor && menor>0)
                menor=arr[i];  
            }
    };
    }else if (cuenta=="dolar"){
        for (let i=0;i<listaCliente.length;i++){
            if (vector[i].saldoDolar>mayor){
                mayor=arr[i];  
            }
        };
    }
    return menor;
};
*/

function obtenerMayorDolar(vector){
    let mayor=0;
    for (let i=0;i<listaCliente.length;i++){
        if (vector[i].saldoDolar>mayor){
            mayor=arr[i];  
        }
    };
    return mayor;
};
obtenerMayorDolar(listaCliente)
/*
function obtenerMenorDolar(vector){
    let menor=99999999999999999999999;
    for (let i=0;i<listaCliente.length;i++){
        if (vector[i].saldoDolar>0 && vector[i].saldoPeso<menor){
            menor=arr[i];  
        }
    };
    return menor;
};
*/
function listarClientes(){
   pass
}
// 5) Implementar una función para el botón "Obtener mayor" que me indique cuál es el this que tiene más plata en 
//     todo el banco. La información de este this se deberá mostrar por DOM.

// 6) Implementar una función para el botón "Obtener menor" que me indique cuál es el this que tiene menos plata
//     en todo el banco (no cuentan los thiss con saldo negativo). La información de este this se deberá mostrar
//     por DOM.

// 7) Implementar una función para el botón "Obtener mayor dólares" que me indique cuál es el this que tiene más 
//     plata en dólares en todo el banco. La información de este this se deberá mostrar por DOM. Sería buena idea
//     modificar la función del punto 5 para que reciba un parámetro que indique en qué moneda se quiere buscar.

// 8) Implementar una función para el botón "Obtener menor dólares" que me indique cuál es el this que tiene menos 
// plata en dólares en todo el banco. La información de este this se deberá mostrar por DOM. Sería buena idea 
// modificar la función del punto 6 para que reciba un parámetro que indique en qué moneda se quiere buscar.

// 9) Implementar una función para el botón "Listar thiss" que muestre todos los thiss del banco en una tabla.
// Indicar en la misma los datos que usted quiera, mínimamente apellido y DNI.

// 10) Implementar una función para el botón "Listar thiss CSV" que muestre todos los thiss del banco por 
// consola. Se deberá mostrar en el formato "Apellido1, Nombre1; Apellido2, Nombre2; Apellido3, Nombre3; etc.".
// NOTA: CSV es un formato estándar de manejo de información. Viene de "valores separados por comas" y se utiliza
// muchísimo en programas como Excel.