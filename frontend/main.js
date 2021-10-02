import { Liga } from "./liga.js";


fetch("https://localhost:5001/Liga/PreuzmiLige").then(p=>{
    p.json().then(data => {        

        data.forEach(liga => {
            
             const liga1= new Liga(liga.naziv,liga.n,liga.m,liga.kapacitetKluba);             
             liga1.crtajLigu(document.body);

             liga.klubovi.forEach(klub=>{    
                 liga1.klubovi[klub.id-3].izmeniPodatkeKluba(klub.ime,klub.x,klub.y,klub.maxKapacitet,klub.id);
                
                 
                 klub.igraci.forEach(igrac=>{
                liga1.klubovi[klub.id-3].arzurirajKlub(igrac.ime,igrac.id,igrac.dres,klub.id);
                //console.log(igrac.id);
                //console.log(igrac.id);
                //alert(igrac.ime+" "+igrac.dres);
                 });
                 
             });
             liga1.arzurirajSelect();

        });
    });
});





// const liga1= new Liga("ime1",5,1,9);
// liga1.crtajLigu(document.body);
