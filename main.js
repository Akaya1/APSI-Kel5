document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// dropdown untuk mobile
document.getElementById('mobile-menu-toggle').addEventListener('click', function () {
    var mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
});

// penghitungan total harga
document.getElementById('quantity').addEventListener('input', updateTotal);
document.getElementById('product').addEventListener('change', updateTotal);

function updateTotal() {
    const productElement = document.getElementById('product');
    const quantityElement = document.getElementById('quantity');
    const totalElement = document.getElementById('total');

    const price = productElement.options[productElement.selectedIndex].getAttribute('data-price');
    const quantity = quantityElement.value;

    const totalPrice = price * quantity;
    totalElement.value = totalPrice.toLocaleString('id-ID');
}


// form untuk mengirim ke whatsapp
document.getElementById('orderForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const product = document.getElementById('product').value;
    const quantity = document.getElementById('quantity').value;
    const total = document.getElementById('total').value;
    const message = document.getElementById('message').value;

    const phoneNumber = '628xxxxxxxxxx'; // Nomor yang ingin dituju

    const whatsappMessage = `Halo, saya ingin memesan:\n` +
        `Nama: ${name}\n` +
        `Email: ${email}\n` +
        `Alamat: ${address}\n` +
        `Produk: ${product}\n` +
        `Jumlah: ${quantity}\n` +
        `Total Harga: ${total}\n` +
        `Pesan Tambahan: ${message}`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappURL, '_blank');
});

// Kontrol Animasi
document.addEventListener("DOMContentLoaded", function () {
    // Menggunakan event scroll untuk mengecek saat discroll
    window.addEventListener("scroll", function () {
        // Ambil semua elemen yang memiliki class animate__animated
        var elements = document.querySelectorAll('.animate__animated');
        // Loop melalui setiap elemen
        elements.forEach(function (el) {
            // Cek apakah elemen masuk dalam viewport
            if (isElementInViewport(el)) {
                // Tambahkan class animate__fadeInUp jika tidak memiliki animate__pulse
                if (!el.classList.contains('animate__pulse')) {
                    el.classList.add('animate__fadeInUp');
                }
            } else {
                el.classList.remove('animate__fadeInUp');
            }
        });
    });

    // Fungsi untuk mengecek apakah elemen dalam viewport
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
});