function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
  }

 function displayMaze(){

    $.get("../labyrinthes.json", function(data){
        let taille= getRandomIntInclusive(3, 25);
        let ex = getRandomIntInclusive(0, 2);
        let table = document.createElement('table');
        let b = document.body;
        b.append(table);

        console.log(taille);
        let lab = data[taille]["ex-"+ex];

        for(i=0; i<taille; i++){
            let tr = document.createElement('tr');
            table.appendChild(tr);
                for(y=0; y<taille; y++){   
                let td = document.createElement('td');
                tr.appendChild(td);
                if(lab[taille*i+y]["walls"][0]== true){
                    td.classList.add('class','north')
                }
                if(lab[taille*i+y]["walls"][1]== true){
                    td.classList.add('class','east')
                }
                if(lab[taille*i+y]["walls"][2]== true){
                    td.classList.add('class','south')
                }
                if(lab[taille*i+y]["walls"][3]== true){
                    td.classList.add('class','west')
                }
                } 
        }

    })
};
displayMaze();