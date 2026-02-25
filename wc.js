//gpt
document.querySelectorAll('.photoInput').forEach(input => {
    input.addEventListener('change', function(event) {
        const file = event.target.files[0];
        const img = this.nextElementSibling;

        if (file) {
            const reader = new FileReader();

            reader.onload = function(e) {
                img.src = e.target.result;
                img.style.display = 'block';
            };

            reader.readAsDataURL(file);
        }
    });
});