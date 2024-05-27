document.addEventListener('DOMContentLoaded', function() {
    const music = document.getElementById('birthdayMusic');
    const kadoIn = document.getElementById('kadoIn');
    const cardContainer = document.getElementById('cardContainer');
    const surpriseButton = document.getElementById('surpriseButton');
    const countdown = document.getElementById('countdown');

    kadoIn.addEventListener('click', function() {
        music.play().then(() => {
            kadoIn.style.display = 'none';
            cardContainer.style.display = 'block';
            startCountdown(5);
        }).catch(error => {
            console.error('Error playing music:', error);
        });
    });

    function startCountdown(seconds) {
        countdown.style.display = 'block';
        let remaining = seconds;
        countdown.innerText = remaining;

        const interval = setInterval(() => {
            remaining -= 1;
            countdown.innerText = remaining;

            if (remaining <= 0) {
                clearInterval(interval);
                countdown.style.display = 'none';
                surpriseButton.style.display = 'inline-block';
                createConfetti();
            }
        }, 2750);
    }

    function createConfetti() {
        for (let i = 0; i < 100; i++) {
            setTimeout(() => {
                const confetti = document.createElement('div');
                confetti.classList.add('confetti');
                confetti.style.left = Math.random() * 100 + 'vw';
                confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
                document.body.appendChild(confetti);

                setTimeout(() => {
                    confetti.remove();
                }, 3000);
            }, i * 100); // Penundaan bertahap untuk efek jatuh satu per satu
        }
        setTimeout(createConfetti, 3000);
    }

    function createFirework() {
        const firework = document.createElement('div');
        firework.classList.add('firework');
        firework.style.left = Math.random() * 100 + 'vw';
        firework.style.top = Math.random() * 100 + 'vh';
        firework.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        document.body.appendChild(firework);
    
        setTimeout(() => {
            firework.remove();
        }, 1000); // Kembang api menghilang setelah 1 detik
    }
    
    setInterval(createFirework, 2000); // Kembang api muncul setiap 2 detik
    
    
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
