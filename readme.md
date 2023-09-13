# Portfolio

Dans cette réalisation il faut privilégier une structure html et css propre et une intéraction d'interface piloter par javascript.
Il est préférable d'installer Babel par le CLI et surtout le faire si node.js est installé dans la l'environnement de développement y compris NPM : Node Package Manager.


## Installation de Babel
```cmd
vérifier la version npm
puis npm init
npm install --save-dev babel-cli babel-preset-env

Ajouter dans le fichier jSon la ligne de code qui suit : "build": "babel --no-babelrc src -w -d js --preset=env"
Cibler le répertoire "SRC" et commande :npm run build

Nota bene : pour installer le CLI faire d'abord npm init pour le package.json
```
> Afficher la page : [index](https://giusmili.github.io/cours_js_SIO_23/)

# Cours Javascript - 2023

## Exemple de création d'Objet en JS
```js

// Your code here!
const Personne = ({
    //Your constructor
    constructor(nom){
        this.nom = nom;
        
    },
     print(){ //getter
            return `${this.nom}`
    }
})
//output
let user = Object.create(Personne)
user.nom = "Gius"
console.log(user.nom)

/* D'autres façons */

let User = function(nom){
    this.nom = nom;
}

const new_user = new User("Marc")
console.log(new_user.nom)

/* sans constructeur */

const Message = ({
    login :"barry",
    pwd : "123!full",
    output_f(){
        return `${this.login} : ${this.pwd}`
    }
})

let user_dial = Message.output_f()
console.log(user_dial)



```
## Particularité d'une fonction anonyme

```js
(()=>{
    // début de la fonction

    const User = ({
        login :"misteryman",
        psw : "xxxxx",
        out_put(){
            return `Login ${this.login} : MDP ${this.psw}`
        }
        
    })
    
    let test_out_put  =  User.out_put()
    let new_user = Object.create(User)
    new_user.login = "Bond"
    new_user.psw = "007"
    console.log(test_out_put)
    console.log(new_user.out_put())
   
   //fin de la fonction
})()

```
Toutes les instructions de la fonction ne seront pas visibles à l'extérieur d'elle même

## Cas pratique : calculer le prix de chaque produit HT et TTC
```js
    let prod_1 = 20
    let prod_2 = 10
    const tabprod = []
    tabprod.push(prod_1, prod_2)
    let ht = prod_1+prod_2
    console.log(ht)
    let total = (prod_1+prod_2) * 19.6 / 100
    console.log(total+ht)
    console.log(tabprod.length+" Product")
```

## Une autre méthode

```js
    let prod_prix_1 = 10;
    let prod_prix_2 = 30;

    let calc = (prix_1, prix_2)=>{
        return prix_1 + prix_2;
    }

    let taxe = 19.6
    let print_out = calc(prod_prix_1, prod_prix_2)
    const tabprod = [prod_prix_1, prod_prix_2]
    tabprod.push()
    
    console.log(print_out)
    let total = print_out * 19.6 / 100
    console.log(total+print_out)
    console.log(`${tabprod.length} produits`)

    //event button
    const btn_test = document.querySelector(".gallery-primary-logo li")
    let calc = true
    btn_test.addEventListener("click", ()=>{

        calc == true ?
        calc = false :
        calc = true;
        console.log(calc) // print true | false
    })
```



