
import { useState } from 'react'
import './App.css'
import Product from './components/Product'
import { FormDataList, ProductList } from './data'
import Modal from './UI/Modal'
import  Button  from './UI/Button'

function App() {

  /* ------- STATE ------- */
  let [isOpen, setIsOpen] = useState(false)


  /* ------- HANDLER ------- */
  function closeModal () {
    setIsOpen(false)
  }

  function openModal () {
    setIsOpen(true)
  }


  /* ------- RENDER ------- */
  const renderProductList = () => {
    return ProductList.map((product) => {
      return <Product key={product.id} product={product} />
    })
  }
   
  const renderForm = () => {
    return FormDataList.map((form) => {
      return (
        <div className="mb-4 flex flex-col">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            {form.label}
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={(e) => console.log(e.target.value)}
          />
    </div>
      )
    })}

  return (
    <main className='container mx-auto'>
      <Button className='bg-indigo-700' onClick={openModal}>
        ADD
      </Button>
      <div
      className=' 
      grid
      grid-cols-1
      border
      border-black
      rounded-md
      md:grid-cols-2
      xl:grid-cols-4
      p-4
      gap-4
      justify-items-center	'>
        {renderProductList()}
      </div>
      <Modal isOpen={isOpen}  closeModal={closeModal} title = "ADD A NEW PRODUCT">
        <div className='space-y-3'>
          {renderForm()}
          <div className='flex space-x-3 items-center'>
            <Button className='bg-indigo-700' onClick={closeModal}>
              ADD
            </Button>
            <Button className='bg-red-700' onClick={closeModal}>
              CANCEL
            </Button>
          </div>
        </div>
      </Modal>
    </main>
  )
}

export default App
