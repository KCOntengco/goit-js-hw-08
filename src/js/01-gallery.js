import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items.js';


// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

galleryItems.forEach((item) => {
  console.log(item)
  let li = `
  <li class="gallery__item">
      <a class="gallery__link" href="javascript:void(0)">
        <img 
          class="gallery__image" 
          src="${item.preview}" 
          data-source="${item.original}" 
          alt="${item.description}"   
        />
      </a>
    </li>
    `;
  gallery.innerHTML += li;
});


//Event Delegation
gallery.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    let bigImage = e.target.getAttribute("data-source");
    let instance = basicLightbox.create(`<img src="${bigImage}" width="800" height="600" />`);
    instance.show();
  }
});

// from previous task-------------------

// // import SimpleLightbox from 'simplelightbox';
// import 'simplelightbox/dist/simple-lightbox.min.css';

// import { galleryItems } from './gallery-items.js';
// // Change code below this line

// console.log(galleryItems);

// const galleryContainer = document.querySelector("ul.gallery");

// function createGalleryItem(array) {
// 	return array
// 		.map(({ preview, original, description }) => {
// 			return `
//             <a class="gallery__item" href="${original}">
//                 <img class="gallery__image" src="${preview}" alt="${description}"/>
//             </a>
//         `;
// 		})
// 		.join("");
// };

// const photosMarkup = createGalleryItem(galleryItems);
// galleryContainer.insertAdjacentHTML("beforeend", photosMarkup);

// //-----------
// const galleryHandler = new SimpleLightbox(".gallery a", {
//   captionsData: "alt",
//   captionDelay: 250
// });

// galleryHandler.on("show.simplelightbox");
