
import React, { useState } from 'react'
import { assets } from '../assets/assets'
import axios from 'axios'
import { backendUrl } from '../config'
import { toast } from 'react-toastify'

const Add = ({ token }) => {

  const [images, setImages] = useState([null, null, null, null])
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [category, setCategory] = useState('Men')
  const [subCategory, setSubCategory] = useState('Topwear')
  const [bestseller, setBestseller] = useState(false)
  const [sizes, setSizes] = useState([])

  console.log(bestseller,"BestSeller");

  const handleImageChange = (index, file) => {
    const updatedImages = [...images]
    updatedImages[index] = file
    setImages(updatedImages)
  }

  const toggleSize = (size) => {
    setSizes(prev =>
      prev.includes(size)
        ? prev.filter(s => s !== size)
        : [...prev, size]
    )
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault()

    if (!token) {
      console.error("❌ No token found. Please login again.")
      return
    }

    try {
      const formData = new FormData()

      formData.append('name', name)
      formData.append('description', description)
      formData.append('price', Number(price))
      formData.append('category', category)
      formData.append('subCategory', subCategory)
      formData.append('bestSeller', bestseller)
      formData.append('sizes', JSON.stringify(sizes))

      images.forEach((img, index) => {
        if (img) {
          formData.append(`image${index + 1}`, img)
        }
      })

      console.log("✅ TOKEN SENT:", token)

     
      const response = await axios.post(
  `${backendUrl}/api/product/add`,
  formData,
  {
    headers: {
      Authorization: `Bearer ${token}`,  // ✅ standard way
      "Content-Type": "multipart/form-data"
    }
  }
);


      if (response.data.success) {
        toast.success(response.data.message)
           setImages([null, null, null, null])
           setName('')
           setDescription('')
           setPrice('')
           setSizes([])
           setBestseller(false)
      } else {
        toast.error(response.data.message)
      }

      

    } catch (error) {
      console.error(error)
      toast.error(error.message)
    }
  }

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col w-full items-start gap-4'>

      <div>
        <p className='mb-2 text-[#06B6D4]'>Upload Images</p>
        <div className='grid md:grid-cols-4 grid-cols-2  gap-2'>
          {images.map((img, index) => (
            <label key={index}>
              <img
                className='w-20 h-20 object-cover cursor-pointer'
                src={img ? URL.createObjectURL(img) : assets.upload_area}
                alt=""
              />
              <input
                type="file"
                hidden
                accept="image/*"
                onChange={(e) => handleImageChange(index, e.target.files[0])}
              />
            </label>
          ))}
        </div>
      </div>

      <div className='w-[250px] md:w-[500px]'>
        <p className='mb-2 text-[#06B6D4]'>Book Name</p>
        <input
          className='w-full px-3 py-2 border'
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div className='w-[250px] md:w-[500px]'>
        <p className='mb-2 text-[#06B6D4]'>Book Description</p>
        <textarea
          className='w-full px-3 py-2 border'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>

      <div className='flex flex-col  md:flex-row  gap-6'>
       

        <div>
          <p className='text-[#06B6D4]'>Book Category</p>
          <select value={subCategory} onChange={(e) => setSubCategory(e.target.value)} className='px-3 py-2 border'>
            <option>Optional</option>
            <option>compulsory</option>
           
          </select>
        </div>

        <div>
          <p className='text-[#06B6D4]'>Price</p>
          <input
            className='px-3 py-2 border'
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
      </div>

     

      <div className='flex gap-2 items-center'>
        <input
          type="checkbox"
          checked={bestseller}
          onChange={() => setBestseller(true)}
        />
        <label className='text-[#06B6D4]'>Add to Bestseller</label>
      </div>

      <button type='submit' className='w-28 py-3 bg-[#111827]  text-[#06B6D4]'>
        ADD
      </button>

    </form>
  )
}

export default Add

