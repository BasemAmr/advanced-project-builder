export interface IProduct {
    id?: string | undefined
    imageURL: string,       // URL of the product image
    title: string,            // Title of the product
    description: string,      // Description of the product
    price: number,            // Price of the product
    colors: string[],
    category: {               // Category of the product
        name: string;         // Name of the category
        imageURL: string;     // URL of the category image
    };
}

export interface IFormField {
    id: string;
    name: string;
    label: string;
    type: string;
  }
  