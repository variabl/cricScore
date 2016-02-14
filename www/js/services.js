angular.module('cricScore.services', [])

.service('ScoreCard', function() {
  

    
    var score={"totalRuns":0,"totalWickets":0,"totalBallsBowled":0,
    "batsmen":{"b1":{"runs":0,"balls":0,"name":"Batsman 1","status":"striker"},
    "b2":{"runs":0,"balls":0,"name":"Batsman 2","status":"non-striker"},
    "b3":{"runs":0,"balls":0,"name":"Batsman 3","status":"still-to-bat"},
    "b4":{"runs":0,"balls":0,"name":"Batsman 4","status":"still-to-bat"},
    "b5":{"runs":0,"balls":0,"name":"Batsman 5","status":"still-to-bat"},
    "b6":{"runs":0,"balls":0,"name":"Batsman 6","status":"still-to-bat"},
    "b7":{"runs":0,"balls":0,"name":"Batsman 7","status":"still-to-bat"},
    "b8":{"runs":0,"balls":0,"name":"Batsman 8","status":"still-to-bat"},
    "b9":{"runs":0,"balls":0,"name":"Batsman 9","status":"still-to-bat"},
    "b10":{"runs":0,"balls":0,"name":"Batsman 10","status":"still-to-bat"},
    "b11":{"runs":0,"balls":0,"name":"Batsman 11","status":"still-to-bat"}}};
    
    var striker = 1;
    var nonStriker = 2;
    this.crossPitch = function()
    {
        var temp = striker;
        striker = nonStriker ;
        nonStriker = temp;
         score.batsmen["b"+striker].status = "striker";
          score.batsmen["b"+nonStriker].status = "non-striker";
         
    }
    this.newBatsmen = function()
    {score.batsmen["b"+striker].status = "out";
        var large = striker;
        if(nonStriker > large ) {
            large = nonStriker;
        }
        striker = large + 1;
        
         
         score.batsmen["b"+striker].status = "striker";
    }


    this.setRuns = function(runsThisBall)
 { score.totalBallsBowled ++;
  score.batsmen["b"+striker].runs += runsThisBall;
  score.batsmen["b"+striker].balls++;
     score.totalRuns += runsThisBall;
     
         
 };    
 
     this.setWickets = function()
 {    score.totalBallsBowled ++;
 score.batsmen["b"+striker].balls++;
     score.totalWickets ++;
      
 };  
 




 

    this.getScore = function() {return score;}
    
    
  
});
