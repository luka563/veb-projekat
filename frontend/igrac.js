export class Igrac{
    constructor(ime,dres,id){
        this.ime=ime;
        this.dres=dres;
        this.id=id;  
        this.mikroKontejner=null;
    }
    crtajIgraca(host){
        this.mikroKontejner=document.createElement("div");
        this.mikroKontejner.classList.add("igrac");
        this.mikroKontejner.innerHTML=this.ime+" "+this.dres;        
        //this.miniKontejner.style.backgroundColor = "red";

        host.appendChild(this.mikroKontejner);
    }
    vratiDres(){
        return this.dres;
    }
    deleteHTML(){
        this.mikroKontejner.innerHTML="";
    }
    azurirajIgraca(ime,dres){
        this.ime=ime;
        this.dres=dres;
        this.mikroKontejner.innerHTML=this.ime+" "+this.dres;
    }
}