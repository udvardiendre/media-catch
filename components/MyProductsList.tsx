import React from 'react'
import MyProductCard

from './MyProductCard'
type Props = {
  products: any
  handleEdit: (productId: any) => void
  handleDelete: (productId: any) => void
}

const MyProductsList = ({products, handleEdit, handleDelete}: Props) => {
  
  return (
    <div className='bg-secondary-bg max-w-[702px] min-[702px]:w-[702px] w-full flex mt-5 p-5 flex-col items-center rounded shadow-md'>
      <h1 className="font-medium self-start">Termékeim</h1>
        {products.map((product: any) => (
          <MyProductCard key={product._id} id={product._id} brand={product.brand} name={product.name} price={product.price} description={product.description} images={product.photos} handleEdit={handleEdit} handleDelete={handleDelete} />
        ))}
    </div>
  ) 
} 

export default MyProductsList