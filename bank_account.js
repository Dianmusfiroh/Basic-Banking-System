let saldo = 0;
class BankAccount{
   
    tambahSaldo() { 
        var add_saldo = parseFloat(prompt("Saldo Yang ingin anda simpan"));
            saldo += add_saldo;

        console.log(add_saldo);
        if (!isNaN(saldo)) {
           return alert("Saldo sekarang: " + saldo);
        } else {
            return alert("perhatikan tipe data yang dimasukan  tipe data yang dimasukan harus angka")        
        }
    }
    kurangiSaldo() { 
        var kurangi_saldo = parseFloat(prompt("Saldo Yang ingin anda Tarik"));
        saldo -= kurangi_saldo;

        if (!isNaN(kurangi_saldo) && saldo > 0) {
            alert("Saldo sekarang: " + saldo);
        } else if(saldo <= 0) {
            alert("Saldo kurang");
        } else {
            alert("perhatikan tipe data yang dimasukan  tipe data yang dimasukan harus angka")        
        }
    }
   
};

const buttonTambahSaldo = document.getElementById("tambahSaldo");

// Add click event listener to the button
buttonTambahSaldo.addEventListener("click", function() {
   let bank = new BankAccount();
    bank.tambahSaldo();
});
const kurangSaldo = document.getElementById("kurangSaldo");

// Add click event listener to the button
kurangSaldo.addEventListener("click", function() {
   let bank = new BankAccount();
    bank.kurangiSaldo();
});

