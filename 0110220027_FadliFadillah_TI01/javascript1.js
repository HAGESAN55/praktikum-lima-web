function kurs(){
    let Nilai = Number(document.getElementById("dari").value);
    let pilihan = document.getElementById("matauang").value;
    let usd = Number("9915");
    let usg = Number("13472");
    let myr = Number("874");
    let jpy = Number("120");
    let eur = Number("15888");
    let riy = Number("3592");
    if (isNaN(Nilai)) {
        alert("Isilah Menggunakan angka!");
    }
    else{
        if (pilihan == "dollar"){
            hasil = Nilai * usd;
            document.getElementById("hasil").innerHTML = hasil;
        }
        if (pilihan == "dollarsg"){
            hasil = Nilai * usg;
            document.getElementById("hasil").innerHTML = hasil;
        }
        if (pilihan == "rm"){
            hasil = Nilai * myr;
            document.getElementById("hasil").innerHTML = hasil;
        }
        if (pilihan == "yenj"){
            hasil = Nilai * jpy;
            document.getElementById("hasil").innerHTML = hasil;
        }
        if (pilihan == "euro"){
            hasil = Nilai * eur;
            document.getElementById("hasil").innerHTML = hasil;
        }
        if (pilihan == "riyal"){
            hasil = Nilai * riy;
            document.getElementById("hasil").innerHTML = hasil;
        }
    }
}
