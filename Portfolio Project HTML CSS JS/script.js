<script>
    const menuBtn = document.querySelector('.menu');
    const closeBtn = document.getElementById('closeMenu');
    const menuOverlay = document.getElementById('fullscreenMenu');

    menuBtn.addEventListener('click', () => {
        menuOverlay.classList.add('active');
    });

    closeBtn.addEventListener('click', () => {
        menuOverlay.classList.remove('active');
    });
</script>
