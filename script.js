Fecha = new Date().toLocaleDateString();
document.getElementById("Fecha").innerHTML = Fecha;

myDate = new Date();
day = myDate.getDay(); //Cambiar esta variable de 0 a 6 para cambiar el dia (0 es Domingo)

if (day === 0) {
    AsistenciaDomingo();
}

if (day === 1) {
    AsistenciaLunes();
}

if (day === 2) {
    AsistenciaMartes();
}

if (day === 3) {
    AsistenciaMiercoles();
}

if (day === 4) {
    AsistenciaJueves();
}

if (day === 5) {
    AsistenciaViernes();
}

if (day === 6) {
    AsistenciaSabado();
}

showTime();

function showTime(){

    myDate = new Date();

    hours = myDate.getHours();
    minutes = myDate.getMinutes();
    seconds = myDate.getSeconds();

    day = myDate.getDay();

    if (hours < 10) hours = 0 + hours;

    if (minutes < 10) minutes = "0" + minutes;

    if (seconds < 10) seconds = "0" + seconds;


    document.getElementById("HoraActual").innerHTML = (hours+ ":" +minutes+ ":" +seconds);
    setTimeout("showTime()", 1000);

}

function AsistenciaDomingo(){
    document.getElementById("Dia").innerHTML = ("Domingo");

    document.getElementById("Domingo").style.display = "block";
    document.getElementById("Lunes").style.display = "none";
    document.getElementById("Martes").style.display = "none";
    document.getElementById("Miercoles").style.display = "none";
    document.getElementById("Jueves").style.display = "none";
    document.getElementById("Viernes").style.display = "none";
    document.getElementById("Sabado").style.display = "none";
}

function AsistenciaLunes(){
    document.getElementById("Dia").innerHTML = ("Lunes");

    document.getElementById("Domingo").style.display = "none";
    document.getElementById("Lunes").style.display = "block";
    document.getElementById("Martes").style.display = "none";
    document.getElementById("Miercoles").style.display = "none";
    document.getElementById("Jueves").style.display = "none";
    document.getElementById("Viernes").style.display = "none";
    document.getElementById("Sabado").style.display = "none";

    $("#PrimeraHoraLu").change(function(){
        if(document.getElementById('PrimeraHoraLu').checked) {
            document.getElementById('SegundaHoraLu').checked = true;
            document.getElementById('TerceraHoraLu').checked = true;
        } 
    })

    $("#SegundaHoraLu").change(function(){
        if(document.getElementById('SegundaHoraLu').checked) {
            document.getElementById('TerceraHoraLu').checked = true;
        } 
    })

    $("#CuartaHoraLu").change(function(){
        if(document.getElementById('CuartaHoraLu').checked) {
            document.getElementById('QuintaHoraLu').checked = true;
            document.getElementById('SextaHoraLu').checked = true;
            document.getElementById('SeptimaHoraLu').checked = true;
        } 
    })
    
    $("#QuintaHoraLu").change(function(){
        if(document.getElementById('QuintaHoraLu').checked) {
            document.getElementById('SextaHoraLu').checked = true;
            document.getElementById('SeptimaHoraLu').checked = true;
        } 
    })

    $("#SextaHoraLu").change(function(){
        if(document.getElementById('SextaHoraLu').checked) {
            document.getElementById('SeptimaHoraLu').checked = true;
        } 
    })
    
}

function AsistenciaMartes(){
    document.getElementById("Dia").innerHTML = ("Martes");

    document.getElementById("Domingo").style.display = "none";
    document.getElementById("Lunes").style.display = "none";
    document.getElementById("Martes").style.display = "block";
    document.getElementById("Miercoles").style.display = "none";
    document.getElementById("Jueves").style.display = "none";
    document.getElementById("Viernes").style.display = "none";
    document.getElementById("Sabado").style.display = "none";

    $("#PrimeraHoraMa").change(function(){
        if(document.getElementById('PrimeraHoraMa').checked) {
            document.getElementById('SegundaHoraMa').checked = true;
        } 
    })

    $("#TerceraHoraMa").change(function(){
        if(document.getElementById('TerceraHoraMa').checked) {
            document.getElementById('CuartaHoraMa').checked = true;
        } 
    })

    $("#QuintaHoraMa").change(function(){
        if(document.getElementById('QuintaHoraMa').checked) {
            document.getElementById('SextaHoraMa').checked = true;
        } 
    })
}

function AsistenciaMiercoles(){
    document.getElementById("Dia").innerHTML = ("Miercoles");

    document.getElementById("Domingo").style.display = "none";
    document.getElementById("Lunes").style.display = "none";
    document.getElementById("Martes").style.display = "none";
    document.getElementById("Miercoles").style.display = "block";
    document.getElementById("Jueves").style.display = "none";
    document.getElementById("Viernes").style.display = "none";
    document.getElementById("Sabado").style.display = "none";

    $("#PrimeraHoraMi").change(function(){
        if(document.getElementById('PrimeraHoraMi').checked) {
            document.getElementById('SegundaHoraMi').checked = true;
            document.getElementById('TerceraHoraMi').checked = true;
        } 
    })

    $("#SegundaHoraMi").change(function(){
        if(document.getElementById('SegundaHoraMi').checked) {
            document.getElementById('TerceraHoraMi').checked = true;
        } 
    })

    $("#CuartaHoraMi").change(function(){
        if(document.getElementById('CuartaHoraMi').checked) {
            document.getElementById('QuintaHoraMi').checked = true;
            document.getElementById('SextaHoraMi').checked = true;
        } 
    })

    $("#QuintaHoraMi").change(function(){
        if(document.getElementById('QuintaHoraMi').checked) {
            document.getElementById('SextaHoraMi').checked = true;
        } 
    })
}

function AsistenciaJueves(){
    document.getElementById("Dia").innerHTML = ("Jueves");

    document.getElementById("Domingo").style.display = "none";
    document.getElementById("Lunes").style.display = "none";
    document.getElementById("Martes").style.display = "none";
    document.getElementById("Miercoles").style.display = "none";
    document.getElementById("Jueves").style.display = "block";
    document.getElementById("Viernes").style.display = "none";
    document.getElementById("Sabado").style.display = "none";

    $("#PrimeraHoraJu").change(function(){
        if(document.getElementById('PrimeraHoraJu').checked) {
            document.getElementById('SegundaHoraJu').checked = true;
            document.getElementById('TerceraHoraJu').checked = true;
        } 
    })

    $("#SegundaHoraJu").change(function(){
        if(document.getElementById('SegundaHoraJu').checked) {
            document.getElementById('TerceraHoraJu').checked = true;
        } 
    })

    $("#CuartaHoraJu").change(function(){
        if(document.getElementById('CuartaHoraJu').checked) {
            document.getElementById('QuintaHoraJu').checked = true;
            document.getElementById('SextaHoraJu').checked = true;
            document.getElementById('SeptimaHoraJu').checked = true;
        } 
    })
    
    $("#QuintaHoraJu").change(function(){
        if(document.getElementById('QuintaHoraJu').checked) {
            document.getElementById('SextaHoraJu').checked = true;
            document.getElementById('SeptimaHoraJu').checked = true;
        } 
    })

    $("#SextaHoraJu").change(function(){
        if(document.getElementById('SextaHoraJu').checked) {
            document.getElementById('SeptimaHoraJu').checked = true;
        } 
    })
}

function AsistenciaViernes(){
    document.getElementById("Dia").innerHTML = ("Viernes");

    document.getElementById("Domingo").style.display = "none";
    document.getElementById("Lunes").style.display = "none";
    document.getElementById("Martes").style.display = "none";
    document.getElementById("Miercoles").style.display = "none";
    document.getElementById("Jueves").style.display = "none";
    document.getElementById("Viernes").style.display = "block";
    document.getElementById("Sabado").style.display = "none";

    $("#PrimeraHoraVi").change(function(){
        if(document.getElementById('PrimeraHoraVi').checked) {
            document.getElementById('SegundaHoraVi').checked = true;
            document.getElementById('TerceraHoraVi').checked = true;
            document.getElementById('CuartaHoraVi').checked = true;
        } 
    })

    $("#SegundaHoraVi").change(function(){
        if(document.getElementById('SegundaHoraVi').checked) {
            document.getElementById('TerceraHoraVi').checked = true;
            document.getElementById('CuartaHoraVi').checked = true;
        } 
    })

    $("#TerceraHoraVi").change(function(){
        if(document.getElementById('TerceraHoraVi').checked) {
            document.getElementById('CuartaHoraVi').checked = true;
        } 
    })
}

function AsistenciaSabado(){
    document.getElementById("Dia").innerHTML = ("Sabado");

    document.getElementById("Domingo").style.display = "none";
    document.getElementById("Lunes").style.display = "none";
    document.getElementById("Martes").style.display = "none";
    document.getElementById("Miercoles").style.display = "none";
    document.getElementById("Jueves").style.display = "none";
    document.getElementById("Viernes").style.display = "none";
    document.getElementById("Sabado").style.display = "block";
}