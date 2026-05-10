
import React, { useEffect, useState } from 'react'
import { backendUrl, currency } from '../config'
import { toast } from 'react-toastify'
import axios from 'axios'

const List = ({ token }) => {

  const [list, setList] = useState([])

  const fetchList = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/product/list`)

      if (response.data.success) {
        setList(response.data.products)
      } else {
        toast.error(response.data.message)
      }

    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  const removeProduct = async (id) => {
    try {
      const response = await axios.post(
        `${backendUrl}/api/product/remove`,
        { id },
        { headers: { Authorization: `Bearer ${token}` } }
      )

      if (response.data.success) {
        toast.success("Book removed successfully")
        await fetchList()
      } else {
        toast.error(response.data.message)
      }

    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  useEffect(() => {
    fetchList()
  }, [])

  return (
    <>
      <p className="mb-3 text-xl font-bold text-[#06B6D4]">
        📚 All Book Items
      </p>

      {/* HEADER */}
      <div className="hidden md:grid grid-cols-[1fr_2fr_1fr_1fr_1fr_1fr] items-center py-2 px-3 border bg-[#1F2937] text-[#06B6D4] font-semibold rounded">
        <b>Image</b>
        <b>Book Name</b>
        <b>Category</b>
        <b>Author</b>
        <b>Price</b>
        <b>Action</b>
      </div>

      {/* LIST */}
      <div className="flex flex-col gap-2 mt-2">

        {list.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-[1fr_2fr_1fr_1fr_1fr_1fr] items-center py-2 px-3 border rounded shadow-sm"
          >

            {/* IMAGE */}
            <img
              src={item.image?.[0]}
              alt={item.name}
              className="w-14 h-14 object-cover rounded"
            />

            {/* BOOK NAME */}
            <p className="font-medium truncate">
              {item.name}
            </p>

            {/* CATEGORY */}
            <p>{item.category}</p>

            {/* AUTHOR */}
            <p>{item.author}</p>

            {/* PRICE */}
            <p>{currency}{item.price}</p>

            {/* DELETE */}
            <p
              onClick={() => removeProduct(item._id)}
              className="text-red-600 font-bold cursor-pointer hover:text-red-800"
            >
              Delete
            </p>

          </div>
        ))}

      </div>
    </>
  )
}

export default List

