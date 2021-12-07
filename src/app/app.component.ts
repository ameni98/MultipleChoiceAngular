import { Component } from '@angular/core';
import { element } from 'protractor';
import { Produits } from './produits';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //on affiche le form et le select quand l'état est 1
  pass=1;
  title = 'exercice3';
  //les produits disponibles
  produits=Produits;
  //variable boolean s'il ya sélection pour  les produits disponibles 
  selectedProd=false;
  //variable boolean s'il ya sélection pour  les produits inclus 
  selectedProdInclu=false;
  //les produits inclus
  prodsInclure=[];
  //pour voir quel boutton est cliqué
  btn="";
  onchangeItemProd()
  {
    this.selectedProd=true;  
  }
  onchangeItemProdInclu()
  {
    this.selectedProdInclu=true;
  }
  Ajouter()
  {
    this.btn="Ajouter";
  }
  AjouterTous()
  {
    this.btn="AjouterTous";
  }
  Retirer()
  {
    this.btn="Retirer";
  }
  RetirerTous()
  {
    this.btn="RetirerTous";
  }
  submit(val)
  {
 //si le boutton est ajouter  
if(this.btn=="Ajouter"){
  //on fait parcourt au tableau (contient les produits selectionné)
   val.produits.forEach(element => {
  //on récupére l'indexe élément par élément de produits disponibles
   const a=this.produits.indexOf(element);
   //on enléve l'élement de tableau initiale (produits disponibles)
   this.produits.splice(a,1);
  //on l'ajoute au tableau prodsInclure
   this.prodsInclure.push(element);
  });
  this.selectedProd=false;
  this.btn="";

  }
  //si le boutton est ajouterTous 
else if(this.btn=="AjouterTous"){
  //on fait parcourt au tableau initiale (contient les produits disponibles)
    this.produits.forEach(el=>{
  //on l'ajoute au prodsInclure 
    this.prodsInclure.push(el);
    })
  //on vide le tableau produits(initiales)
    this.produits.splice(0,this.produits.length);
    this.btn="";
  //si le boutton est retirer 
  }
else if(this.btn=="Retirer"){
  //on fait parcourt au tableau produits inclus (contient les produits selectionné)
    val.prodsInclure.forEach(element => {
  //on récupére l'indexe élément par élément de produits inclus
    const a=this.prodsInclure.indexOf(element);
  //on enléve l'élement de tableau inclus (produits inclus)
    this.prodsInclure.splice(a,1);
  //on l'ajoute au tableau produits
    this.produits.push(element);
     });
    this.selectedProdInclu=false;
    this.btn="";
  }
  //si le boutton est retirerTous
else if(this.btn=="RetirerTous"){
  //on fait parcourt au tableau prodsInclure (contient les produits inclus)
    this.prodsInclure.forEach(el=>{
  //on l'ajoute au prodsInclure 
    this.produits.push(el);
    })
  //on vide le tableau produits(inclus)
    this.prodsInclure.splice(0,this.prodsInclure.length);
    this.btn="";
    }
}

}
