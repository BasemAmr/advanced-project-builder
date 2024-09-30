import React from 'react'
import Image from './Image'
import Button from '../UI/Button'
import { IProduct } from '../interfaces'
import {textSlicer} from '../utils/functions'


interface ProductProps{
    product:IProduct
}

const Product: React.FC<ProductProps> = ({product}) => {
  return (
    <div className='
    flex
    flex-col
    gap-4
    p-8
    border
    border-black
    rounded-lg
    font-sans
    max-w-sm
    lg:max-w-md'>
        {/* Product Image */}
        <Image src={product.imageURL} className="border border-gray-200 rounded-md w-full h-64 object-cover" alt= {product.title} />
        
        {/* Product Title */}
        <h2 className='text-xl font-bold'>{product.title}</h2>
        
        {/* Product Description */}
        <p className='leading-relaxed'>{textSlicer(product.description)}</p>
        
        {/* Color Options - Display color variants  */}
        <div className='flex gap-4 px-4'>
            {product.colors.map((color) => {
                return (
                    <span
                        key={color}
                        className={`w-5 h-5 rounded-full`}
                        style={{ backgroundColor: color }}
                    />
                );
            })}
        </div>
        
        {/* Price and Category */}
        <div className='flex justify-between items-center lg:flex-col lg:items-baseline '>
            <span>{product.price}</span> {/* Price */}
            <div className='flex items-center gap-4'>
                {/* Category Icon */}
                <Image src={product.category.imageURL} alt={product.category.name} className='w-8 h-8 rounded-full object-bottom'/>
                <span className='text-sm'>{product.category.name}</span> {/* Category Name */}
            </div>
        </div>
        
        {/* Action Buttons - Edit and Remove */}
        <div className='flex gap-4'>
            <Button className='bg-indigo-700' onClick={()=>{console.log("clicked")}}>
                EDIT
            </Button>
            <Button className='bg-red-700'>
                REMOVE
            </Button>
        </div>
    </div>
  )
}

export default Product
