const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const list = document.querySelector('.gallery');
  list.style.listStyleType = 'none';
  list.style.display = 'flex';
  list.style.justifyContent = 'center';
  list.style.alignItems = 'center';
  list.style.flexDirection = 'column';
const imageWidth = 1260;
const pictures = [];
for (const image of images) {
  const picture = document.createElement('li')
  picture.insertAdjacentHTML("beforeend", `<img src="${image.url}" alt="${image.alt}" width=${imageWidth / 2}>` );
  pictures.push(picture)
}
list.append(...pictures)