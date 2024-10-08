import React from 'react'
import Image from './Image'
import Button from '../UI/Button'
import { IProduct } from '../interfaces'
import { textSlicer } from '../utils/functions'

interface ProductProps {
    product: IProduct,
    setEditProduct: React.Dispatch<React.SetStateAction<IProduct | null>>,
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>,
    onDelete: (id: string) => void
}

const Product: React.FC<ProductProps> = ({ product, onDelete, setEditProduct, setShowModal }) => {

    // Handling the Edit button click
    const handleEdit = () => {
        setEditProduct(product)
        setShowModal(true)
    }

    return (
        <div className='
        flex
        flex-col
        gap-4
        p-8
        border
        border-gray-200
        rounded-lg
        font-sans
        max-w-sm
        lg:max-w-md
        shadow-lg
        transition-transform
        transform
        hover:scale-105
        hover:shadow-2xl'>
            {/* Product Image */}
            <Image src={product.imageURL} className="border border-gray-200 rounded-md w-full h-64 object-cover transition-opacity hover:opacity-90" alt={product.title} />

            {/* Product Title */}
            <h2 className='text-xl font-bold text-gray-800'>{product.title}</h2>

            {/* Product Description */}
            <p className='leading-relaxed text-gray-600'>{textSlicer(product.description)}</p>

            {/* Color Options - Display color variants */}
            <div className='flex gap-4 px-4'>
                {product.colors.map((color) => {
                    return (
                        <span
                            key={color}
                            className={`w-5 h-5 rounded-full border border-gray-300`}
                            style={{ backgroundColor: color }}
                        />
                    );
                })}
            </div>

            {/* Price and Category */}
            <div className='flex justify-between items-center lg:flex-col lg:items-baseline'>
                <span className='text-lg font-semibold text-gray-800'>${product.price}</span> {/* Price */}
                <div className='flex items-center gap-4'>
                    {/* Category Icon */}
                    <Image src={product.category.imageURL} alt={product.category.name} className='w-8 h-8 rounded-full object-bottom' />
                    <span className='text-sm text-gray-600'>{product.category.name}</span> {/* Category Name */}
                </div>
            </div>

            {/* Action Buttons - Edit and Remove */}
            <div className='flex gap-4'>
                <Button className='bg-indigo-700 text-white px-4 py-2 rounded-md transition-colors hover:bg-indigo-600' onClick={handleEdit}>
                    EDIT
                </Button>
                <Button className='bg-red-700 text-white px-4 py-2 rounded-md transition-colors hover:bg-red-600' onClick={() => onDelete(product.id!)}>
                    REMOVE
                </Button>
            </div>
        </div>
    )
}

export default Product
