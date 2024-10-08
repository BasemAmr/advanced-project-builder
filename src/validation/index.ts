export const validate = (product: {title: string, description: string, imageURL:string,price:string, colors: string[]}) => {
    const errors: {title?: string, description?: string, imageURL?: string, price?: string, colors?: string} = {
        title: '',
        description: '',
        imageURL: '',
        price: '',
        colors: ''
    }
    if(!product.title.trim() || product.title.length <= 10 || product.title.length >= 50) {
        errors.title = 'Title must be between 10 and 50 characters'
    }
    if(!product.description.trim() || product.description.length <= 10 || product.description.length >= 800) {
        errors.description = 'Title must be between 10 and 800 characters'
    }

    const validUrl = /^(ftp|http|https):\/\/[^ "]+$/.test(product.imageURL)

    if(!product.imageURL.trim() || !validUrl) {
        errors.imageURL = 'Valid Image URL is required'
    }
    if(!product.price.trim() || isNaN(Number(product.price))) {
        errors.price = 'Price is required'
    }

    if(product.colors.length === 0) {
        errors.colors = 'At least one color is required'
    }

    return errors
}
