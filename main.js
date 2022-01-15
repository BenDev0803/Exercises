// Create an object that simulates a bowling alley. In this object we will have to have a list with the players and their scores. We will have to add methods that allow us to: calculate the final score of each player, add new players, decide the winner. 

let bowling = {
// array with object players created with scores as empty value
    'players' : [
        {'name' : 'John' , 'scores' : []},
        {'name' : 'Jack' , 'scores' : []},
        {'name' : 'Lisa' , 'scores' : []},
    ],
// addPlayer function created.this function pushes a new player with an empty value as score
    'addPlayer' : function(name){

        this.players.push({'name' : name , 'scores' : [] })

    },
// setScores function for each elements is applied a loop that adds numbers randomly from 1 to ten, ten times. 
//at the end pushes the result to the object players
    'setScores' : function(){
        this.players.forEach(el => {

            for(let i = 1; i<= 10; i++){
              el.scores.push( Math.round( Math.random()*(10 - 1) + 1  ) )
            }

        })
    } ,
// function setFinalScore : the variable mapped is assigned to the method .map() applied to the object players.
//every element of the array gets substituted with the finalscore that reduces every score to one finalresult.
    'setFinalScore' : function(){

        let mapped = this.players.map( el =>{

            el.finalScore = el.scores.reduce( (acc,n) => acc + n  )

            return el

        } )

        this.players = mapped
    },
// setWinner function: sorts the players from the highest score to the lowest score.
// a condition at the end is applied that outputs if a player wins or the match ends in a draw
    'setWinner' : function(){

        this.players.sort( (a,b) => b.finalScore - a.finalScore  )

        if(this.players[0].finalScore > this.players[1].finalScore){
            console.log(`The winner of the game is ${this.players[0].name}`);
        } else {
            console.log('match result in draw');
        }

    }

}


bowling.addPlayer('Michael')
bowling.setScores()
bowling.setFinalScore()

console.log(bowling);
bowling.setWinner()
