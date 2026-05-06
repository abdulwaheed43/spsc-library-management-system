import React, { useState } from 'react';
import Title from "../Components/Title";
import { assets } from '../assets/assets';

const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    foodName: "",
    foodType: "Medium",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order Submitted:", formData);
    alert("Your order has been placed!");
  };

  return (
    <div className='border-t pt-8 pl-10'>

      {/* Title */}
      <div className='text-2xl text-center'>
        <Title text1={'ORDER'} text2={'NOW'} className="text-[#d4a257]" />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-10 px-4'>

        {/* Image */}
        <img 
          className='w-full md:max-w-[450px] rounded-lg' 
          src={assets.contact_img} 
          alt="Restaurant"
        />

        {/* Form */}
        <form 
          onSubmit={handleSubmit}
          className='flex flex-col gap-4 w-full max-w-md text-white'
        >

          <input 
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className='border bg-black px-4 py-2 rounded placeholder:text-gray-300 border-gray-300 '
          />

          <input 
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className='border bg-black px-4 py-2 rounded placeholder:text-gray-300 border-gray-300'
          />

          <input 
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className='border bg-black px-4 py-2 rounded placeholder:text-gray-300 border-gray-300'
          />

          <input 
            type="text"
            name="foodName"
            placeholder="Food Name (e.g. Biryani)"
            value={formData.foodName}
            onChange={handleChange}
            required
            className='border bg-black px-4 py-2 rounded placeholder:text-gray-300 border-gray-300'
          />

          {/* Food Type */}
          <select 
            name="foodType"
            value={formData.foodType}
            onChange={handleChange}
            className='border bg-[#d4a257] px-4 py-2 rounded placeholder:text-gray-300 border-gray-300 text-black'
          >
            <option value="Low">Low Spicy</option>
            <option value="Medium">Medium Spicy</option>
            <option value="High">High Spicy</option>
          </select>

          <textarea 
            name="message"
            placeholder="Additional Message"
            value={formData.message}
            onChange={handleChange}
            className='border bg-black px-4 py-2 rounded placeholder:text-gray-300 border-gray-300'
          />

          <button 
            type="submit"
            className='bg-[#d4a257] text-black  py-2 hover:bg-[#b9873b] transition'
          >
            Order Now
          </button>

        </form>

      </div>
    </div>
  );
};

export default Contact;
