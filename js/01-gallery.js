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

let activeModal = null;

gallery.addEventListener('click', e => {
  e.preventDefault();
  if (e.target.classList.contains('gallery__image')) {
    const source = e.target.dataset.source;
    const modal = basicLightbox.create(`
      <img width="1400" height="900" src="${source}">
    `);

    activeModal = modal;

    modal.show();

    document.addEventListener('keydown', closeModalOnEscape);
  }
});

function closeModalOnEscape(e) {
  if (e.key === 'Escape' && activeModal) {
    activeModal.close();
    activeModal = null;

    document.removeEventListener('keydown', closeModalOnEscape);
  }
}
// переписать код с видео