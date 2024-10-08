import { v4 as uuidv4 } from 'uuid';
import { ICategory, IFormField, IProduct } from '../interfaces';

export const ProductList: IProduct[] = [
    {
      "id": uuidv4(),
      "imageURL": "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "title": "Modern Wooden Chair",
      "description": "A sleek and stylish wooden chair perfect for your living room or study. Designed with ergonomic comfort and modern aesthetics in mind.",
      "price": "149.99",
      "colors": [
        "#eaeaea", // Light Grey
        "#3b3b3b", // Charcoal Black
        "#795548"  // Walnut Brown
      ],
      "category": {
        "name": "Furniture",
        "imageURL": "https://images.unsplash.com/photo-1567016432779-094069958ea5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnVybml0dXJlfGVufDB8fDB8fHww"
      }
    },
    {
      "id": uuidv4(),
      "imageURL": "https://images.unsplash.com/photo-1461141346587-763ab02bced9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d3Jpc3QlMjB3YXRjaHxlbnwwfHwwfHx8MA%3D%3D",
      "title": "Elegant Wrist Watch",
      "description": "A premium-quality wrist watch with a stainless steel band and water-resistant features, making it the perfect accessory for any occasion.",
      "price":" 249.99",
      "colors": [
        "#c0c0c0", // Silver
        "#000000", // Black
        "#d4af37"  // Gold
      ],
      "category": {
        "name": "Accessories",
        "imageURL": "https://images.unsplash.com/photo-1624823183493-ed5832f48f18?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWNjZXNzb3JpZXN8ZW58MHx8MHx8fDA%3D"
      }
    },
    {
      "id": uuidv4(),
      "imageURL": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
      "title": "Bluetooth Headphones",
      "description": "High-fidelity Bluetooth headphones with noise-canceling technology and up to 30 hours of battery life. Ideal for music lovers on the go.",
      "price": "99.99",
      "colors": [
        "#1e1e1e", // Matte Black
        "#ff0000", // Red
        "#0047ab"  // Navy Blue
      ],
      "category": {
        "name": "Electronics",
        "imageURL": "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D"
      }
    },
    {
      "id": uuidv4(),
      "imageURL": "https://images.unsplash.com/photo-1712658957124-e66711623ca7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJhY2tiYWd8ZW58MHx8MHx8fDA%3D",
      "title": "Stylish Backpack",
      "description": "A durable, water-resistant backpack with multiple compartments, perfect for traveling or daily use. Available in various trendy colors.",
      "price": "79.99",
      "colors": [
        "#2f4f4f", // Dark Slate
        "#ff4500", // Orange Red
        "#4682b4"  // Steel Blue
      ],
      "category": {
        "name": "Bags & Luggage",
        "imageURL": "https://images.unsplash.com/photo-1527385352018-3c26dd6c3916?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmFnc3xlbnwwfHwwfHx8Mg%3D%3D"
      }
    },
    {
      "id": uuidv4(),
      "imageURL": "https://images.unsplash.com/photo-1512295767273-ac109ac3acfa",
      "title": "Premium Leather Shoes",
      "description": "Handcrafted leather shoes with superior comfort and timeless design. Perfect for formal occasions or as a stylish everyday choice.",
      "price": "199.99",
      "colors": [
        "#8b4513", // Saddle Brown
        "#000000", // Black
        "#d2691e"  // Chocolate
      ],
      "category": {
        "name": "Footwear",
        "imageURL": "https://images.unsplash.com/photo-1593032465171-331ff502fae4"
      }
    }
  ]


export const FormDataList:IFormField[] = [
  {
    "id": "title",
    "name": "title",
    "label": "Product Name",
    "type": "text",
  },
  {
    "id": "imageURL",
    "name": "imageURL",
    "label": "Product Image URL",
    "type": "text",
  },
  {
    "id": "price",
    "name": "price",
    "label": "Product Price",
    "type": "number",
  },
  {
    "id": "description",
    "name": "description",
    "label": "Product Description",
    "type": "textarea",
  }
];
  

export const colors : string[] = [
    "#eaeaea", // Light Grey
    "#3b3b3b", // Charcoal Black
    "#795548", // Walnut Brown
    "#c0c0c0", // Silver
    "#000000", // Black
    "#d4af37", // Gold
    "#1e1e1e", // Matte Black
    "#ff0000", // Red
    "#0047ab", // Navy Blue
    "#2f4f4f", // Dark Slate
    "#ff4500", // Orange Red
    "#4682b4", // Steel Blue
    "#8b4513", // Saddle Brown
    "#d2691e"  // Chocolate
  ]


export const categories:ICategory[] = [
  {
id: uuidv4(),
name: "Furniture",
imageURL: "https://images.unsplash.com/photo-1567016432779-094069958ea5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnVybml0dXJlfGVufDB8fDB8fHww"
  },
  {
id: uuidv4(),
name: "Accessories",
imageURL: "https://images.unsplash.com/photo-1624823183493-ed5832f48f18?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWNjZXNzb3JpZXN8ZW58MHx8MHx8fDA%3D"
  },
  {
id: uuidv4(),
name: "Electronics",
imageURL: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
id: uuidv4(),
name: "Bags & Luggage",
imageURL: "https://images.unsplash.com/photo-1527385352018-3c26dd6c3916?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmFnc3xlbnwwfHwwfHx8Mg%3D%3D"
  },
  {
id: uuidv4(),
name: "Footwear",
imageURL: "https://images.unsplash.com/photo-1593032465171-331ff502fae4"
  }

]