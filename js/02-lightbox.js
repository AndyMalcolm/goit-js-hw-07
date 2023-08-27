import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

// кoд с 1 задания
  const gallery = document.querySelector('.gallery');

function createGalleryItem(item) {
  const galleryItem = document.createElement('li');
  galleryItem.classList.add('gallery__item');

  const link = document.createElement('a');
  link.classList.add('gallery__link');
  link.href = item.original;

  const image = document.createElement('img');
  image.classList.add('gallery__image');
  image.src = item.preview;
  image.setAttribute('data-source', item.original);
  image.alt = item.description;

  link.appendChild(image);
  galleryItem.appendChild(link);

  return galleryItem;
}

const galleryItemsMarkup = galleryItems.map(item => createGalleryItem(item));
gallery.append(...galleryItemsMarkup);

const lightbox = new SimpleLightbox('.gallery a.gallery__link', {
  captionsData: "alt",
  captionDelay: 250,
});