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
        var test_positions = fence(3,8,2);
        console.log(test_positions);
        if (arrayCompare(test_positions,[3,8]) !== true) {
            console.log("Test failed. Expected result to be [3,8]");
        }
    }

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
        var test_positions = roundNumbers(fence(3,8,4));
        var shouldBeResult = [3,4.67,6.33,8];   
        if (arrayCompare(test_positions, shouldBeResult) !== true) {
            console.log("Test failed. Expected fence to return roughly: " + shouldBeResult);
        } 
    }

    function errorCase() {
        // test if fence throws an error if count < 2
        try {
            fence(3,8,1);
            // if we reach this line, it means fence did not
            // throw an error. (we would be inside the catch block if it did)
            console.log("Test failed: fence should throw an error if count < 2.");
        } catch(err) {}
    }

    testRoundNumbers();
    testfuzzyNumberArrayCompare();

    testArrayCompare();
    trivialCase();
    normalCase();
    errorCase();
}
