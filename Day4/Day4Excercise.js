// Geadalfa Giyanda
// Exercise 1
// A. sebuah array berisi 5 buah-buahan (string).
let fruits = ['apel', 'jeruk', 'pisang', 'anggur', 'mangga']

// B. tambahkan satu buah.
fruits.push('kiwi')
// Output langkah B
console.log("Array setelah menambahkan kiwi:", fruits);

// C. Edit/ubah satu buah.
fruits[2] = 'pepaya'
// Output langkah C
console.log("Array setelah mengubah pisang menjadi pepaya:", fruits)

// D. Kurangi satu buah terakhir dari array.
fruits.pop()
// Output langkah D
console.log("Array setelah menghapus satu buah terakhir:", fruits)

// E. tampilkan isi array di setiap step nya.
console.log("Array setelah inisialisasi:", fruits)

// Exercise 2
// A. objek yang deskripsi diri.
let myProfile = {
    nama_depan: 'Gea',
    nama_belakang: 'Dalfa',
    hobi: ['reading', 'traveling'],
    angka_favorit: 7,
    memakai_kacamata: true
}

// B. property hobi(array of strings), angka_favorit(number), memakai_kacamata(boolean)
console.log("Object setelah inisialisasi:", myProfile)

// C. console.log setiap perubahan.

// D. Cetak nama_lengkap dengan console.log.
console.log("Nama lengkap:", myProfile.nama_depan + ' ' + myProfile.nama_belakang)

// E. Ubah angka_favorit jadi 8.
myProfile.angka_favorit = 8
console.log("Object setelah mengubah angka_favorit menjadi 8:", myProfile)

// F. Tambah hobi.
myProfile.hobi.push("coding")
console.log("Object setelah menambahkan hobi 'coding':", myProfile)

// G. Tambahkan satu property "lulusan" dengan value "Hacktiv8".
myProfile.lulusan = "Hacktiv8"
console.log("Object setelah menambahkan property 'lulusan':", myProfile)

// H. Cetak semua hobi satu per satu menggunakan loop.
console.log("Hobi:")

for (let i = 0; i < myProfile.hobi.length; i++) {
    console.log("- " + myProfile.hobi[i])
}

// I. Cetak semua key milik objek, dan cetak semua values milik objek.
console.log("Keys:", Object.keys(myProfile))
console.log("Values:", Object.values(myProfile))

// J. loop untuk cetak semua property milik objek dengan format key : values.
console.log("Property dengan format key : values:")

for (const key in myProfile) {
    console.log(`${key} : ${myProfile[key]}`)
}

// Exercise 3
// A. make function.
// B. Function tersebut akan mencetak tanggal sekarang ketika dipanggil.
function printCurrentDate() {
    const currentDate = new Date()
    console.log("Tanggal sekarang adalah:", currentDate.toLocaleDateString())
}

printCurrentDate();

// A. next function.
// B. Function tersebut memberikan tanggal sekarang ketika dipanggil.
function getCurrentDate() {
    return new Date().toLocaleDateString();
}

// C. Cetaklah hasil dari function tersebut.
const currentDateResult = getCurrentDate();
console.log("Hasil dari function getCurrentDate:", currentDateResult);

// Exercise 4
function checkOddEven(inputNumber) {
    if (typeof inputNumber !== 'number' || isNaN(inputNumber)) {
        return "Invalid Data";
    }

    // kondisional untuk memeriksa angka tersebut ganjil atau genap.
    if (inputNumber % 2 === 0) {
        return "genap";
    } else {
        return "ganjil";
    }
}

// Test console
console.log(checkOddEven(2));   // Output: genap
console.log(checkOddEven(3));   // Output: ganjil
console.log(checkOddEven(20));  // Output: genap
console.log(checkOddEven(21));  // Output: ganjil
console.log(checkOddEven("abc"));  // Output: Invalid Data

// Javascript logic exercise
// Exercise 1
function compareNumbers(firstNumber, secondNumber) {
    if (secondNumber > firstNumber) {
        return true
    } else if (secondNumber === firstNumber) {
        return -1
    } else {
        return false
    }
}

console.log(compareNumbers(5, 8))
console.log(compareNumbers(5, 3))
console.log(compareNumbers(4, 4))
console.log(compareNumbers(3, 3))
console.log(compareNumbers(17, 2))

//Exercise 2
function reverseString(inputString) {
    // Mengonversi string menjadi array karakter, membalikkan array, dan kemudian menggabungkan kembali menjadi string
    return inputString.split('').reverse().join('')
}

const originalString = "Hello, World!"
const reversedString = reverseString(originalString)

console.log("Original String:", originalString)
console.log("Reversed String:", reversedString)

function sortAlphabetBuiltIn(text) {
    // Mengonversi string ke dalam array karakter, mengurutkannya, dan kemudian menggabungkannya kembali menjadi string
    return text.split('').sort().join('')
}

// Contoh penggunaan fungsi
const unsortedText = "Anjoy Ginanjoy"
const sortedTextBuiltIn = sortAlphabetBuiltIn(unsortedText)

console.log("Unsorted Text:", unsortedText)
console.log("Sorted Text (Built-In):", sortedTextBuiltIn)

function sortAlphabetCustom(text) {
    // Mengonversi string ke dalam array karakter
    const charArray = text.split('')

    // Implementasi algoritma sorting sederhana (Bubble Sort)
    for (let i = 0; i < charArray.length - 1; i++) {
        for (let j = 0; j < charArray.length - i - 1; j++) {
            if (charArray[j] > charArray[j + 1]) {
                // Menukar posisi jika karakter saat ini lebih besar dari karakter berikutnya
                const temp = charArray[j]
                charArray[j] = charArray[j + 1]
                charArray[j + 1] = temp
            }
        }
    }

    // Menggabungkan kembali array ke dalam string
    return charArray.join('')
}

// Contoh penggunaan fungsi
const sortedTextCustom = sortAlphabetCustom(unsortedText);

console.log("Sorted Text (Custom):", sortedTextCustom);

function isArithmetic(arr) {
    // Jika panjang array kurang dari 2, langsung kembalikan true karena array yang kosong atau hanya satu elemen dianggap deret aritmatika
    if (arr.length < 2) {
        return true;
    }

    // Hitung selisih pertama
    const firstDifference = arr[1] - arr[0];

    // Loop untuk memeriksa apakah selisih setiap pasangan angka konsisten
    for (let i = 1; i < arr.length - 1; i++) {
        if (arr[i + 1] - arr[i] !== firstDifference) {
            return false
        }
    }

    return true
}

// Contoh penggunaan fungsi
const contoh1 = [2, 4, 6, 8]
console.log(isArithmetic(contoh1)) // Output: true

const contoh2 = [2, 4, 6, 9]
console.log(isArithmetic(contoh2)) // Output: false

function hasDistance3AB(inputString) {
    for (let i = 0; i < inputString.length - 4; i++) {
        if (inputString[i] === 'a' && inputString[i + 4] === 'b') {
            return true
        }
    }
    return false;
}

// Contoh penggunaan fungsi
const example1 = "abc"
console.log(hasDistance3AB(example1)) // Output: false

const example2 = "a123b"
console.log(hasDistance3AB(example2)) // Output: true

const example3 = "abcd"
console.log(hasDistance3AB(example3)) // Output: false

function hitungFPB(angka1, angka2) {
    // Menentukan nilai minimum dari dua bilangan
    let minAngka = Math.min(angka1, angka2)

    // Mencari FPB dengan iterasi mundur dari nilai minimum
    for (let i = minAngka; i >= 1; i--) {
        if (angka1 % i === 0 && angka2 % i === 0) {
            return i // Mengembalikan FPB saat pertama kali ditemukan
        }
    }

    return 1 // Jika tidak ditemukan, FPB minimal adalah 1
}

// Contoh penggunaan fungsi
const bilangan1 = 12
const bilangan2 = 18

const fpbResult = hitungFPB(bilangan1, bilangan2)
console.log(`FPB dari ${bilangan1} dan ${bilangan2} adalah: ${fpbResult}`)

function isPrime(number) {
    // Bilangan prima harus lebih besar dari 1
    if (number <= 1) {
        return false
    }

    // Loop untuk memeriksa pembagi dari 2 hingga akar kuadrat dari angka
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false
        }
    }

    return true
}

const angka1 = 17
const angka2 = 20

console.log(`${angka1} adalah bilangan prima: ${isPrime(angka1)}`) // Output: true
console.log(`${angka2} adalah bilangan prima: ${isPrime(angka2)}`) // Output: false

function findPrimesInRange(firstNumber, secondNumber) {
    const primes = [];

    // Fungsi untuk menentukan apakah suatu angka adalah bilangan prima
    function isPrime(number) {
        if (number <= 1) {
            return false
        }
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                return false
            }
        }
        return true
    }

    // Loop untuk mencari bilangan prima di antara angkaPertama dan angkaKedua
    for (let i = firstNumber; i <= secondNumber; i++) {
        if (isPrime(i)) {
            primes.push(i)
        }
    }

    return primes
}

const angkaPertama = 10
const angkaKedua = 30

const primesInRange = findPrimesInRange(angkaPertama, angkaKedua)
console.log(`Bilangan prima di antara ${angkaPertama} dan ${angkaKedua}: ${primesInRange}`)

// Exercise Callback & Promise 1
// Fungsi untuk melakukan permintaan ke API dengan fetch
function fetchData(url, callback) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json()
        })
        .then(data => {
            // Panggil callback dengan data yang diperoleh dari API
            callback(null, data)
        })
        .catch(error => {
            // Panggil callback dengan error jika terjadi masalah
            callback(error, null)
        });
}

// Fungsi callback yang akan dipanggil setelah mendapatkan data dari API
function handleData(error, data) {
    if (error) {
        console.error('Error:', error)
    } else {
        console.log('Data from API:', data)
        // Lakukan pengolahan data lainnya di sini
    }
}

const apiUrl = 'https://jsonplaceholder.typicode.com/todos/1';
fetchData(apiUrl, handleData);

// Exercise callback & promise 2
// Fungsi untuk melakukan permintaan ke API dengan menggunakan Promise
function fetchData2(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                // Resolve Promise dengan data yang diperoleh dari API
                resolve(data);
            })
            .catch(error => {
                // Reject Promise dengan error jika terjadi masalah
                reject(error);
            });
    });
}

fetchData2(apiUrl)
    .then(data => {
        console.log('Data from API:', data)
    })
    .catch(error => {
        console.error('Error:', error)
    })

function fetchData3(url) {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json()
        });
}

// Exercise Promise chaining API
const apiUrl3 = 'https://jsonplaceholder.typicode.com/posts/1'

fetchData3(apiUrl3)
    .then(postData => {
        console.log('Post Data:', postData)
        return fetchData3(`https://jsonplaceholder.typicode.com/comments?postId=${postData.id}`)
    })
    .then(commentData => {
        console.log('Comment Data:', commentData);
    })
    .catch(error => {
        console.error('Error:', error)
    })

