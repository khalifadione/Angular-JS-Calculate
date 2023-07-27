import { Component, Input } from '@angular/core';
import { boutons } from './button';

@Component({
  selector: 'app-mon-comp',
  templateUrl: './mon-comp.component.html',
  styleUrls: ['./mon-comp.component.css']
})
export class MonCompComponent {
    
     valeur = ""
     boutons =  [... boutons]
     laSomme : number ;
     testBouton(indexe : number){
        
        if (indexe>9) {
          this.valeur = this.valeur + this.boutons[indexe].value
        }
        else{
          this.valeur = this.valeur + (indexe)
        }
       

     }
      calcule(){
        const operateurs = this.valeur.split(/\d+/).filter(Boolean); // Extraction des opérateurs
        const nombres = this.valeur.split(/[\+\-\*\/]/).map(Number); // Extraction des nombres
      
        let somme = nombres[0]; // Initialisez la somme avec le premier nombre
      
        for (let i = 0; i < operateurs.length; i++) {
          somme = this.operation(somme, operateurs[i], nombres[i + 1]);
        }
        
         this.valeur = somme.toString();
         
         
      }

     operation(n : number, s : string, nn : number) : number{
           switch(s){
              case '+' :
               return n + nn
              case '-' :
               return n - nn
              case '*' :
               return n * nn
              case '/' :
               return n / nn
              default :
                return 0
           }
     }
    
    
     
}
