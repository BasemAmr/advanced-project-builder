export interface IProduct {
    id?: string | undefined | null; // Unique ID of the product
    imageURL: string,       // URL of the product image
    title: string,            // Title of the product
    description: string,      // Description of the product
    price: string,            // Price of the product
    colors: string[],
    category: {     
        id?: string | undefined;          // Category of the product
        name: string;         // Name of the category
        imageURL: string;     // URL of the category image
    };
}

export interface IFormField {
    id: string;
    name: 'imageURL' | 'title' | 'description' | 'price';
    label: string;
    type: string;
  }
  

export interface ICategory {
    id?: string | undefined;
    name: string;
    imageURL: string;
}