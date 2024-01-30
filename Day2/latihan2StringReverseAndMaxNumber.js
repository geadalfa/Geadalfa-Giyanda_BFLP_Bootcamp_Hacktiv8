const prompt = require('prompt-sync')();

var inputString = prompt("Masukkan kata: ")

function reversedKata(kata) {
    var outputString = ""

    for (var i = kata.length - 1; i >= 0; i--) {
        outputString += kata[i]
    }
    console.log("Pembalikan kata", outputString)
    if (inputString == outputString) {
        console.log("Palindrom")
    }

}

reversedKata(inputString)

var numArray = [12, 15, 14, 10, 5, 7, 11]
// var numArray = [8, 10, 10, 9]

function multiplyThreeHighest(arr) {
    if (arr.length < 3) {
        console.log("Error")

    } else {

        var uniqueSortedArray = Array.from(new Set(arr)).sort(function (a, b) {
            return b - a
        })

        var hasil = 1

        for (let i = 0; i < 3; i++) {
            hasil *= uniqueSortedArray[i]
        }

        console.log("Hasilnya adalah " + hasil)
    }
}
multiplyThreeHighest(numArray)