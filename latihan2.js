document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('registrationForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Mencegah form dari mengirim data secara default

        // Mendefinisikan array input yang akan divalidasi
        const inputs = [
            { element: document.getElementById('name'), label: 'Nama' }, 
            { element: document.getElementById('email'), label: 'Email' },
            { element: document.getElementById('password'), label: 'Kata Sandi' },
            { element: document.getElementById('confirmPassword'), label: 'Konfirmasi Kata Sandi' } // Menambahkan input konfirmasi kata sandi
        ];

        let isValid = true; // Flag untuk menandai validasi

        // Loop melalui setiap input untuk cek kekosongan dan validasi
        for (let input of inputs) {
            if (input.element.value.trim() === "") {
                input.element.style.borderColor = 'red'; // Ubah border jadi merah jika kosong
                isValid = false; // Update flag validasi
                // Tampilkan pesan kesalahan sesuai dengan input yang kosong
                input.element.nextElementSibling.textContent = `${input.label} tidak boleh kosong`;
                alert(`kolom ${input.label} tidak boleh kosong`); // Tampilkan pesan kesalahan
            } else {
                input.element.style.borderColor = ''; // Reset border jika input terisi
                // Reset pesan kesalahan jika input terisi
                input.element.nextElementSibling.textContent = '';
            }

            // Validasi panjang kata sandi
            if (input.element.id === 'password' && input.element.value.trim().length < 8) {
                input.element.style.borderColor = 'red'; // Ubah border jadi merah jika panjang kata sandi kurang dari 8 karakter
                isValid = false; // Update flag validasi
                // Tampilkan pesan kesalahan untuk panjang kata sandi
                input.element.nextElementSibling.textContent = 'Kata sandi harus memiliki minimal 8 karakter';
                alert('Kata sandi harus memiliki minimal 8 karakter'); // Tampilkan pesan kesalahan
            }

            // Validasi konfirmasi kata sandi
            if (input.element.id === 'confirmPassword' && input.element.value !== document.getElementById('password').value) {
                input.element.style.borderColor = 'red'; // Ubah border jadi merah jika konfirmasi kata sandi tidak cocok
                isValid = false; // Update flag validasi
                // Tampilkan pesan kesalahan untuk konfirmasi kata sandi
                input.element.nextElementSibling.textContent = 'Konfirmasi kata sandi harus sama dengan kata sandi';
                alert('Konfirmasi kata sandi harus sama dengan kata sandi'); // Tampilkan pesan kesalahan
            }
        }

        if (isValid) {
            // Jika semua input terisi dan valid, form bisa di-submit atau melakukan aksi selanjutnya
            alert("Pendaftaran berhasil!");
            // this.submit(); // Aktifkan ini untuk submit form jika sudah valid
        }   
    });
});
