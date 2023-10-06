class BankAccount{
    constructor(saldo = 0) {
        this.saldo = saldo;        
    }

    async deposit(){
        try {
            var add_deposit = parseFloat(prompt("Deposit Yang ingin anda simpan"));
            if (isNaN(add_deposit)) {
                alert("Maaf, transaksi Gagal!!!")
                throw new Error("Transaksi Gagal");
            }else{
                this.saldo += add_deposit;
                await this.pesan(`Berhasil menambahkan deposit sebesar Rp. ${add_deposit} , saldo anda sekarang Rp. ${this.saldo}`)
            }
        } catch (error) {
            throw new Error("Error: " + error.message)
        }
        return this.saldo
    }
    async withdraw(){
        try {

            var add_withdraw = parseFloat(prompt("Jumlah Yang ingin anda withdraw"));
            if (isNaN(add_withdraw) || this.saldo <= add_withdraw ) {
                alert("Maaf, transaksi Gagal!!!")
                throw new Error("Transaksi Gagal");
            }else{
            this.saldo -= add_withdraw;
                await this.pesan(`Berhasil withdraw sebesar Rp. ${add_withdraw} , saldo anda sekarang Rp. ${this.saldo}`)
            }
            
        } catch (error) {
            throw new Error("Error: " + error.message)
        }
        return this.saldo
    }
    async pesan(msg) {
        return new Promise((resolve) => {
            setTimeout(() => {
                document.getElementById('saldo').innerHTML = ' Rp. ' + this.saldo.toString()
                alert(msg)
                resolve('success')
            }, 3000)
        })
    }
}

const bankAccount = new BankAccount()
