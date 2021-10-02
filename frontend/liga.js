import { Klub } from "./klub.js";

export class Liga{

    constructor(naziv,n,m,kapacitetKluba){
        this.naziv = naziv;
        this.n = n;
        this.m = m;
        this.kapacitetKluba = kapacitetKluba;
        this.kontejner = null;
        this.klubovi=[];
        this.selekt=null;        
    }

    dodajKlub(klub){
        this.klubovi.push(klub);
    }

    crtajLigu(host){
        if(!host)
        throw new Exeption("Ne postoji roditelj");

        this.kontejner =document.createElement("div");
        this.kontejner.classList.add("kontejner");
        host.appendChild(this.kontejner);
        
        this.crtajFormu(this.kontejner);        
        this.crtajKlubove(this.kontejner);

    }


    crtajFormu(host){        
        const kontForma = document.createElement("div");
        kontForma.className ="kontForma";
        host.appendChild(kontForma);

        var elLabela = document.createElement("h3");
        elLabela.innerHTML="Unos";
        kontForma.appendChild(elLabela);

       
        
        //unos imena
        elLabela = document.createElement("label");
        elLabela.innerHTML = "Ime ";
        kontForma.appendChild(elLabela);

        let unos = document.createElement("input");
        unos.className="ime";
        kontForma.appendChild(unos);

        //unos dresa
        elLabela = document.createElement("label");
        elLabela.innerHTML = "Broj dresa ";
        kontForma.appendChild(elLabela);

        unos = document.createElement("input");
        unos.className="dres";
        unos.type="number"; 
        kontForma.appendChild(unos);

        let div1=null;
       
        //select klub
        div1= document.createElement("div");
        let sel = document.createElement("select");
        elLabela=document.createElement("label");
        elLabela.innerHTML = "U klub";
        div1.appendChild(elLabela);
        div1.appendChild(sel);
        
        this.selekt=sel;
        

        
        kontForma.appendChild(div1);

        //dugme za dodavanje
        const dugme = document.createElement("button");
        //dugme.classList.add("btn btn-primary");
        dugme.innerHTML="Dodaj";
        kontForma.appendChild(dugme);

        //dugme za brisanje
        const dugmeO = document.createElement("button");
        dugmeO.innerHTML="Obrisi";
        kontForma.appendChild(dugmeO);

        //dugme za brisanje
        const dugmeA = document.createElement("button");
        dugmeA.innerHTML="Arzuriraj";
        kontForma.appendChild(dugmeA);
        //arzuriraj podatke
        dugmeA.onclick=(ev)=>{
            const ime = this.kontejner.querySelector(".ime").value;//uzima ime
            const dres =parseInt(this.kontejner.querySelector(".dres").value);//uzima dres
            const selekcija=parseInt(sel.value);//bira selekciju
            this.klubovi[selekcija].azurirajIgracaKluba(ime,dres);
        }
        //obrisi
        dugmeO.onclick=(ev)=>{
            const dres =parseInt(this.kontejner.querySelector(".dres").value);//uzima dres
            const selekcija=parseInt(sel.value);//bira selekciju
            this.klubovi[selekcija].obrisiIgracaKluba(dres);
        }

        //dodaj
        dugme.onclick=(ev)=>{

            const ime = this.kontejner.querySelector(".ime").value;//uzima ime
            const dres =parseInt(this.kontejner.querySelector(".dres").value);//uzima dres
            const selekcija=parseInt(sel.value);//bira selekciju
           // console.log(ime,dres,selekcija);
            if(ime!="" && dres!="")
            this.klubovi[selekcija].arzurirajKlub(ime,0,dres,selekcija+3,1);
            else
            alert("Popunite sva polja");
            //console.log(this.klubovi[selekcija]); 
        }

    }
    crtajKlubove(host){
        const kontKlubovi = document.createElement("div");
        kontKlubovi.classList.add("kontKlubovi");
        
        host.appendChild(kontKlubovi);
        let red;
        //let klub;
        let klubobj;
        for(let i=0;i<this.m;i++)
        {
            red= document.createElement("div");
            red.classList.add("red");
            kontKlubovi.appendChild(red);
            for(let j=0;j<this.n;j++){

                //napravi obj klase klub
                klubobj=new Klub("Naziv kluba "+(j+i*this.m),i,j,this.kapacitetKluba);                
                this.dodajKlub(klubobj);
                klubobj.crtajKlub(red);
            }
        }
    }
    arzurirajSelect()
    {
        let opcija;
        for(let j=0;j<this.m;j++)
        for(let i=0;i<this.n;i++){            
            opcija= document.createElement("option");
            opcija.innerHTML=this.klubovi[i+j*this.m].ime;
            opcija.value=i+j*this.m;            
            this.selekt.appendChild(opcija);
            //console.log(this.klubovi[0].getIme());
        }
    }
}