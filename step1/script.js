/*VARIABLE GLOBALE*/
var lab =[]; 
var size; 

/*TAILLE ET CHOIX DU LABY ALÉATOIRE */
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
  }
/* AFFICHE LE LABY*/
 function displayMaze(){
    let b = document.body;
    let table = document.createElement('table');
    let div = document.createElement('div');
    b.append(div);
    div.append(table);
    div.setAttribute('id','laby')
    $.get("../labyrinthes.json", function(data){
        size= getRandomIntInclusive(3, 25)
        let ex = getRandomIntInclusive(0, 2);
        lab = data[size]["ex-"+ex];

        for(i=0; i<size; i++){
            let tr = document.createElement('tr');
            table.appendChild(tr);
            for(y=0; y<size; y++){   
                let td = document.createElement('td');
                tr.appendChild(td);

                if(i==0 && y==0){                        //Première case
                    td.classList.add('class','first')
                }
                if(i==size-1 && y==size-1){              //Dernière case
                    td.classList.add('class','end')
                }
                if(lab[size*i+y]["walls"][0]== true){
                    td.classList.add('class','north')
                }
                if(lab[size*i+y]["walls"][1]== true){
                    td.classList.add('class','east')
                }
                if(lab[size*i+y]["walls"][2]== true){
                    td.classList.add('class','south')
                }
                if(lab[size*i+y]["walls"][3]== true){
                    td.classList.add('class','west')
                }
            } 
        }

    })
};

displayMaze();

/*PARCOURS LE LABY*/ 
let tabCaseOver=[];
function exploreMaze(currentCase, parentCase){  
    if(lab[currentCase]["walls"][0] == false && currentCase-size != parentCase){
            exploreMaze(currentCase-size, currentCase);
    }
    if(lab[currentCase]["walls"][1] == false && currentCase+1 != parentCase){ 
            exploreMaze(currentCase+1, currentCase);
    }
    if(lab[currentCase]["walls"][2] == false && currentCase+size != parentCase){ 
            exploreMaze(currentCase+size, currentCase);
    }
    if(lab[currentCase]["walls"][3] == false && currentCase-1 != parentCase){ 
            exploreMaze(currentCase-1, currentCase);
    }

}
    

exploreMaze( 0, null);