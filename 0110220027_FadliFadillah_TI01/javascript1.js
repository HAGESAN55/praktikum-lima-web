function kurs(){
    let Nilai = Number(document.getElementById("dari").value);
    let pilihan = document.getElementById("matauang").value;
    let usd = Number("14100");
    let usg = Number("10477");
    let myr = Number("3416");
    let jpy = Number("134");
    let eur = Number("16656");
    let riy = Number("3741");
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