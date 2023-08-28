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

const galleryItemsMarkup = galleryItems.map(createGalleryItem);
gallery.append(...galleryItemsMarkup);

const lightbox = new SimpleLightbox('.gallery a.gallery__link', {
  captionsData: "alt",
  captionDelay: 250,
});

const galleryHtml = `
  <ul class="gallery">
    ${galleryItems.map(item => `
      <li class="gallery__item">
        <a class="gallery__link" href="${item.original}">
          <img class="gallery__image" src="${item.preview}" alt="${item.description}" data-source="${item.original}" />
        </a>
      </li>
    `).join('')}
  </ul>
`;
