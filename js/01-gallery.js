import { galleryItems } from './gallery-items.js';
// Change code below this line

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

gallery.addEventListener('click', e => {
  e.preventDefault();
  if (e.target.classList.contains('gallery__image')) {
    const source = e.target.getAttribute('data-source');
    const instance = basicLightbox.create(`
      <img src="${source}" alt="${e.target.alt}">
    `);
    instance.show();
  }
});
console.log(galleryItems);

basicLightbox.create(`
<img width= "1400" height= "900" src= "https:placehold.it/1400x900">`)
.show();