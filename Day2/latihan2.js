const prompt = require('prompt-sync')();

var inputSegitiga = prompt("Masukkan Jumlah Bintang: ")

function generateTriangle(inputValue) {

    for (let i = 0; i < inputSegitiga; i++) {
        let row = ''

        for (let j = 0; j < inputSegitiga - i - 1; j++) {
            row += ' '
        }

        for (let k = inputSegitiga - i - 1; k < inputSegitiga; k++) {
            if (k % 2 == 0) {
                row += '#'
            } else {
                row += '*'
            }
        }

        console.log(row)
    }

    for (let i = 1; i <= inputSegitiga; i++) {
        let row = '';

        for (let j = 0; j < inputSegitiga - i; j++) {
            row += ' ';
        }

        for (let k = 0; k < i * 2 - 1; k++) {
            if (k % 2 === 0) {
                row += '#';
            } else {
                row += '*';
            }
        }

        console.log(row);
    }

}

generateTriangle(inputSegitiga)

var umur = [30, 32, 24, 26, 19, 17, 81]

function bubbleSort(arr) {
    var n = arr.length;

    for (var i = 0; i < n - 1; i++) {
        for (var j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

bubbleSort(umur);

for (var i = 0; i < umur.length; i++) {
    console.log(umur[i]);
}

