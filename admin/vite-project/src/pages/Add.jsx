
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

      // const response = await axios.post(
      //   `${backendUrl}/api/product/add`,
      //   formData,
      //   {
      //     headers: {
      //       token,
      //       "Content-Type": "multipart/form-data"
      //     }
      //   }
      // )
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
        <p className='mb-2'>Upload Images</p>
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
        <p className='mb-2'>Food Name</p>
        <input
          className='w-full px-3 py-2 border'
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div className='w-[250px] md:w-[500px]'>
        <p className='mb-2'>Food Description</p>
        <textarea
          className='w-full px-3 py-2 border'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>

      <div className='flex flex-col  md:flex-row  gap-6'>
        <div>
          <p>test</p>
          <select value={category} onChange={(e) => setCategory(e.target.value)} className='px-3 py-2 border'>
            <option>Medium</option>
            <option>spicy</option>
            <option>normal</option>
          </select>
        </div>

        <div>
          <p>Food Category</p>
          <select value={subCategory} onChange={(e) => setSubCategory(e.target.value)} className='px-3 py-2 border'>
            <option>Fast Food</option>
            <option>vegi</option>
            <option>non vegi</option>
          </select>
        </div>

        <div>
          <p>Price</p>
          <input
            className='px-3 py-2 border'
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
      </div>

      <div >
        <p className='mb-2'>amount</p>
        <div className='flex flex-col  md:flex-row  gap-2'>
          {['kilo', 'half', 'full'].map(size => (
            <p
              key={size}
              onClick={() => toggleSize(size)}
              className={`px-3 py-1 cursor-pointer border ${sizes.includes(size) ? 'bg-[#d4a257] text-white' : 'bg-slate-200'}`}
            >
              {size}
            </p>
          ))}
        </div>
      </div>

      <div className='flex gap-2 items-center'>
        <input
          type="checkbox"
          checked={bestseller}
          onChange={() => setBestseller(true)}
        />
        <label>Add to Bestseller</label>
      </div>

      <button type='submit' className='w-28 py-3 bg-black text-white'>
        ADD
      </button>

    </form>
  )
}

export default Add


// import React, { useState } from 'react'
// import { assets } from '../assets/assets'
// import axios from 'axios'
// import { backendUrl } from '../config'
// import { toast } from 'react-toastify'

// const Add = ({ token }) => {

//   const [images, setImages] = useState([null, null, null, null])
//   const [name, setName] = useState('')
//   const [description, setDescription] = useState('')
//   const [price, setPrice] = useState('')
//   const [category, setCategory] = useState('Pizza')
//   const [foodType, setFoodType] = useState('Veg')
//   const [prepTime, setPrepTime] = useState('')
//   const [available, setAvailable] = useState(true)
//   const [bestseller, setBestseller] = useState(false)

//   const handleImageChange = (index, file) => {
//     const updatedImages = [...images]
//     updatedImages[index] = file
//     setImages(updatedImages)
//   }

//   const onSubmitHandler = async (e) => {
//     e.preventDefault()

//     try {
//       const formData = new FormData()

//       formData.append('name', name)
//       formData.append('description', description)
//       formData.append('price', Number(price))
//       formData.append('category', category)
//       formData.append('foodType', foodType)
//       formData.append('prepTime', prepTime)
//       formData.append('available', available)
//       formData.append('bestSeller', bestseller)

//       images.forEach((img, index) => {
//         if (img) {
//           formData.append(`image${index + 1}`, img)
//         }
//       })

//       const response = await axios.post(
//         `${backendUrl}/api/product/add`,
//         formData,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "multipart/form-data"
//           }
//         }
//       )

//       if (response.data.success) {
//         toast.success("Food item added successfully")

//         setImages([null, null, null, null])
//         setName('')
//         setDescription('')
//         setPrice('')
//         setPrepTime('')
//         setBestseller(false)
//         setAvailable(true)
//         setFoodType('Veg')
//         setCategory('Pizza')

//       } else {
//         toast.error(response.data.message)
//       }

//     } catch (error) {
//       toast.error(error.message)
//     }
//   }

//   return (
//     <form onSubmit={onSubmitHandler} className='flex flex-col gap-5 w-full'>

//       {/* IMAGE UPLOAD */}
//       <div>
//         <p className='mb-2 font-semibold'>Upload Food Images</p>
//         <div className='grid grid-cols-2 md:grid-cols-4 gap-3'>

//           {images.map((img, index) => (
//             <label
//               key={index}
//               className=' p-2 rounded-md cursor-pointer flex items-center justify-center'
//             >
//               <img
//                 className='w-20 h-20 object-cover rounded'
//                 src={img ? URL.createObjectURL(img) : assets.upload_area}
//                 alt=""
//               />
//               <input
//                 type="file"
//                 hidden
//                 onChange={(e) => handleImageChange(index, e.target.files[0])}
//               />
//             </label>
//           ))}

//         </div>
//       </div>

//       {/* FOOD NAME */}
//       <input
//         placeholder='Food Name'
//         className='border border-gray-400 px-3 py-2 bg-black text-gray-300 placeholder-gray-300'
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         required
//       />

//       {/* DESCRIPTION */}
//       <textarea
//         placeholder='Food Description'
//         className='border border-gray-300 px-3 py-2 bg-black text-gray-300 placeholder-gray-300'
//         value={description}
//         onChange={(e) => setDescription(e.target.value)}
//         required
//       />

//       {/* CATEGORY + TYPE */}
//       <div className='flex flex-col md:flex-row gap-4'>

//         <select
//           value={category}
//           onChange={(e) => setCategory(e.target.value)}
//           className='border border-gray-300 px-3 py-2 text-gray-300 bg-black'
//         >
//           <option>Pizza</option>
//           <option>Burger</option>
//           <option>Drinks</option>
//           <option>Deserts</option>
//         </select>

//         <select
//           value={foodType}
//           onChange={(e) => setFoodType(e.target.value)}
//           className='border border-gray-300 px-3 py-2 text-gray-300 bg-black'
//         >
//           <option>Veg</option>
//           <option>Non-Veg</option>
//         </select>

//       </div>

//       {/* PRICE + PREP TIME */}
//       <div className='flex flex-col md:flex-row gap-4'>

//         <input
//           type="number"
//           placeholder='Price'
//           className='border border-gray-300 px-3 py-2 text-[#d4a257] bg-black placeholder-gray-300'
//           value={price}
//           onChange={(e) => setPrice(e.target.value)}
//           required
//         />

//         <input
//           type="number"
//           placeholder='Preparation Time (mins)'
//           className='border border-gray-300 px-3 py-2 text-[#d4a257] bg-black placeholder-gray-300'
//           value={prepTime}
//           onChange={(e) => setPrepTime(e.target.value)}
//         />

//       </div>

//       {/* CHECKBOXES */}
//       <div className='flex flex-col gap-2 text-gray-300'>

//         <label className='flex gap-2 items-center '>
//           <input
//             type="checkbox"
//             checked={available}
//             onChange={() => setAvailable(!available)}
//           />
//           Available
//         </label>

//         <label className='flex gap-2 items-center'>
//           <input
//             type="checkbox"
//             checked={bestseller}
//             onChange={() => setBestseller(!bestseller)}
//           />
//           Add to Bestseller
//         </label>

//       </div>

//       {/* SUBMIT */}
//       <button className='bg-[#d4a257] text-black py-2 w-32 rounded-full'>
//         ADD FOOD
//       </button>

//     </form>
//   )
// }

// export default Add