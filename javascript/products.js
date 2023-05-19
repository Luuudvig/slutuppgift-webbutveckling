const products = [
  {
    name: "Grand Document Bag - Black",
    description:
      "ras nec dui facilisis, consectetur nunc vitae, gravida nulla. Suspendisse non metus sit amet metus ultrices tristique sed fermentum felis. Morbi vitae congue sapien, vel pulvinar urna. In quis tempus orci, a condimentum urna. Phasellus commodo augue pharetra, faucibus dolor eu, sollicitudin tortor. Nulla lobortis, mauris non ultricies sodales, tellus sapien vehicula quam, at porttitor dui libero eu leo. Aliquam arcu tortor, pharetra at sagittis et, pulvinar a leo. Nunc ut tortor vel dolor sagittis elementum a quis velit. Aenean varius convallis eleifend.",
    image: "../img/products/grand document bag black.png",
    price: 199,
    type: "Shoulder bag",
    dimensions: { height: 20, width: 30, depth: 15 },
    weight: 2,
    extraImages: [],
  },
  {
    name: "Grand Document Bag - Brown",
    description:
      "ras nec dui facilisis, consectetur nunc vitae, gravida nulla. Suspendisse non metus sit amet metus ultrices tristique sed fermentum felis. Morbi vitae congue sapien, vel pulvinar urna. In quis tempus orci, a condimentum urna. Phasellus commodo augue pharetra, faucibus dolor eu, sollicitudin tortor. Nulla lobortis, mauris non ultricies sodales, tellus sapien vehicula quam, at porttitor dui libero eu leo. Aliquam arcu tortor, pharetra at sagittis et, pulvinar a leo. Nunc ut tortor vel dolor sagittis elementum a quis velit. Aenean varius convallis eleifend.",
    image: "../img/products/grand document bag brown.png",
    price: 199,
    type: "Shoulder bag",
    dimensions: { height: 20, width: 30, depth: 15 },
    weight: 2,
    extraImages: [],
  },
  {
    name: "Havana Rucksack Bag - Black",
    description:
      "ras nec dui facilisis, consectetur nunc vitae, gravida nulla. Suspendisse non metus sit amet metus ultrices tristique sed fermentum felis. Morbi vitae congue sapien, vel pulvinar urna. In quis tempus orci, a condimentum urna. Phasellus commodo augue pharetra, faucibus dolor eu, sollicitudin tortor. Nulla lobortis, mauris non ultricies sodales, tellus sapien vehicula quam, at porttitor dui libero eu leo. Aliquam arcu tortor, pharetra at sagittis et, pulvinar a leo. Nunc ut tortor vel dolor sagittis elementum a quis velit. Aenean varius convallis eleifend.",
    image: "../img/products/Havana Rucksack Bag - Black.png",
    price: 199,
    type: "Backpack",
    dimensions: { height: 20, width: 30, depth: 15 },
    weight: 2,
    extraImages: [],
  },
  {
    name: "Havana Shoulder Bag",
    description:
      "ras nec dui facilisis, consectetur nunc vitae, gravida nulla. Suspendisse non metus sit amet metus ultrices tristique sed fermentum felis. Morbi vitae congue sapien, vel pulvinar urna. In quis tempus orci, a condimentum urna. Phasellus commodo augue pharetra, faucibus dolor eu, sollicitudin tortor. Nulla lobortis, mauris non ultricies sodales, tellus sapien vehicula quam, at porttitor dui libero eu leo. Aliquam arcu tortor, pharetra at sagittis et, pulvinar a leo. Nunc ut tortor vel dolor sagittis elementum a quis velit. Aenean varius convallis eleifend.",
    image: "../img/products/Havana Shoulder Bag.png",
    price: 199,
    type: "Shoulder bag",
    dimensions: { height: 20, width: 30, depth: 15 },
    weight: 2,
    extraImages: [],
  },
  {
    name: "Havana Vintage Messenger Bag",
    description:
      "ras nec dui facilisis, consectetur nunc vitae, gravida nulla. Suspendisse non metus sit amet metus ultrices tristique sed fermentum felis. Morbi vitae congue sapien, vel pulvinar urna. In quis tempus orci, a condimentum urna. Phasellus commodo augue pharetra, faucibus dolor eu, sollicitudin tortor. Nulla lobortis, mauris non ultricies sodales, tellus sapien vehicula quam, at porttitor dui libero eu leo. Aliquam arcu tortor, pharetra at sagittis et, pulvinar a leo. Nunc ut tortor vel dolor sagittis elementum a quis velit. Aenean varius convallis eleifend.",
    image: "../img/products/Havana Vintage Crossbody Messenger Bag.png",
    price: 199,
    type: "Shoulder bag",
    dimensions: { height: 20, width: 30, depth: 15 },
    weight: 2,
    extraImages: [],
  },
  {
    name: "Khaki Large Vintage Shoulder Bag",
    description:
      "ras nec dui facilisis, consectetur nunc vitae, gravida nulla. Suspendisse non metus sit amet metus ultrices tristique sed fermentum felis. Morbi vitae congue sapien, vel pulvinar urna. In quis tempus orci, a condimentum urna. Phasellus commodo augue pharetra, faucibus dolor eu, sollicitudin tortor. Nulla lobortis, mauris non ultricies sodales, tellus sapien vehicula quam, at porttitor dui libero eu leo. Aliquam arcu tortor, pharetra at sagittis et, pulvinar a leo. Nunc ut tortor vel dolor sagittis elementum a quis velit. Aenean varius convallis eleifend.",
    image: "../img/products/Khaki Large Vintage Shoulder Bag.png",
    price: 199,
    type: "Shoulder bag",
    dimensions: { height: 20, width: 30, depth: 15 },
    weight: 2,
    extraImages: [],
  },
  {
    name: "Khaki Shoulder Bag",
    description:
      "ras nec dui facilisis, consectetur nunc vitae, gravida nulla. Suspendisse non metus sit amet metus ultrices tristique sed fermentum felis. Morbi vitae congue sapien, vel pulvinar urna. In quis tempus orci, a condimentum urna. Phasellus commodo augue pharetra, faucibus dolor eu, sollicitudin tortor. Nulla lobortis, mauris non ultricies sodales, tellus sapien vehicula quam, at porttitor dui libero eu leo. Aliquam arcu tortor, pharetra at sagittis et, pulvinar a leo. Nunc ut tortor vel dolor sagittis elementum a quis velit. Aenean varius convallis eleifend.",
    image: "../img/products/Khaki Shoulder Bag.png",
    price: 199,
    type: "Shoulder bag",
    dimensions: { height: 20, width: 30, depth: 15 },
    weight: 2,
    extraImages: [],
  },
  {
    name: "Khaki Vintage Crossbody Bag",
    description:
      "ras nec dui facilisis, consectetur nunc vitae, gravida nulla. Suspendisse non metus sit amet metus ultrices tristique sed fermentum felis. Morbi vitae congue sapien, vel pulvinar urna. In quis tempus orci, a condimentum urna. Phasellus commodo augue pharetra, faucibus dolor eu, sollicitudin tortor. Nulla lobortis, mauris non ultricies sodales, tellus sapien vehicula quam, at porttitor dui libero eu leo. Aliquam arcu tortor, pharetra at sagittis et, pulvinar a leo. Nunc ut tortor vel dolor sagittis elementum a quis velit. Aenean varius convallis eleifend.",
    image: "../img/products/Khaki Vintage Crossbody Messengar Bag.png",
    price: 199,
    type: "Shoulder bag",
    dimensions: { height: 20, width: 30, depth: 15 },
    weight: 2,
    extraImages: [],
  },
  {
    name: "Messenger Bag - Black",
    description:
      "ras nec dui facilisis, consectetur nunc vitae, gravida nulla. Suspendisse non metus sit amet metus ultrices tristique sed fermentum felis. Morbi vitae congue sapien, vel pulvinar urna. In quis tempus orci, a condimentum urna. Phasellus commodo augue pharetra, faucibus dolor eu, sollicitudin tortor. Nulla lobortis, mauris non ultricies sodales, tellus sapien vehicula quam, at porttitor dui libero eu leo. Aliquam arcu tortor, pharetra at sagittis et, pulvinar a leo. Nunc ut tortor vel dolor sagittis elementum a quis velit. Aenean varius convallis eleifend.",
    image: "../img/products/Messenger Bag - Black.png",
    price: 199,
    type: "Shoulder bag",
    dimensions: { height: 20, width: 30, depth: 15 },
    weight: 2,
    extraImages: [],
  },
  {
    name: "Messenger Bag - Brown",
    description:
      "ras nec dui facilisis, consectetur nunc vitae, gravida nulla. Suspendisse non metus sit amet metus ultrices tristique sed fermentum felis. Morbi vitae congue sapien, vel pulvinar urna. In quis tempus orci, a condimentum urna. Phasellus commodo augue pharetra, faucibus dolor eu, sollicitudin tortor. Nulla lobortis, mauris non ultricies sodales, tellus sapien vehicula quam, at porttitor dui libero eu leo. Aliquam arcu tortor, pharetra at sagittis et, pulvinar a leo. Nunc ut tortor vel dolor sagittis elementum a quis velit. Aenean varius convallis eleifend.",
    image: "../img/products/Messenger Bag Brown.png",
    price: 199,
    type: "Shoulder bag",
    dimensions: { height: 20, width: 30, depth: 15 },
    weight: 2,
    extraImages: [],
  },
  {
    name: "Khaki Rucksack Large",
    description:
      "ras nec dui facilisis, consectetur nunc vitae, gravida nulla. Suspendisse non metus sit amet metus ultrices tristique sed fermentum felis. Morbi vitae congue sapien, vel pulvinar urna. In quis tempus orci, a condimentum urna. Phasellus commodo augue pharetra, faucibus dolor eu, sollicitudin tortor. Nulla lobortis, mauris non ultricies sodales, tellus sapien vehicula quam, at porttitor dui libero eu leo. Aliquam arcu tortor, pharetra at sagittis et, pulvinar a leo. Nunc ut tortor vel dolor sagittis elementum a quis velit. Aenean varius convallis eleifend.",
    image: "../img/products/Rucksack Large - Khaki Canvas.png",
    price: 199,
    type: "Backpack",
    dimensions: { height: 20, width: 30, depth: 15 },
    weight: 2,
    extraImages: [],
  },
];

const productGrid = document.getElementById("product-grid");

products.forEach((product) => {
  productGrid.insertAdjacentHTML(
    "beforeend",
    `     
  <div class="product-grid-item">    
    <div class="product">
      <img
        class="product-logo"
        src="${product.image}"
        alt="En jättefin väska som du borde köpa"
      />
      <div class="product-text">
        <div class="product-name">${product.name}</div>
        <div class="product-info">
          <div>${product.type}</div>
          <div>$${product.price}</div>
        </div>
      </div>
    </div>
  </div>
  `
  );
});
