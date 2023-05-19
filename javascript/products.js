const products = [
  {
    name: "Grand Document Bag - Black",
    description:
      "Praesent feugiat metus mi, in sagittis elit ultricies a. Sed eget faucibus arcu, non rutrum nibh. Cras sed pellentesque enim, ut placerat neque. Phasellus in enim et tortor auctor auctor. Vestibulum eget pharetra erat, ut fermentum nunc. Etiam aliquam ante blandit mattis aliquet. Maecenas nec molestie odio, ut hendrerit nisi. Morbi vehicula molestie est et varius.",
    image: "../img/products/grand document bag black.png",
    price: 199,
    type: "Shoulder bag",
    dimensions: { height: 20, width: 30, depth: 15 },
    weight: 2,
    color: "Black",
    extraImages: [],
  },
  {
    name: "Grand Document Bag - Brown",
    description:
      "Praesent feugiat metus mi, in sagittis elit ultricies a. Sed eget faucibus arcu, non rutrum nibh. Cras sed pellentesque enim, ut placerat neque. Phasellus in enim et tortor auctor auctor. Vestibulum eget pharetra erat, ut fermentum nunc. Etiam aliquam ante blandit mattis aliquet. Maecenas nec molestie odio, ut hendrerit nisi. Morbi vehicula molestie est et varius.",
    image: "../img/products/grand document bag brown.png",
    price: 199,
    type: "Shoulder bag",
    dimensions: { height: 20, width: 30, depth: 15 },
    weight: 2,
    color: "Black",
    extraImages: [],
  },
  {
    name: "Havana Rucksack Bag - Black",
    description:
      "Praesent feugiat metus mi, in sagittis elit ultricies a. Sed eget faucibus arcu, non rutrum nibh. Cras sed pellentesque enim, ut placerat neque. Phasellus in enim et tortor auctor auctor. Vestibulum eget pharetra erat, ut fermentum nunc. Etiam aliquam ante blandit mattis aliquet. Maecenas nec molestie odio, ut hendrerit nisi. Morbi vehicula molestie est et varius.",
    image: "../img/products/Havana Rucksack Bag - Black.png",
    price: 199,
    type: "Backpack",
    dimensions: { height: 20, width: 30, depth: 15 },
    weight: 2,
    color: "Black",
    extraImages: [],
  },
  {
    name: "Havana Shoulder Bag",
    description:
      "Praesent feugiat metus mi, in sagittis elit ultricies a. Sed eget faucibus arcu, non rutrum nibh. Cras sed pellentesque enim, ut placerat neque. Phasellus in enim et tortor auctor auctor. Vestibulum eget pharetra erat, ut fermentum nunc. Etiam aliquam ante blandit mattis aliquet. Maecenas nec molestie odio, ut hendrerit nisi. Morbi vehicula molestie est et varius.",
    image: "../img/products/Havana Shoulder Bag.png",
    price: 199,
    type: "Shoulder bag",
    dimensions: { height: 20, width: 30, depth: 15 },
    weight: 2,
    color: "Black",
    extraImages: [],
  },
  {
    name: "Havana Vintage Messenger Bag",
    description:
      "Praesent feugiat metus mi, in sagittis elit ultricies a. Sed eget faucibus arcu, non rutrum nibh. Cras sed pellentesque enim, ut placerat neque. Phasellus in enim et tortor auctor auctor. Vestibulum eget pharetra erat, ut fermentum nunc. Etiam aliquam ante blandit mattis aliquet. Maecenas nec molestie odio, ut hendrerit nisi. Morbi vehicula molestie est et varius.",
    image: "../img/products/Havana Vintage Crossbody Messenger Bag.png",
    price: 199,
    type: "Shoulder bag",
    dimensions: { height: 20, width: 30, depth: 15 },
    weight: 2,
    color: "Black",
    extraImages: [],
  },
  {
    name: "Khaki Large Vintage Shoulder Bag",
    description:
      "Praesent feugiat metus mi, in sagittis elit ultricies a. Sed eget faucibus arcu, non rutrum nibh. Cras sed pellentesque enim, ut placerat neque. Phasellus in enim et tortor auctor auctor. Vestibulum eget pharetra erat, ut fermentum nunc. Etiam aliquam ante blandit mattis aliquet. Maecenas nec molestie odio, ut hendrerit nisi. Morbi vehicula molestie est et varius.",
    image: "../img/products/Khaki Large Vintage Shoulder Bag.png",
    price: 199,
    type: "Shoulder bag",
    dimensions: { height: 20, width: 30, depth: 15 },
    weight: 2,
    color: "Black",
    extraImages: [],
  },
  {
    name: "Khaki Shoulder Bag",
    description:
      "Praesent feugiat metus mi, in sagittis elit ultricies a. Sed eget faucibus arcu, non rutrum nibh. Cras sed pellentesque enim, ut placerat neque. Phasellus in enim et tortor auctor auctor. Vestibulum eget pharetra erat, ut fermentum nunc. Etiam aliquam ante blandit mattis aliquet. Maecenas nec molestie odio, ut hendrerit nisi. Morbi vehicula molestie est et varius.",
    image: "../img/products/Khaki Shoulder Bag.png",
    price: 199,
    type: "Shoulder bag",
    dimensions: { height: 20, width: 30, depth: 15 },
    weight: 2,
    color: "Black",
    extraImages: [],
  },
  {
    name: "Khaki Vintage Crossbody Bag",
    description:
      "Praesent feugiat metus mi, in sagittis elit ultricies a. Sed eget faucibus arcu, non rutrum nibh. Cras sed pellentesque enim, ut placerat neque. Phasellus in enim et tortor auctor auctor. Vestibulum eget pharetra erat, ut fermentum nunc. Etiam aliquam ante blandit mattis aliquet. Maecenas nec molestie odio, ut hendrerit nisi. Morbi vehicula molestie est et varius.",
    image: "../img/products/Khaki Vintage Crossbody Messengar Bag.png",
    price: 199,
    type: "Shoulder bag",
    dimensions: { height: 20, width: 30, depth: 15 },
    weight: 2,
    color: "Black",
    extraImages: [],
  },
  {
    name: "Messenger Bag - Black",
    description:
      "Praesent feugiat metus mi, in sagittis elit ultricies a. Sed eget faucibus arcu, non rutrum nibh. Cras sed pellentesque enim, ut placerat neque. Phasellus in enim et tortor auctor auctor. Vestibulum eget pharetra erat, ut fermentum nunc. Etiam aliquam ante blandit mattis aliquet. Maecenas nec molestie odio, ut hendrerit nisi. Morbi vehicula molestie est et varius.",
    image: "../img/products/Messenger Bag - Black.png",
    price: 199,
    type: "Shoulder bag",
    dimensions: { height: 20, width: 30, depth: 15 },
    weight: 2,
    color: "Black",
    extraImages: [],
  },
  {
    name: "Messenger Bag - Brown",
    description:
      "Praesent feugiat metus mi, in sagittis elit ultricies a. Sed eget faucibus arcu, non rutrum nibh. Cras sed pellentesque enim, ut placerat neque. Phasellus in enim et tortor auctor auctor. Vestibulum eget pharetra erat, ut fermentum nunc. Etiam aliquam ante blandit mattis aliquet. Maecenas nec molestie odio, ut hendrerit nisi. Morbi vehicula molestie est et varius.",
    image: "../img/products/Messenger Bag Brown.png",
    price: 199,
    type: "Shoulder bag",
    dimensions: { height: 20, width: 30, depth: 15 },
    weight: 2,
    color: "Black",
    extraImages: [],
  },
  {
    name: "Khaki Rucksack Large",
    description:
      "Praesent feugiat metus mi, in sagittis elit ultricies a. Sed eget faucibus arcu, non rutrum nibh. Cras sed pellentesque enim, ut placerat neque. Phasellus in enim et tortor auctor auctor. Vestibulum eget pharetra erat, ut fermentum nunc. Etiam aliquam ante blandit mattis aliquet. Maecenas nec molestie odio, ut hendrerit nisi. Morbi vehicula molestie est et varius.",
    image: "../img/products/Rucksack Large - Khaki Canvas.png",
    price: 199,
    type: "Backpack",
    dimensions: { height: 20, width: 30, depth: 15 },
    weight: 2,
    color: "Black",
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

//Mer info skärm
const productWindow = document.getElementById("target-product");
const productItems = productGrid.getElementsByClassName("product-grid-item");
for (let i = 0; i < productItems.length; i++) {
  const productItem = productItems[i];
  productItem.addEventListener("click", () => {
    let productName = document.getElementById("large-product-name");
    let productImage = document.getElementById("large-product-image");
    let productType = document.getElementById("product-type");
    let productPrice = document.getElementById("product-price");
    let productDescription = document.getElementById("product-description");
    let productHeight = document.getElementById("product-price");
    let productWidth = document.getElementById("product-description");
    let productDepth = document.getElementById("product-price");
    let productWeight = document.getElementById("product-description");
    let productColor = document.getElementById("product-color");

    productName.innerHTML = products[i].name;
    productImage.innerHTML = products[i].image;
    productType.innerHTML = products[i].type;
    productPrice.innerHTML = products[i].price;
    productDescription.innerHTML = products[i].description;
    productHeight.innerHTML = products[i].dimensions.height;
    productWidth.innerHTML = products[i].dimensions.width;
    productDepth = products[i].dimensions.depth;
    productWeight.innerHTML = products[i].weight;
    productColor.innerHTML = products[i].color;

    productWindow.style.display = "flex";
    document.getElementById("html").style.overflowY = "hidden";
  });
}

//Stäng info skärmen
const closeProductWindow = document.getElementById("close-target-window");
closeProductWindow.addEventListener("click", () => {
  productWindow.style.display = "none";
  document.getElementById("html").style.overflowY = "scroll";
});
