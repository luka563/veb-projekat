import { Igrac } from "./igrac.js";

export class Klub{
    constructor(ime,i,j,kapacitet){
        this.x=i;
        this.y=j;
        this.kapacitet=0;
        this.maxKapacitet=kapacitet;
        this.ime=ime;
        this.miniKontejner=null;
        this.igraci=[];
        this.id=null;
    }
    crtajKlub(host){
        this.miniKontejner=document.createElement("div");
        this.miniKontejner.classList.add("klub");
        this.miniKontejner.innerHTML=this.ime;
        this.miniKontejner.style.backgroundColor=this.vratiBoju();
        host.appendChild(this.miniKontejner);
    }
    vratiBoju()
    {
        if(this.kapacitet>0)
        return "blue";
        else
        return "lightblue";
    }
    //dodaje igraca
    arzurirajKlub(ime,id,dres,klubid,kliknuto){
        
        if(this.kapacitet + 1 >=this.maxKapacitet)
        alert("KAPACITET POPUNJEN");
        else{
            if(this.igraci.find(element => element.vratiDres()== dres))
            {
                alert("POSTOJI IGRAC SA DRESOM "+ dres);
            }else//dodaje igraca
            {
                let igrac=new Igrac(ime,dres,id);

               // console.log(igrac);
                if(kliknuto!=null)//ako se dodaje putem klika
                {
                    fetch("https://localhost:5001/Liga/UpisiIgraca/" + klubid,
                {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify(
                        {
                            ime:ime,
                            dres:dres,
                            klub:"st"
                        })
                    });
                }
                

                this.dodajIgraca(igrac);    
                this.igraci[this.kapacitet].crtajIgraca(this.miniKontejner);                

                //console.log(klubid);                
                this.kapacitet++;
            }                       
        }
    }
    dodajIgraca(igrac){
        this.igraci.push(igrac);
    }
    obrisiIgracaKluba(dres){
        const pronadjen=null;
        if(this.igraci.find(element => element.vratiDres()==dres))
        {
            for(let i=0;i<this.igraci.length;i++)
            {               
            if(this.igraci[i].vratiDres()==dres)
            {                
            //console.log("BRISEM SA IDJEM "+this.igraci[i].id);
            fetch("https://localhost:5001/Liga/IzbrisiIgraca/" + this.igraci[i].id,
             {
                 method: "DELETE"
             });
            this.igraci[i].deleteHTML();      
            //console.log(this.igraci[i].id);      
            this.igraci.splice(i, 1);
            //console.log(this.igraci);

            //ovde se brise igrac
                
             


            this.kapacitet--;
            }}
        }
        //console.log(pronadjen);
    }
    azurirajIgracaKluba(ime,dres){
        if(this.igraci.find(element => element.vratiDres()==dres))
        {
            for(let i=0;i<this.igraci.length;i++)
            if(this.igraci[i].vratiDres()==dres)
            {                        
                this.igraci[i].azurirajIgraca(ime,dres);
                fetch("https://localhost:5001/Liga/IzmeniIgraca",
                {
                    method: "PUT",
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify(
                        {
                            id:this.igraci[i].id,
                            ime: ime,
                            dres: dres,
                            klub: "s"
                        })
                    });
            }
        }
    }
    izmeniPodatkeKluba(ime,i,j,kapacitet,id)
    {
        this.x=i;
        this.y=j;
        this.kapacitet=0;
        this.maxKapacitet=kapacitet;
        this.ime=ime;
        this.id = id;
        this.miniKontejner.innerHTML=this.ime;
    }    
}