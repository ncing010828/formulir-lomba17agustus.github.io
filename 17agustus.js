// Menampilkan prompt nama
let userName = prompt("Masukkan nama panggilanmu:");
if (userName) {
    document.getElementById("ucapan").innerHTML = "Halo " + userName + "! Silakan daftar lomba yang kamu mau!";
}

// Fungsi validasi form
function validasiForm() {
    let nama = document.getElementById("nama").value;
    let nisn = document.getElementById("nisn").value;
    let email = document.getElementById("email").value;

    // Validasi nama: hanya huruf dan spasi
    let namaValid = /^[A-Za-z\s]+$/;
    if (!namaValid.test(nama)) {
        alert("Nama tidak boleh mengandung angka atau simbol.");
        return false;
    }

    // Validasi NISN: hanya angka
    let nisnValid = /^[0-9]+$/;
    if (!nisnValid.test(nisn)) {
        alert("Nomer Telfon hanya boleh terdiri dari angka.");
        return false;
    }

    // Validasi email: format email standar
    let emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailValid.test(email)) {
        alert("Format email tidak valid.");
        return false;
    }

    // Konfirmasi pengiriman
    let konfirmasi = confirm("Apakah data sudah benar dan ingin dikirim?");
    if (!konfirmasi) {
        alert("Pengiriman dibatalkan.");
        return false;
    }

    alert("Terima kasih sudah mendaftar, " + nama + "!");
    return true;
}