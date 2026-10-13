// ===== Bagian A: getElementsByClassName =====
const buah = document.getElementsByClassName ("buah");
console.log(buah); // lihat koleksinya
console.log(buah.length); // jumlah elemen
console.log(buah[0]); // elemen pertama


// mengubah elemen tertentu
buah[0].style.color = "red";

// mengubah semua elemen dengan perulangan
for (let i = 0; i < buah.length; i++) {
    buah[i].computedStyleMap.fontWeigth = "bold";
    buah[i].textContent = (i +1) +"." + buah[1].textContent;
}

// ===== Bagian B: getElementsByTagName =====
const semuaLi = document.getElementsByTagName ("li");

console.log(semuaLi.length);

for (let i = 0; i < semuaLi.length - 1; i++) {
    semuaLi[i].style.backgroundColor = "Lightyellow";
    semuaLi[2].style.backgroundColor = "lightblue";
}

const h2 = document.getElementsByTagName ("h2");

console.log(h2.length);

for (let i = 0; i < h2.length; i++) {
    h2[i].style.backgroundColor = "Teal";
}