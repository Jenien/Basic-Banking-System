window.alert("Selamat datang di aplikasi bank kyta kakak !");

let nama = window.prompt("Masukkan nama kakak ya ^^ : ");
document.getElementById("nama").innerHTML = nama;
window.alert("Halo " + nama + ", Selamat datang di aplikasi bank kyta kakak !");
console.log("Selamat datang di aplikasi bank kyta kakak !");
console.log("Nama Anda saat ini : " + nama);

let saldo = 0;
window.alert("Saldo awal anda: " + saldo +" !!Ayo isi saldo dulu kakak ^^");

let myAccount = new BankAccount();

function tambahSaldo() {
    let jumlah = window.prompt("Masukkan jumlah saldo yang ingin ditambahkan Kak :");
    if (isNaN(jumlah)) {
        window.alert("Maaf gabisa, jumlah yang ingin ditambahkan harus berupa angka kakak :) ");
        window.alert("Saldo anda skrg masih saja : " + saldo + " !! kak");
    }
    else if (Number(jumlah) < 0) {
        window.alert("Maaf gabisa, jumlah yang ingin ditambahkan tidak boleh minus kakak :) ");
        window.alert("Saldo anda skrg masih saja : " + saldo + " !! kak");
    }
    else if (jumlah === null) {
        window.alert("Maaf gabisa, jumlah yang ingin ditambahkan tidak boleh kosong kakak :) ");
        window.alert("Saldo anda skrg masih saja : " + saldo + " !! kak");
    }
    else if (Number(jumlah) === 0) {
        window.alert("Maaf gabisa, jumlah yang ingin ditambahkan tidak boleh 0 kakak :) ");
        window.alert("Saldo anda skrg masih saja : " + saldo + " !! kak");
    }
    else {
    saldo += Number(jumlah);
    window.alert("Saldo berhasil ditambahkan!^^");
    window.alert("Saldo anda skrg : " + saldo+ " !! kak^^");
    console.log("Saldo yang ditambahkan : " + jumlah);
    updateSaldo();
    }
    myAccount.deposit().then((message) => window.alert(message));
}

function kurangiSaldo() {
    let jumlah = window.prompt("Masukkan jumlah saldo yang ingin dikurangi kak " +nama + " :");
    
    if (isNaN(jumlah)) {
        window.alert("Maaf gabisa, jumlah yang ingin dikurangi harus berupa angka kakak :) ");
        window.alert("Saldo anda skrg masih saja : " + saldo + " !! kak");
        return;
    }
    else if (Number(jumlah) > saldo) {
        window.alert("Maaf gabisa, jumlah yang ingin dikurangi melebihi saldo yang kakak punya, jadi minus kakak :)");
        window.alert("Saldo anda skrg masih saja : " + saldo + " !! kak");
        return;
    } else {
        saldo -= Number(jumlah);
        window.alert("Saldo berhasil dikurangi kak !");
        window.alert("Saldo anda skrg jadii : " + saldo + " !! kak^^");
        console.log("Saldo yang dikurangi : " + jumlah);
        updateSaldo();
    }
    myAccount.withdraw().then((message) => window.alert(message));
}

function resetSaldo() {
    let jawaban = window.prompt("Apakah anda yakin ingin mereset saldo anda kak (y/g) ?");
    if (jawaban === "y"|| jawaban === "Y") {
        saldo = 0;
        window.alert("Saldo berhasil direset, sudah habis!");
        window.alert("Saldo anda skrg abis, jadii : " + saldo);
        updateSaldo();
    } else if (jawaban === "g" || jawaban === "G") {
        window.alert("Saldo tidak jadi direset kak");
        window.alert("Saldo anda skrg masih banyak, total : " + saldo);
        updateSaldo();
    }
    else {
        window.alert("Gabisa di reset kak,. Jawaban tidak valid, tolong ketik (y/g)");
    }
}

function ubahData() {
    let jawaban = window.prompt("Apakah anda yakin ingin mengubah data anda kak (y/g) ?");
    if (jawaban === "y" || jawaban === "Y") {
        nama = window.prompt("Masukkan nama baru kak : ");
        window.alert("Nama berhasil diganti kak !");
        window.alert("Nama anda skrg jadi : " + nama);
        updateNama();
    } else if (jawaban === "g" || jawaban === "G") {
        window.alert("Nama tidak jadi diganti kak");
        window.alert("Nama anda skrg masih : " + nama);
        updateNama();
    }
    else {
        window.alert("Gabisa diganti kak,. Jawaban tidak valid, nanti tolong ketik (y/g) jika mengulang");
    }
}

function updateNama() {
    document.getElementById("nama").innerHTML = nama;
    console.log("Nama saat ini : " + nama);
}

function updateSaldo() {
    document.getElementById("saldo").innerHTML = saldo;
    console.log("Saldo terbaru saat ini : " + saldo);
}
function cekSaldo() {
    window.alert("Saldo anda skrg ADAA banyak, totalnya : " + saldo);
}
function resetData(){
    let jawaban = window.prompt("Apakah anda yakin ingin menghapus data anda kak (y/g) ?");
    if (jawaban === "y" || jawaban === "Y") {
        nama = "";
        saldo = 0;
        window.alert("Data berhasil dihapus kak !");
    }
    else if (jawaban === "g"    || jawaban === "G") {
        window.alert("Data tidak jadi dihapus kak");
    }
    else {
        window.alert("Gabisa dihapus kak,. Jawaban tidak valid, tolong ketik (y/g)");
    }
    updateNama();
    updateSaldo();
}
function hapusData(){
    let jawaban = window.prompt("Apakah anda yakin ingin menghapus data anda dan Keluar kak (y/g) ?");
    if (jawaban === "y"|| jawaban === "Y") {
        window.alert("Data berhasil dihapus kak !, Terimakasih sudah menggunakan ini kak, sampai jumpa lagi ^^");
        window.location.href = "about:blank";
        Window.close();
    }
    else if (jawaban === "g" || jawaban === "G") {
        window.alert("Oke kak, data tidak jadi dihapus");
    }
    else {
        window.alert("Jawaban tidak valid, tolong ketik (y/g)");
    }
}

function riwayat(){
    window.alert("Mohon maaf, fitur belum ada");
}
