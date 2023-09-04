export const selectMember = (el) => {

    el.addEventListener("change", function () {
        const selectedValue = el.value;
        if (selectedValue === "addYourself") {
            const you = document.querySelector('.team__person.you')
            you.classList.remove('you')
            you.classList.add('addYourself')
            const fileInput = document.getElementById('fileInput');
            const image = document.getElementById('image');
            image.style.display = 'none'

            fileInput.addEventListener('change', function (e) {
                const file = e.target.files[0];

                if (file) {
                    const reader = new FileReader();
                    reader.onload = function (e) {
                        image.style.display = 'block'
                        image.src = e.target.result;
                        image.style.display = 'block';
                        fileInput.style.visibility = 'hidden'
                    };
                    reader.readAsDataURL(file);
                }
            });

        }
    })
}








