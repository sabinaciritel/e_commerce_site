import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Admin',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'User',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: 'IPHONE 15',
      slug: 'iphone-15',
      category: 'Phone',
      image: '/images/p1.avif', // 679px × 829px
      price: 1000,
      countInStock: 10,
      brand: 'iphone',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      name: 'IPHONE 14',
      slug: 'iphone-14',
      category: 'phone',
      image: '/images/p2.jpg',
      price: 900,
      countInStock: 0,
      brand: 'iphone',
      rating: 4.0,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      name: 'SAMSUNG S21',
      slug: 'samsung-s21',
      category: 'phone',
      image: '/images/p3.jpg',
      price: 800,
      countInStock: 15,
      brand: 'iphone',
      rating: 4.5,
      numReviews: 14,
      description: 'high quality product',
    },
    {
      name: 'LENOVO IDEAPAD3',
      slug: 'lenovo-ideapad3',
      category: 'laptop',
      image: '/images/p4.webp',
      price: 280,
      countInStock: 15,
      brand: 'lenovo',
      rating: 4.5,
      numReviews: 14,
      description: 'high quality product',
    },
  ],
};
export default data;
