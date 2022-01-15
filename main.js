// Create an object that simulates a bowling alley. In this object we will have to have a list with the players and their scores. We will have to add methods that allow us to: calculate the final score of each player, add new players, decide the winner. 

let bowling = {

    'players' : [
        {'name' : 'John' , 'scores' : []},
        {'name' : 'Jack' , 'scores' : []},
        {'name' : 'Lisa' , 'scores' : []},
    ],

    'addPlayer' : function(name){

        this.players.push({'name' : name , 'scores' : [] })

    },

    'setScores' : function(){
        this.players.forEach(el => {

            for(let i = 1; i<= 10; i++){
              el.scores.push( Math.round( Math.random()*(10 - 1) + 1  ) )
            }

        })
    } ,

    'setFinalScore' : function(){

        let mapped = this.players.map( el =>{

            el.finalScore = el.scores.reduce( (acc,n) => acc + n  )

            return el

        } )

        this.players = mapped
    },

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
