function drawRope(horizontalPositions, verticalPositions, radius){
    if (horizontalPositions.length !== verticalPositions.length) {
        throw new Error("horizontalPositions.length does not match verticalPositions.length");
    }

    var oldx, oldy;
    for(var i=0; i<horizontalPositions.length; i++) {
        var x = horizontalPositions[i];
        var y = verticalPositions[i];

        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 2 * Math.PI);
        ctx.fill();

        if (i !== 0) {
            ctx.moveTo(x, y); 
            ctx.lineTo(oldx, oldy); // das Objekt ctx hat die Eigenschaft lineTo, die eine Funktion ist. Die Funktion lineTo wird mit zwei Parametern aufgerufen: werte oldx, oldy 
            ctx.stroke();
        }

        oldx = x;
        oldy = y;
    }
}

function sinusShape(xps) {
    var yps = [];
    for (var i=0; i < xps.length; i++){
        var y = Math.sin(xps[i] * Math.PI / 180) * -120 + 180;
        yps.push(y);

        // -120 = Skalierungsfaktor (Amplitüde)
        // 180 = Translation (Verschiebung auf der y-Achse)
        // PI/180 = SKalierung von x (ist kleiner als 1, daher: verringert die Frequenz)
    }
    console.log("die X-Positionen:   " + xps);
    console.log(yps);
    return yps;
} 


function calcXpositions(start, end, count) {
    if (count<2) {
        throw new Error("Count must be two or higher");
    }
    var distance = (end-start) / (count - 1);
    console.log(distance);

    var xCoordinates = [];  //evtl. die Strecke erst halbieren und dann nochmal in kleinere Teile zerlegen um Fehler zu verteilen
    for (var n=0; n<count; n++) {
        var xn = start + n * distance;
        xCoordinates.push(xn);
    }
    console.log (xCoordinates);
    return xCoordinates;
}


var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

//var x_positions = [20, 40, 200, 250, 260];
var x_positions = calcXpositions(20, 340, 23); //der Variablen x_positions wird der return-wert zugewiesen 
var y_positions = sinusShape(x_positions);

function arrayCompare(array1, array2) {
    if (array2.length != array1.length) {    
        return false;
    } 

    for (var i = 0; i < array2.length; i++) {
        if (array2[i] != array1[i]) {
            return false;
        }
    } 
    return true;
}


function unitTests() {

    function testArrayCompare() {
        if (arrayCompare([2,3,4],[2]) !== false) {
            console.log("Test failed. arrayCompare() should return false, when paramters don't have the same length.");
        }
        if (arrayCompare([],[]) !== true) {
            console.log("Test failed. arrayCompare() should return true, when comparing two empty arrays.");
        }
        if (arrayCompare([2,3,4],[2,3,5]) !== false) {
            console.log("Test failed. arrayCompare() should return false, when paramters don't have the same elements.");
        }
        if (arrayCompare([2,3,4],[2,3,4]) !== true) {
            console.log("Test failed. arrayCompare() should return true, when paramters are equal.");
        }
    }
    
    function trivialCase() {
        var test_positions = calcXpositions(3,8,2);
        console.log(test_positions);

    }

    /*    
    function trivialCase(array1, array2){
        console.log(array1);
        console.log(array2);

        if (array1 === array2) return true;
        if (array1.length != array2.length) return false;
            console.log("Test failed. Length of arrays is not the same.");
        for ( var i = 0; i < array1.length; i++ ){
            if (array1[i] != array2[i]);
            console.log("Test failed. Arrays are not equal.");
            return false;
        }
        return true;
    }
    */

    function roundNumbers(numbers) { // gets values from normalCase 
        var roundedNumbers = [];
        for (i=0; i<numbers.length; i++) {
            var x = Math.round(numbers[i]*100)/100;
            roundedNumbers.push(x);
        }
        console.log(roundedNumbers);
        return roundedNumbers; // returns value [array] to var test_positions
    }

    function testRoundNumbers() {
        var numbers = roundNumbers([3, 8.25, 4.5555]);
        var expectedNumbers = "3,8.25,4.56";
        if (numbers.toString() !== expectedNumbers) {
            console.log("Test failed. Expected " + expectedNumbers);
        }
        var emptyArray = roundNumbers([]);
        if (emptyArray.length !== 0) {
            console.log("Test failed. Expected an empty array.");
        }
    }



    function fuzzyNumberArrayCompare(array1, array2) {
        var roundedArray1 = roundNumbers(array1);
        var roundedArray2 = roundNumbers(array2); 
        if (roundedArray1.toString() == roundedArray2.toString()) {
            return true;
        } else {
            return false;
        } 
    }

   function testfuzzyNumberArrayCompare() {
       if (fuzzyNumberArrayCompare([], []) === false) {
           console.log("Test failed. Expected two empty arrays to be equal.");
       }
       if (fuzzyNumberArrayCompare([3], [3]) === false) {
           console.log("Test failed. Expected [3] to be equal to [3].");
       }
       if (fuzzyNumberArrayCompare([3.23], [3.225]) === false) {
           console.log("Test failed. Expected [3.23] to be equal to [3.225].");
       }
   } 


    function normalCase() {
        var test_positions = roundNumbers(calcXpositions(3,8,4));
        console.log(test_positions);
        var shouldBeResult = [3,4.67,6.33,8];   
        if (test_positions.length != shouldBeResult.length) {    
            console.log("Test failed. Expected test_position.length to be equal to" + shouldBeResult.length); // Fehlermeldung ok?
        } 

        for (var i = 0; i < test_positions.length; i++) {
            for (var j = 0; j < shouldBeResult.length; j++){   
                if (test_positions[i] !== shouldBeResult[j]) {
                    console.log("Test failed. Expected content to be equal.");
                    return false;
                }
            }
        } return true;
    }

    function errorCase() {
        // test if calcXpositions throws an error if count < 2
        try {
            calcXpositions(3,8,1);
            // if we reach this line, it means calcXpositions did not
            // throw an error. (we would be inside the catch block if it did)
            console.log("Test failed: calcXpositions should throw an error if count < 2.");
        } catch(err) {}
    }
    var test_positions = roundNumbers(calcXpositions(3, 8, 4));
    
    //var array1 = calcXpositions(3,8,2);
    //var array2 = [3, 8];
    testRoundNumbers();
    testfuzzyNumberArrayCompare();

    //trivialCase(array1, array2);
    testArrayCompare();
    trivialCase();
    normalCase();
    errorCase();
        
}

// im array von x_positions werden die x positionen benannt
// anhand dieser werte kann die funktion sinusShape die y_positions berechnen
//test(test_positions);
unitTests();
drawRope(x_positions, y_positions,6);
console.log('Hallo Welt');
