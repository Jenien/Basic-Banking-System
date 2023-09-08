class BankAccount {
  constructor() {
      this.saldo = 0;
      this.nama = '';
      this.updateNama();
      this.updateSaldo();
  }

  tambahDeposit() {
      let jumlah = window.prompt("Masukkan jumlah deposit yang ingin ditambahkan Kak :");
      if (isNaN(jumlah)) {
          window.alert("Maaf gabisa, jumlah yang ingin ditambahkan harus berupa angka kakak :) ");
          window.alert("Saldo anda skrg masih saja : " + this.saldo + " !! kak");
      } else if (Number(jumlah) < 0) {
          window.alert("Maaf gabisa, jumlah yang ingin ditambahkan tidak boleh minus kakak :) ");
          window.alert("Saldo anda skrg masih saja : " + this.saldo + " !! kak");
      } else if (jumlah === null) {
          window.alert("Maaf gabisa, jumlah yang ingin ditambahkan tidak boleh kosong kakak :) ");
          window.alert("Saldo anda skrg masih saja : " + this.saldo + " !! kak");
      } else if (Number(jumlah) === 0) {
          window.alert("Maaf gabisa, jumlah yang ingin ditambahkan tidak boleh 0 kakak :) ");
          window.alert("Saldo anda skrg masih saja : " + this.saldo + " !! kak");
      } else {
          this.saldo += Number(jumlah);
          window.alert("Saldo berhasil ditambahkan!^^");
          window.alert("Saldo anda skrg : " + this.saldo + " !! kak^^");
          console.log("Saldo yang ditambahkan : " + jumlah);
          this.updateSaldo();
      }
      setTimeout(() => {
        this.updateSaldo();
    }, 5000);
  }

  withdraw() {
      let jumlah = window.prompt("Masukkan jumlah saldo yang ingin diwithdraw kak " + this.nama + " :");

      if (isNaN(jumlah)) {
          window.alert("Maaf gabisa, jumlah yang ingin dikurangi harus berupa angka kakak :) ");
          window.alert("Saldo anda skrg masih saja : " + this.saldo + " !! kak");
          return;
      } else if (Number(jumlah) > this.saldo) {
          window.alert("Maaf gabisa, jumlah yang ingin diwithdraw melebihi saldo yang kakak punya, jadi minus kakak :)");
          window.alert("Saldo anda skrg masih saja : " + this.saldo + " !! kak");
          return;
      } else {
          this.saldo -= Number(jumlah);
          window.alert("Saldo berhasil diwithdraw kak !");
          window.alert("Saldo anda skrg jadii : " + this.saldo + " !! kak^^");
          console.log("Saldo yang diwithdraw : " + jumlah);
          this.updateSaldo();
      }
      setTimeout(() => {
        this.updateSaldo();
    }, 5000);
  }

  resetSaldo() {
      let jawaban = window.prompt("Apakah anda yakin ingin mereset saldo anda kak (y/g) ?");
      if (jawaban === "y" || jawaban === "Y") {
          this.saldo = 0;
          window.alert("Saldo berhasil direset, sudah habis!");
          window.alert("Saldo anda skrg abis, jadii : " + this.saldo);
          this.updateSaldo();
      } else if (jawaban === "g" || jawaban === "G") {
          window.alert("Saldo tidak jadi direset kak");
          window.alert("Saldo anda skrg masih banyak, total : " + this.saldo);
          this.updateSaldo();
      } else {
          window.alert("Gabisa di reset kak,. Jawaban tidak valid, tolong ketik (y/g)");
      }
  }

  ubahData() {
      let jawaban = window.prompt("Apakah anda yakin ingin mengubah data anda kak (y/g) ?");
      if (jawaban === "y" || jawaban === "Y") {
          this.nama = window.prompt("Masukkan nama baru kak : ");
          window.alert("Nama berhasil diganti kak !");
          window.alert("Nama anda skrg jadi : " + this.nama);
          this.updateNama();
      } else if (jawaban === "g" || jawaban === "G") {
          window.alert("Nama tidak jadi diganti kak");
          window.alert("Nama anda skrg masih : " + this.nama);
          this.updateNama();
      } else {
          window.alert("Gabisa diganti kak,. Jawaban tidak valid, nanti tolong ketik (y/g) jika mengulang");
      }
  }

  updateNama() {
      document.getElementById("nama").innerHTML = this.nama;
      console.log("Nama saat ini : " + this.nama);
  }

  updateSaldo() {
      document.getElementById("saldo").innerHTML = this.saldo;
      console.log("Saldo terbaru saat ini : " + this.saldo);
  }

  cekSaldo() {
      window.alert("Saldo anda skrg ADAA banyak, totalnya : " + this.saldo);
  }

  resetData() {
      let jawaban = window.prompt("Apakah anda yakin ingin menghapus data anda kak (y/g) ?");
      if (jawaban === "y" || jawaban === "Y") {
          this.nama = "";
          this.saldo = 0;
          window.alert("Data berhasil dihapus kak !");
      } else if (jawaban === "g" || jawaban === "G") {
          window.alert("Data tidak jadi dihapus kak");
      } else {
          window.alert("Gabisa dihapus kak,. Jawaban tidak valid, tolong ketik (y/g)");
      }
      this.updateNama();
      this.updateSaldo();
  }

  hapusData() {
      let jawaban = window.prompt("Apakah anda yakin ingin menghapus data anda dan Keluar kak (y/g) ?");
      if (jawaban === "y" || jawaban === "Y") {
          window.alert("Data berhasil dihapus kak !, Terimakasih sudah menggunakan ini kak, sampai jumpa lagi ^^");
          window.location.href = "about:blank";
          Window.close();
      } else if (jawaban === "g" || jawaban === "G") {
          window.alert("Oke kak, data tidak jadi dihapus");
      } else {
          window.alert("Jawaban tidak valid, tolong ketik (y/g)");
      }
  }

  riwayat() {
      window.alert("Mohon maaf, fitur belum ada");
  }

}

window.alert("Selamat datang di aplikasi bank kyta kakak !");

let myAccount = new BankAccount();

