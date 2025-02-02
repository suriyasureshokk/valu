document.addEventListener('DOMContentLoaded', () => {
    const poem = `Hey Mosa Kutty🐰,

    En life la nee kedaipa nu konjam kooda edhir paakala.
    Namma first meet panna andha naal en kannukullaiyae nikudhu daa maa🥹.
    Eppadi sendhom enna nadandhuchu nu ellamae nenachaaa,
    Oru kanavaatam iruku ippo kooda.

    En life ah oru purpose ah vaazhardhuku nee oru main reason maa❤️❤️.
    Enna aanalum seri soghamo sandhoshamo kovamo edhunaalum,
    enta sollu kaatu. Nee kaatiruvaa😹😹, irundhaalum solraen.
    Enna aanalum seri unna naa vittu kuduka mataen🫂🫂❤️.

    Namma daily paathuka mudiyaadhu, aana adhanaala dhaan namma bond strng ah iruku❤️❤️,
    Andha rendu naal ennoda happiness ah solla alavae illa🥹🥹❤️.
    Andha 2 days ah life long ah maatha naa ennala mudunja ellamae seivaen🫂🫂❤️.
    En life la rmbha aasai pattu nadandhu oru sila vishayathula nee onnu.
    Unna vidavae maataen😹😹😹. Evalo sandai vandhalum seri pesi theethukalaam.

    Nee senja thappulaam enta sollumbodhu enaku kashtama irundhadhu 2 sec dhaan🫂🫂.
    Aana andha 2 sec ku aprm un mela irundha love appadiyae 10x aayiduchu.
    Enna piriya koodadhu nu nenachu adha marachu iruka idha vida enaku enna venum🥹🥹🥹❤️❤️❤️❤️❤️.
    But inimae edhunaalum sollu unna vidavae maataen. Un ayisha fix aana madhiri dhaan naanum needhaanu fix aayitaen.
    Loveeeeeeeee yoooooooouuuuuuuuu lotsssssss chellamaeyyyyyyyyyyyyyy❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️.
    Innum sollitae polaam😁😁😁. Naama sera matom nu irundhu irundha ivalo dhooram laam vandhu irukaadhu unakae theriyum eppo venaalum namma piriyura madhiri chance irundhuchu.
    Idhuvae samaalchutom idhuku mela samaalika mudiyaadha😁❤️❤️❤️❤️.
    
    Unna neraiya hurt panni irukaen therunjo theriyaamalo🫂🫂🫂.
    Adhuku oru periyaaaa Sryyyyyyyyyyy.
    Inimae adhu nadakaama paathupaen, promise❤️❤️❤️.
    Enaku needhaan unaku naadhaan❤️❤️❤️❤️❤️.

    With lots of love❤️,
    Your cutie 🙈
    
    Keela scroll pannu`;

    const envelope = document.querySelector('.envelope');
    const letter = document.querySelector('.letter');
    const poemContent = document.querySelector('.poem-content');
    const nextBtn = document.querySelector('.next-btn');
    const lovePopup = document.querySelector('.love-popup');
    const celebration = document.querySelector('.celebration');
    const song = document.getElementById('song');
    const paper = document.querySelector('.paper');
    const bgMusic = document.getElementById('bgMusic');

    // Enhanced floating hearts
    function createFloatingHearts() {
        const heart = document.createElement('div');
        heart.innerHTML = '❤';
        heart.style.position = 'absolute';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.fontSize = Math.random() * 20 + 10 + 'px';
        heart.style.opacity = Math.random() * 0.5 + 0.5;
        heart.style.color = `hsl(${Math.random() * 60 + 330}, 100%, 70%)`;
        heart.style.animation = `float ${Math.random() * 3 + 3}s linear infinite`;
        document.querySelector('.floating-hearts').appendChild(heart);
        
        setTimeout(() => heart.remove(), 6000);
    }

    setInterval(createFloatingHearts, 300);

    // Enhanced envelope animation
    document.querySelector('.heart-seal').addEventListener('click', () => {
        const envelope = document.querySelector('.envelope');
        const flap = document.querySelector('.envelope-flap');
        const letter = document.querySelector('.letter');
        const heartSeal = document.querySelector('.heart-seal');
        const scrollMessage = document.querySelector('.scroll-message');

        // Start background music
        bgMusic.volume = 0.5;
        bgMusic.play();

        // Hide the heart seal
        heartSeal.style.opacity = '0';
        heartSeal.style.transform = 'translate(-50%, -50%) scale(0.8)';

        // Open the envelope flap
        flap.style.transform = 'rotateX(180deg)';

        // Show and animate the letter
        setTimeout(() => {
            letter.style.opacity = '1';
            letter.style.zIndex = '5';
            letter.style.transform = 'translateY(50%) scale(1)';
            letter.style.display = 'block';
            typeWriter();
            showPhotos();
            
            // Show scroll message after a short delay
            setTimeout(() => {
                scrollMessage.style.opacity = '1';
            }, 1000);
        }, 600);
    });

    // Enhanced typewriter effect
    let i = 0;
    function typeWriter() {
        const poemContent = document.querySelector('.poem-content');
        const nextBtn = document.querySelector('.next-btn');
        const photoGallery = document.querySelector('.photo-gallery');

        if (i < poem.length) {
            if (poem.charAt(i) === '\n') {
                poemContent.innerHTML += '<br>';
            } else {
                poemContent.innerHTML += poem.charAt(i);
            }
            i++;
            
            // Start showing photos after the poem is halfway done
            if (i === Math.floor(poem.length / 2)) {
                showPhotos();
            }
            
            // Updated timing between previous (50ms) and current (100ms)
            setTimeout(typeWriter, poem.charAt(i) === '\n' ? 600 : 75);
        } else {
            setTimeout(() => {
                nextBtn.style.opacity = '1';
                nextBtn.style.transform = 'translateY(0)';
            }, 1000);
        }
    }

    // Add this function to set aspect ratios for photos
    function setPhotoAspectRatios() {
        const photos = document.querySelectorAll('.photo-heart img');
        
        photos.forEach(img => {
            img.onload = function() {
                const aspectRatio = (this.naturalHeight / this.naturalWidth) * 100;
                this.parentElement.style.paddingTop = `${aspectRatio}%`;
                
                // Adjust container height if needed
                const container = document.querySelector('.letter');
                if (container) {
                    container.style.height = 'auto';
                }
            };
        });
    }

    // Update the createPhotoLayout function
    function createPhotoLayout() {
        const photos = document.querySelectorAll('.photo-heart');
        const rotationClasses = ['rotate-1', 'rotate-2', 'rotate-3', 'rotate-4'];
        
        photos.forEach((photo, index) => {
            // Add random rotation
            const rotationClass = rotationClasses[Math.floor(Math.random() * rotationClasses.length)];
            photo.classList.add(rotationClass);
            
            // Add random tape rotation
            const tapeRotation = Math.random() * 6 - 3;
            photo.style.setProperty('--tape-rotation', `${tapeRotation}deg`);
            photo.style.setProperty('--tape-rotation-alt', `${-tapeRotation}deg`);
            
            // Add slight random margin
            const randomMargin = Math.random() * 10 - 5;
            photo.style.margin = `${randomMargin}px`;
            
            // Set up image loading
            const img = photo.querySelector('img');
            if (img) {
                img.onload = function() {
                    if (this.naturalWidth < 100 || this.naturalHeight < 100) {
                        photo.remove();
                    }
                    
                    const aspectRatio = this.naturalHeight / this.naturalWidth;
                    if (aspectRatio < 0.5) {
                        photo.style.columnSpan = 'all';
                    }
                };
            }
        });

        setTimeout(optimizeLayout, 500);
    }

    // Add function to optimize layout
    function optimizeLayout() {
        const container = document.querySelector('.photo-container');
        const photos = Array.from(document.querySelectorAll('.photo-heart'));
        
        // Sort photos by height to create better distribution
        photos.sort((a, b) => {
            const aHeight = a.querySelector('img').naturalHeight;
            const bHeight = b.querySelector('img').naturalHeight;
            return bHeight - aHeight;
        });
        
        // Reorder photos in container
        photos.forEach(photo => {
            container.appendChild(photo);
        });
    }

    // Update the showPhotos function
    function showPhotos() {
        const photoGallery = document.querySelector('.photo-gallery');
        const photos = document.querySelectorAll('.photo-heart');
        
        createPhotoLayout();
        
        photoGallery.style.opacity = '1';
        photoGallery.style.transform = 'translateY(0)';
        
        // Staggered animation for photos
        photos.forEach((photo, index) => {
            setTimeout(() => {
                photo.style.opacity = '1';
                photo.style.transform = 'scale(1) rotate(var(--rotation))';
            }, index * 100);
        });
    }

    // Next button handler
    nextBtn.addEventListener('click', () => {
        const bgMusic = document.getElementById('bgMusic');
        
        // Fade out background music
        const fadeOut = setInterval(() => {
            if (bgMusic.volume > 0.1) {
                bgMusic.volume -= 0.1;
            } else {
                bgMusic.pause();
                bgMusic.currentTime = 0;
                clearInterval(fadeOut);
            }
        }, 100);

        letter.style.transform = 'translateY(0) scale(0.8)';
        letter.style.opacity = '0';
        setTimeout(() => {
            letter.style.display = 'none';
            lovePopup.style.display = 'flex';
        }, 500);
    });

    // Popup buttons handlers
    document.querySelector('.yes-btn').addEventListener('click', () => {
        const envelope = document.querySelector('.envelope');
        const bgMusic = document.getElementById('bgMusic');
        
        // Make sure background music is stopped
        bgMusic.pause();
        bgMusic.currentTime = 0;
        
        lovePopup.style.display = 'none';
        
        // Add celebrating class to envelope
        envelope.classList.add('celebrating');
        
        // Position celebration elements on envelope
        celebration.style.display = 'flex';
        
        // Start the music
        song.play();
        
        // Create heart burst effect
        createHeartBurst();
        
        // Add disco ball rotation effect to image
        const dhanushImg = document.querySelector('.dhanush-gif');
        dhanushImg.style.display = 'block';
        
        // Add pulsing effect to the text
        const celebrationText = celebration.querySelector('h1');
        celebrationText.style.display = 'block';
        
        // Optional: Add music visualizer effect
        song.addEventListener('timeupdate', () => {
            const rotation = (song.currentTime / song.duration) * 360;
            dhanushImg.style.transform = `translate(-50%, -50%) rotate(${rotation}deg)`;
        });
    });

    document.querySelector('.no-btn').addEventListener('click', () => {
        const h2 = lovePopup.querySelector('h2');
        h2.textContent = 'Yes click panri punda!! Do you love me?';
        h2.style.color = 'red';
    });

    // Heart burst animation
    function createHeartBurst() {
        for (let i = 0; i < 50; i++) {
            const heart = document.createElement('div');
            heart.innerHTML = '❤';
            heart.style.position = 'absolute';
            heart.style.left = '50%';
            heart.style.top = '50%';
            heart.style.animation = `burst ${Math.random() * 2 + 1}s forwards`;
            heart.style.transform = `rotate(${Math.random() * 360}deg)`;
            document.querySelector('.heart-burst').appendChild(heart);
        }
    }

    // Enhanced popup animation
    function createPopupHearts() {
        const heart = document.createElement('div');
        heart.className = 'popup-heart';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = Math.random() * 2 + 1 + 's';
        document.querySelector('.popup-hearts').appendChild(heart);
        
        setTimeout(() => heart.remove(), 3000);
    }

    setInterval(createPopupHearts, 300);

    // Add audio loop
    song.addEventListener('ended', () => {
        song.currentTime = 0;
        song.play();
    });
}); 
