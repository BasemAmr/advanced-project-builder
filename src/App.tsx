import { useState, useEffect } from 'react'
import './App.css'
import Product from './components/Product'
import { FormDataList, ProductList, categories, colors } from './data'
import Modal from './UI/Modal'
import Button from './UI/Button'
import { IProduct } from './interfaces'
import Input from './UI/Input'
import ColorCircle from './UI/ColorCircle'
import { validate } from './validation'
import ErrorMsg from './UI/ErrorMsg'
import { v4 as uuidv4 } from 'uuid';
import { Example } from './UI/Selectt'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {

  // Default form data structure for a product
  const defaultFormData: IProduct = {
    title: '',
    description: '',
    price: '',
    category: {
      name: '',
      imageURL: '',
    },
    imageURL: '',
    colors: [],
  }

  /* ------- STATE ------- */
  // State to manage the visibility of the add product modal
  let [isOpen, setIsOpen] = useState(false)

  // State to manage the form data for adding a new product
  const [formData, setFormData] = useState<IProduct>(defaultFormData)

  // State to manage the form data for editing an existing product
  const [editFormData, setEditFormData] = useState<IProduct>(defaultFormData)

  // State to manage the list of products
  const [products, setProducts] = useState<IProduct[]>(ProductList)

  // State to manage form validation errors
  const [errors, setErrors] = useState({
    title: '',
    description: '',
    price: '',
    imageURL: '',
  })

  // State to manage selected colors for a new product
  const [selectedColors, setSelectedColors] = useState<string[]>([])
  // State to manage selected colors for editing a product
  const [editSelectedColors, setEditSelectedColors] = useState<string[]>([])

  // State to manage the selected category for a product
  const [selected, setSelected] = useState(categories[0])

  // State to manage the product being edited
  const [editProduct, setEditProduct] = useState<IProduct | null>(defaultFormData)
  // State to manage the visibility of the edit product modal
  const [openEditModal, setOpenEditModal] = useState(false)

  // State to manage the confirmation of product deletion
  const [confirmDelete, setConfirmDelete] = useState(false)
  // State to manage the product to be deleted
  const [productToDelete, setProductToDelete] = useState<string | null>(null)

  // Effect to set the form data and selected colors when a product is being edited
  useEffect(() => {
    if (editProduct) {
      setEditFormData(editProduct)
      setEditSelectedColors(editProduct.colors)
    }
  }, [editProduct])

  /* ------- HANDLER ------- */
  // Handler to close the add product modal
  function closeModal() {
    setIsOpen(false)
  }

  // Handler to open the add product modal
  function openModal() {
    setIsOpen(true)
  }

  // Handler to update form data for adding a new product
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors({
      ...errors,
      [e.target.name]: '',
    });
  }

  // Handler to update form data for editing a product
  function handleEditChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEditFormData({
      ...editFormData,
      [e.target.name]: e.target.value,
    });
    setErrors({
      ...errors,
      [e.target.name]: '',
    });
  }

  // Handler to submit the form for adding a new product
  function onSubmit(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();

    const { title, description, price, imageURL } = formData;

    // Validate the form data
    const errors = validate({ title, description, price, imageURL, colors: selectedColors });

    const formattedErrors = {
      title: errors.title || '',
      description: errors.description || '',
      price: errors.price || '',
      imageURL: errors.imageURL || '',
      colors: errors.colors || '',
    };

    // Check if there are any validation errors
    const hasError = Object.values(formattedErrors).some((error) => error !== '');
    if (hasError) {
      console.log('Form has errors');
      console.log(formattedErrors);
      setErrors(formattedErrors);
      return;
    }

    // Add the new product to the product list
    setProducts((prev) => [
      ...prev,
      {
        ...formData,
        colors: selectedColors,
        category: selected,
        id: uuidv4(),
      },
    ]);

    // Reset the form data and close the modal
    setFormData(defaultFormData);
    setSelectedColors([]);
    closeModal();
    toast.success('Product Added Successfully')
  }

  // Handler to submit the form for editing a product
  function onEditSubmit(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();

    const { title, description, price, imageURL } = editFormData;

    // Validate the form data
    const errors = validate({ title, description, price, imageURL, colors: editSelectedColors });

    const formattedErrors = {
      title: errors.title || '',
      description: errors.description || '',
      price: errors.price || '',
      imageURL: errors.imageURL || '',
      colors: errors.colors || '',
    };

    // Check if there are any validation errors
    const hasError = Object.values(formattedErrors).some((error) => error !== '');
    if (hasError) {
      console.log('Form has errors');
      console.log(formattedErrors);
      setErrors(formattedErrors);
      return;
    }

    // Update the product in the product list
    setProducts((prev) =>
      prev.map((product) => {
        if (product.id === editProduct?.id) {
          return {
            ...editFormData,
            colors: editSelectedColors,
            category: selected,
            id: editProduct?.id || '',
          };
        }
        return product;
      })
    );
    setEditSelectedColors([]);
    setOpenEditModal(false);
    toast.success('Product Edited Successfully')
  }

  // Handler to close the add product modal and reset the form data
  function onClose() {
    closeModal()
    setFormData(defaultFormData)
  }

  // Handler to select or deselect a color for a product
  function handleSelectColor(color: string, isEdit: boolean = false) {
    if (isEdit) {
      if (editSelectedColors.includes(color)) {
        setEditSelectedColors(editSelectedColors.filter((selectedColor) => selectedColor !== color))
      } else {
        setEditSelectedColors(prev => [...prev, color])
      }
    } else {
      if (selectedColors.includes(color)) {
        setSelectedColors(selectedColors.filter((selectedColor) => selectedColor !== color))
      } else {
        setSelectedColors(prev => [...prev, color])
      }
    }
  }

  // Handler to initiate the deletion of a product
  function onDelete(productId: string) {
    setProductToDelete(productId);
    setConfirmDelete(true);
  }

  // Handler to confirm the deletion of a product
  function confirmDeleteProduct() {
    if (productToDelete) {
      setProducts((prev) => prev.filter((product) => product.id !== productToDelete));
      toast.success('Product Deleted Successfully');
      setConfirmDelete(false);
      setProductToDelete(null);
    }
  }

  // Handler to cancel the deletion of a product
  function cancelDelete() {
    setConfirmDelete(false);
    setProductToDelete(null);
  }

  /* ------- RENDER ------- */
  // Function to render the list of products
  const renderProductList = () => {
    return products.map((product) => {
      return <Product key={product.id} product={product} setEditProduct={setEditProduct} setShowModal={setOpenEditModal} onDelete={onDelete}/>
    })
  }

  // Function to render the form for adding a new product
  const renderForm = () => {
    return FormDataList.map((form) => {
      return (
        <div className="mb-4 flex flex-col" key={form.id}>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={form.id}>
            {form.label}
          </label>
          <Input
            id={form.id}
            name={form.name}
            value={formData[form.name]}
            onChange={handleChange}
          />
          {errors[form.name] !== '' && <ErrorMsg message={errors[form.name]} />}
        </div>
      )
    })
  }

  // Function to render the color selection circles
  const renderColors = (isEdit: boolean = false) => {
    return colors.map((color) => {
      return (
        <ColorCircle key={color} color={color} onClick={() => handleSelectColor(color, isEdit)} />
      )
    })
  }

  return (
    <main className='container mx-auto p-4'>
      <Button className='bg-indigo-700 mb-4' onClick={openModal}>
        ADD
      </Button>
      <div
        className=' 
      grid
      grid-cols-1
      border
      border-gray-300
      rounded-lg
      shadow-md
      md:grid-cols-2
      xl:grid-cols-4
      p-4
      gap-4
      justify-items-center'>
        {renderProductList()}
      </div>

      {/* Add Button Modal */}
      <Modal isOpen={isOpen} closeModal={closeModal} title="ADD A NEW PRODUCT">
        <div className='space-y-3'>
          {renderForm()}

          <Example selected={selected} setSelected={setSelected} />

          <div className='flex flex-col'>
            <label className='block text-gray-700 text-sm font-bold mb-2'>
              Colors
            </label>
            <div className='flex gap-2 flex-wrap '>{renderColors()}</div>
          </div>

          <div className='flex flex-col'>
            <label className='block text-gray-700 text-sm font-bold mb-2'>
              Selected Colors
            </label>
            <div className='flex gap-2 flex-wrap'>
              {selectedColors.map((color, index) => (
                <ColorCircle key={index} color={color} />
              ))}
            </div>
          </div>

          <div className='flex space-x-3 items-center'>
            <Button className='bg-indigo-700' onClick={onSubmit}>
              ADD
            </Button>
            <Button className='bg-red-700' onClick={onClose}>
              CANCEL
            </Button>
          </div>
        </div>
      </Modal>

      {/* Edit Button Modal */}
      <Modal isOpen={openEditModal} closeModal={() => setOpenEditModal(false)} title="EDIT PRODUCT">
        <div className='space-y-3'>
          {FormDataList.map((form) => {
            return (
              <div className='mb-4 flex flex-col' key={form.id}>
                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor={form.id}>
                  {form.label}
                </label>
                <Input
                  id={form.id}
                  name={form.name}
                  value={editFormData[form.name]}
                  onChange={handleEditChange}
                />
                {errors[form.name] !== '' && <ErrorMsg message={errors[form.name]} />}
              </div>
            )
          })}

            {
            // Select list opened with product's already selected category
            <Example selected={editFormData.category} setSelected={setSelected} />
            }

          <div className='flex flex-col'>
            <label className='block text-gray-700 text-sm font-bold mb-2'>
              Colors
            </label>
            <div className='flex gap-2 flex-wrap'>{renderColors(true)}</div>
          </div>
          <div className='flex flex-col'>
            <label className='block text-gray-700 text-sm font-bold mb-2'>
              Selected Colors
            </label>
            <div className='flex gap-2 flex-wrap'>
              {editSelectedColors.map((color, index) => (
                <ColorCircle key={index} color={color} />
              ))}
            </div>
          </div>

          <div className='flex space-x-3 items-center'>
            <Button className='bg-indigo-700' onClick={onEditSubmit}>
              EDIT
            </Button>
            <Button className='bg-red-700' onClick={() => setOpenEditModal(false)}>
              CANCEL
            </Button>
          </div>
        </div>
      </Modal>
      {/* Confirm Delete Modal */}
      <Modal isOpen={confirmDelete} closeModal={cancelDelete} title="Confirm Deletion">
        <div className='space-y-3 p-4'>
          <p className='text-lg text-gray-700'>Are you sure you want to delete this product?</p>
          <div className='flex justify-end space-x-3'>
        <Button className='bg-red-700 text-white px-4 py-2 rounded' onClick={confirmDeleteProduct}>
          DELETE
        </Button>
        <Button className='bg-gray-700 text-white px-4 py-2 rounded' onClick={cancelDelete}>
          CANCEL
        </Button>
          </div>
        </div>
      </Modal>

    </main>
  )
}

export default App
