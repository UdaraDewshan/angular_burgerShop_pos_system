import { product } from "../model/product.model";

export const MOCK_PRODUCTS: product[] = [
  {
    id: 1,
    name: 'Double Whopper',
    price: 1500,
    image: 'images/bg2.png',
    description: 'Two flame-grilled beef patties with melted cheese.',
    categary: 'burgers'
  },
  {
    id: 2,
    name: 'Spicy Chicken Royale',
    price: 1200,
    image: 'images/bg2.png',
    description: 'Crispy chicken breast with spicy mayo and lettuce.',
    categary: 'burgers'
  },
  {
    id: 3,
    name: 'French Fries (L)',
    price: 600,
    image: 'images/bg2.png',
    description: 'Golden crispy potato fries with salt.',
    categary: 'sides'
  },
  {
    id: 4,
    name: 'Coca Cola',
    price: 300,
    image: 'images/bg2.png',
    description: 'Chilled refreshing sparkling drink.',
    categary: 'drinks'
  }
];