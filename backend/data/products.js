const products = [
  {
    _id: "1",
    name: "Superman T-Shirt",
    image: "/images/superman-tshirt.jpg",
    description: "Superman S Shield T-Shirt",
    brand: "DC",
    category: "Clothes",
    price: 24.99,
    countInStock: {
      xs: 0,
      s: 2,
      m: 4,
      l: 1,
      xl: 1,
      xxl: 0,
    },
    rating: 4.5,
    numReviews: 12,
  },
  {
    _id: "2",
    name: "Batman T-Shirt",
    image: "/images/batman-tshirt.jpg",
    description: "Batman Logo T-Shirt",
    brand: "DC",
    category: "Clothes",
    price: 24.99,
    countInStock: {
      xs: 1,
      s: 3,
      m: 2,
      l: 2,
      xl: 1,
      xxl: 3,
    },
    rating: 4.0,
    numReviews: 8,
  },
  {
    _id: "3",
    name: "Spider-Man: Far From Home Statue",
    image: "/images/spiderman-statue.jpg",
    description:
      "A beautiful 1:10 scale model of Spider-Man from Spider-Man: Far From Home, by Sideshow Originals",
    brand: "Marvel",
    category: "Statues",
    price: 125,
    countInStock: 1,
    rating: 5,
    numReviews: 12,
  },
  {
    _id: "4",
    name: "Batman: Three Jokers",
    image: "/images/three-jokers.jpg",
    description:
      "The collected volume of the game changing event in Batman, Three Jokers. Containing issues 1,2, and 3",
    brand: "DC",
    category: "Books",
    price: 18.99,
    countInStock: 3,
    rating: 5,
    numReviews: 12,
  },
  {
    _id: "5",
    name: "Dungeons & Dragons: Starter Set",
    image: "/images/d&dset.jpg",
    description:
      "Start your journey with friends in the world's most popular pen and paper table-top rpg, Dungeons & Dragons, in the Dungeons & Dragons: Starter Set",
    brand: "Wizards of the Coas",
    category: "Board Games",
    price: 12.99,
    countInStock: 3,
    rating: 3.5,
    numReviews: 10,
  },
  {
    _id: "6",
    name: "Marvel Legends",
    description: "6 inch, high detailed figurine",
    brand: "Amazon",
    category: "Toys",
    price: 19.99,
    countInStock: [
      {
        image: "/images/legends-doom.jpeg",
        toyName: "Doctor Doom",
        stock: 2,
      },
      {
        image: "/images/legends-spiderman.jpg",
        toyName: "Spider-Man",
        stock: 1,
      },
    ],
    rating: 4,
    numReviews: 12,
  },
];

module.exports = products;
