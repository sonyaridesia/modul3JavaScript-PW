document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('registrationForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Mencegah form dari mengirim data secara default

        // Mendefinisikan array input yang akan divalidasi
        const inputs = [
            document.getElementById('name'), 
            document.getElementById('email'),
            document.getElementById('password')
        ];

        let isValid = true; // Flag untuk menandai validasi

        // Loop melalui setiap input untuk cek kekosongan
        for (let input of inputs) {
            if (input.value.trim() === "") {
                input.style.borderColor = 'red'; // Ubah border jadi merah jika kosong
                isValid = false; // Update flag validasi
                alert('Isian kolom ${input.name} tidak boleh kosong'); // Tampilkan alert sesuai input yang kosong
                break; // Keluar dari loop jika sudah menemukan input kosong
            } else {
                input.style.borderColor = ''; // Reset border jika input terisi
            }
        }

        if (isValid) {
            // Jika semua input terisi, form bisa di-submit atau melakukan aksi selanjutnya
            alert("Pendaftaran berhasil!");
            // this.submit(); // Aktifkan ini untuk submit form jika sudah valid
        }   
    });
});