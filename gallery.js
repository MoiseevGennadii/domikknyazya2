// Массив с объектами фотографий: { src: "путь_к_фото", alt: "описание" }
const photos = [
    { src: "img/изображение_viber_2021-09-01_21-15-57-921.jpg", alt: "Вид на домик снаружи" },
    { src: "img/8.jpg", alt: "Уютная комната внутри" },
    { src: "img/кухня1.jpg", alt: "Кухня" },
    { src: "img/озеро.jpg", alt: "Озеро" },
    { src: "img/0-02-05-e9acca5a0eb7d694efff26c54851e37168b9b462a26f66f95ffcd5feba1b4723_c391b7f19d0bfd17.jpg", alt: "Озеро Укля рядом с усадьбой" },
    { src: "img/осень.jpeg", alt: "Лесные тропы" },
    { src: "img/рыбалка.jpg", alt: "Рыбалка" },
    { src: "img/качели.jpg", alt: "Качели" },
    { src: "img/качели и мангал.jpg", alt: "Мангал" },
    { src: "img/катамаран.jpg", alt: "Катамаран" },
    { src: "img/беседка.jpg", alt: "Беседка" },
    { src: "img/валентин.jpg", alt: "Валентин" },
    { src: "img/озеро1.jpg", alt: "Озеро" },
    { src: "img/цветы.jpg", alt: "Цветы" },
    { src: "img/вход.jpg", alt: "Заход" },
    { src: "img/берег.jpg", alt: "Берег" }

    // Добавьте свои фотографии по аналогии
    // { src: "images/my-photo.jpg", alt: "Мое описание" },
];

// Функция для загрузки фотографий на страницу
function loadGallery() {
    const galleryContainer = document.getElementById('gallery');

    // Проверяем, есть ли контейнер на странице
    if (!galleryContainer) return;

    // Очищаем контейнер на случай перезагрузки (необязательно)
    galleryContainer.innerHTML = '';

    // Перебираем все фотографии из массива
    photos.forEach(photo => {
        // Создаем элемент для фото
        const photoItem = document.createElement('div');
        photoItem.classList.add('gallery-item');

        // Создаем тег img
        const img = document.createElement('img');
        img.src = photo.src;
        img.alt = photo.alt;
        img.loading = 'lazy'; // Добавляем ленивую загрузку для производительности

        // Добавляем обработчик клика для открытия фото в полном размере (опционально)
        img.addEventListener('click', () => {
            window.open(photo.src, '_blank');
        });

        // Собираем элемент
        photoItem.appendChild(img);
        galleryContainer.appendChild(photoItem);
    });
}

// Запускаем функцию после полной загрузки страницы
document.addEventListener('DOMContentLoaded', loadGallery);