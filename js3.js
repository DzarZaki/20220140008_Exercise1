// Daftar gambar latar belakang
var backgroundImages = ["background/A.jpg", "background/B.jpg", "background/C.jpg", "background/D.jpg", "background/E.jpg", "background/F.jpg", "background/G.jpg", "background/H.jpg", "background/I.png", "background/J.png", "background/K.jpg", "background/L.png", "background/M.jpg", "background/N.jpg", "background/O.jpg", "background/P.jpg", "background/Q.jpg", "background/R.jpg", "background/S.jpg", "background/T.jpg"];
var currentBackgroundIndex = 0;

// Fungsi untuk mengubah latar belakang secara otomatis setiap beberapa detik
function changeBackground() {
    document.body.style.backgroundImage = "url('" + backgroundImages[currentBackgroundIndex] + "')";
    currentBackgroundIndex = (currentBackgroundIndex + 1) % backgroundImages.length;
}

// Ubah latar belakang setiap 5 detik
setInterval(changeBackground, 5000);

document.getElementById("page1Btn").addEventListener("click", function() {
    document.getElementById("content").innerHTML = `
      <h2>Sousou no Frieren</h2>
      <p>Klik <a href="Frieren.html"> disisni </a>untuk mengetahui informasi lebih lanjut</p>
      `;
  });
  
  document.getElementById("page2Btn").addEventListener("click", function() {
    document.getElementById("content").innerHTML = `
      <h2>Halaman Utama</h2>
      <p>Klik <a href="Fullmetal Alchemist.html"> disisni </a>untuk mengetahui informasi lebih lanjut</p>
      `;
  });
  
  document.getElementById("page3Btn").addEventListener("click", function() {
    document.getElementById("content").innerHTML = `
      <h2>Steins;Gate</h2>
      <p>Klik <a href="Steins;Gate.html"> disisni </a>untuk mengetahui informasi lebih lanjut</p>
      `;
  });