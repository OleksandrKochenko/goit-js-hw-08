// Add imports above this line
import { galleryItems } from './gallery-items';
// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

console.log(galleryItems);

// Gallery markup
const gallery = document.querySelector('.gallery');
const markup = galleryItems
    .map((item) =>
        `<a class="gallery__item" href="${item.original}">
            <img
                class="gallery__image"
                src="${item.preview}"
                alt="${item.description}"
            />
        </a>`)
    .join('');
gallery.innerHTML = markup;

// Click event handle
gallery.addEventListener('click', handleClick);
const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionPosition: 'bottom', captionDelay: 250 });
function handleClick(event) {
    event.preventDefault();
    const element = event.target;
    lightbox.open(element);
}