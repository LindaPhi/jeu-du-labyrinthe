// CHARGE LE FICHIER JSON
$.get("../labyrinthes.json", function(data){
    let maze =[]; 
    let size; 

    /*TAILLE ET CHOIX DU LABY ALÉATOIRE */
    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min +1)) + min;
    }
    /* STEP1 - AFFICHE LE LABY*/
    function displayMaze(){
        let b = document.body;
        let table = document.createElement('table');
        let div = document.createElement('div');
        b.append(div);
        div.append(table);
        div.setAttribute('id','laby')
            size= 6//getRandomIntInclusive(3, 25)
            let ex = getRandomIntInclusive(0, 2);
            maze = data[size]["ex-"+ex];

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
                    if(maze[size*i+y]["walls"][0]== true){
                        td.classList.add('class','north')
                    }
                    if(maze[size*i+y]["walls"][1]== true){
                        td.classList.add('class','east')
                    }
                    if(maze[size*i+y]["walls"][2]== true){
                        td.classList.add('class','south')
                    }
                    if(maze[size*i+y]["walls"][3]== true){
                        td.classList.add('class','west')
                    }
                } 
            }

    };

    /*STEP3- PARCOURS LE LABY*/ 
    // let tabCaseOver=[];
    function exploreMaze( currentCase, parentCase){ 
        let end; 
        console.log(currentCase);

        if(currentCase != maze.length-1){

            if(maze[currentCase]["walls"][0] == false && currentCase-size != parentCase){    
                if (exploreMaze(currentCase-size, currentCase)){
                    return true;
                }     
            }
            if(maze[currentCase]["walls"][1] == false && currentCase+1 != parentCase){ 
                if (exploreMaze(currentCase+1, currentCase)){
                    return true;
                }     
            }
            if(maze[currentCase]["walls"][2] == false && currentCase+size != parentCase){
                if (exploreMaze(currentCase+size, currentCase)){
                    return true;
                }     
            }
            if(maze[currentCase]["walls"][3] == false && currentCase-1 != parentCase){ 
                if (exploreMaze(currentCase-1, currentCase)){
                    return true;
                }     
            }
            return false;
        }
        return true;
    }

    function getNeighbors(){
        for (let i=0; i<this.walls.length; i++){
            if(maze[currentCase]["walls"][0] == false && currentCase-size != parentCase){    
                if (exploreMaze(currentCase-size, currentCase)){
                    return true;
                }     
            }
        }
    }

    displayMaze();
    exploreMaze( 0, null);
})