angular.module('cricScore.controllers', [])

    .controller('ScoreCtrl', function ($scope, ScoreCard, $window) {

  $scope.dev_width = $window.innerWidth;
    $scope.dev_height = $window.innerHeight;
    
   

        $scope.score = ScoreCard.getScore()
        $scope.$watch('score.totalBallsBowled', function () {
            $scope.overs = Math.floor($scope.score.totalBallsBowled / 6);
            $scope.ballsThisOver = $scope.score.totalBallsBowled % 6;
            if ($scope.ballsThisOver == 0 && $scope.overs > 0) {
                ScoreCard.crossPitch();
            };
        });

        $scope.addRuns = function (runsThisBall) {
            ScoreCard.setRuns(runsThisBall);
            if (runsThisBall % 2 == 1) {
                ScoreCard.crossPitch();
            };
        };
        
        $scope.addWickets = function () {

            ScoreCard.setWickets();
            ScoreCard.newBatsmen();
        };


    })
    
    .controller('BatsmenCtrl', function ($scope,  ScoreCard) {
        // With the new view caching in Ionic, Controllers are only called
        // when they are recreated or on app start, instead of every page change.
        // To listen for when this page is active (for example, to refresh data),
        // listen for the $ionicView.enter event:
        //
        //$scope.$on('$ionicView.enter', function(e) {
        //});


        $scope.score = ScoreCard.getScore();

    });