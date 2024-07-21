// Fungsi untuk mengatur tampilan tanggal dan waktu saat halaman dimuat
function showAlert() {
    alert("Link  Download berada dibawah");
}

window.onload = function() {
    var currentDateElement = document.getElementById('currentDate');
    var currentDate = new Date();
    currentDateElement.textContent += currentDate.toDateString();

    // Update waktu setiap detik
    setInterval(updateClock, 1000);
};

// Fungsi untuk mengatur tampilan waktu saat halaman dimuat dan diupdate setiap detik
function updateClock() {
    var currentTimeElement = document.getElementById('currentTime');
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridiem = "AM";

    // Ubah ke format 12 jam
    if (hours > 24) {
        hours = hours - 24;
        meridiem = "PM";
    }

    // Pad menit dan detik tunggal dengan nol di depannya
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;

    // Perbarui elemen waktu dengan waktu saat ini
    currentTimeElement.textContent = "Waktu Sekarang: " + hours + ":" + minutes + ":" + seconds + " " + meridiem;
}

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
      <h2>Sousou no Frieren (9.38)</h2>
      <p>Klik <a href="Frieren.html"> disisni </a>untuk mengetahui informasi lebih lanjut</p>
      `;
  });
  
  document.getElementById("page2Btn").addEventListener("click", function() {
    document.getElementById("content").innerHTML = `
      <h2>Fullmetal Alchemist: Brotherhood (9.09)</h2>
      <p>Klik <a href="Fullmetal Alchemist.html"> disisni </a>untuk mengetahui informasi lebih lanjut</p>
      `;
  });
  
  document.getElementById("page3Btn").addEventListener("click", function() {
    document.getElementById("content").innerHTML = `
      <h2>Steins;Gate (9.07)</h2>
      <p>Klik <a href="Steins;Gate.html"> disisni </a>untuk mengetahui informasi lebih lanjut</p>
      `;
  });
  
  