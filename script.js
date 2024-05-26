document.addEventListener('DOMContentLoaded', function() {
    const music = document.getElementById('birthdayMusic');
    const kadoIn = document.getElementById('kadoIn');
    const cardContainer = document.getElementById('cardContainer');
    const countdown = document.getElementById('countdown');
    const surpriseButton = document.getElementById('surpriseButton');

    kadoIn.addEventListener('click', function() {
        music.play().then(() => {
            // Sembunyikan kado dan tampilkan kartu ucapan
            kadoIn.style.display = 'none';
            cardContainer.style.display = 'block';

            // Tampilkan hitungan mundur sebelum menampilkan tombol kejutan
            let timeLeft = 5;
            countdown.style.display = 'block';
            countdown.innerText = timeLeft;

            const countdownTimer = setInterval(function() {
                timeLeft -= 1;
                countdown.innerText = timeLeft;

                if (timeLeft <= 0) {
                    clearInterval(countdownTimer);
                    countdown.style.display = 'none';
                    surpriseButton.style.display = 'inline-block';
                }
            }, 2750);
        }).catch(error => {
            console.error('Error playing music:', error);
        });
    });
});

function showSurprise() {
    const peachGomaGif1 = '1-peach-goma-animations.gif';
    const peachGomaGif2 = '24-peach-goma-animations.gif';
    const peachGomaGif3 = 'https://media.tenor.com/v0FhxoZtDXsAAAAi/peach-goma-peach-and-goma.gif';
    const peachGomaGif4 = 'https://media.tenor.com/lertL2cfGTkAAAAi/peach-goma.gif';
    const peachGomaGif5 = 'https://media1.tenor.com/m/byEUveJyHIoAAAAd/peach-goma.gif';
    const peachGomaGifGaaa = 'https://gifdb.com/images/high/sobbing-mochi-peach-sad-cat-crying-159nsavir4aye3va.webp';
    const peachGomaGifMauu = 'https://gifdb.com/images/high/cute-happy-spinning-peach-cat-a35m3lnfg3qmzbub.webp';

    Swal.fire({
        title: 'Selamat Ulang Tahun Mong!',
        html: `<img src="${peachGomaGif1}" alt="Peach Goma" style="width: 100px; height: 100px;"><p>Hehehee, Selamat ulang tahun yahhh</p>`,
        showConfirmButton: true,
        confirmButtonText: 'Next',
        allowOutsideClick: false,
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: 'Selamat Ulang Tahun Mong!',
                html: `<img src="${peachGomaGif2}" alt="Peach Goma" style="width: 100px; height: 100px;"><p>Semoga kamu sehat selalu dahhh</p>`,
                showConfirmButton: true,
                confirmButtonText: 'Next',
                allowOutsideClick: false,
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        title: 'Selamat Ulang Tahun Mong!',
                        html: `<img src="${peachGomaGif3}" alt="Peach Goma" style="width: 100px; height: 100px;"><p>Banyak rezekiii dahh</p>`,
                        showConfirmButton: true,
                        allowOutsideClick: false,
                        confirmButtonText: 'Next'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            Swal.fire({
                                title: 'Selamat Ulang Tahun Mong!',
                                html: `<img src="${peachGomaGif5}" alt="Peach Goma" style="width: 100px; height: 100px;"><p>Yahhh, wish u all the best lahh pokok nyaaa</p>`,
                                showConfirmButton: true,
                                allowOutsideClick: false,
                                confirmButtonText: 'Next'
                            }).then((result) => {
                                if (result.isConfirmed) {
                                    Swal.fire({
                                        title: 'Kamu mau hadiah?',
                                        html: `<img src="${peachGomaGif4}" alt="Peach Goma" style="width: 100px; height: 100px;">`,
                                        showCancelButton: true,
                                        allowOutsideClick: false,
                                        confirmButtonText: 'Mauuuu',
                                        cancelButtonText: 'Gaaaa'
                                    }).then((result) => {
                                        if (result.isConfirmed) {
                                            Swal.fire({
                                                title: 'Nahhh Gitu donggg',
                                                allowOutsideClick: false,
                                                html: `<img src="${peachGomaGifMauu}" alt="Peach Goma" style="width: 100px; height: 100px;"><p>Kabarin di wa yahhh mau hadiah apa🤣</p>`,
                                            });
                                        } else {
                                            Swal.fire({
                                                title: 'Hm, Baiklahhh',
                                                allowOutsideClick: false,
                                                html: `<img src="${peachGomaGifGaaa}" alt="Peach Goma" style="width: 100px; height: 100px;"><p>Hadiah nya tetap aku kirim yahh ntarr. konfirmasi aja lewat wa mau apa🤣</p>`,
                                            });
                                        }
                                    });
                                }
                            });
                        }
                    });
                }
            });
        }
    });
}
