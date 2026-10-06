// 1. Memilih elemen
const judul = document.getElementById("judul");
const sapaan = document.getElementById("sapaan");

// 2. Melihat elemen di console
console.log(judul);
console.log(sapaan);

// 3. Mengubah isi teks
judul.textContent = "Judul sudah diubah";

// 4. Mengubah warna
judul.style.color = "crimson";

// 5. Menegubah isi dengan tag HTML
sapaan.innerHTML = "Halo, saya sedang <b>belajar DOM</b>!";

// 6. Mencoba id yang tidak ada
const hantu = document.getElementById("tidakada");
console.log(hantu);

const kelas = document.getElementById("kelas");
console.log(kelas);
kelas.textContent = "Kelas ku yang sebenarnya adalah X RPL 6";
kelas.style.fontSize = "30px";
