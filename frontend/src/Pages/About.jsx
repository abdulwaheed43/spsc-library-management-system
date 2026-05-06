// import React from 'react'
// import Title from "../Components/Title";
// import { assets } from '../assets/assets';
// import NewsletterBox from '../Components/NewsletterBox';

// const About = () => {
//   return (
//     <div>
//     <div className='text-2xl text-center pt-8 border-t'>
//        <Title className="mt-10" text1={'ABOUT'} text2={'US'}/>
//     </div>
//     <div className='my-10 flex flex-col md:flex-row gap-16'>
//       <img className='w-full md:max-w-[450px] mb-5' src={assets.about_img} alt="" />
//       <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
//       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae expedita porro voluptatum laborum autem, illum facere fugit quasi tempore voluptates distinctio. Voluptate laboriosam ratione aspernatur facere qui quasi esse autem.</p>
//       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe consectetur qui ad laudantium voluptates atque cum ipsa voluptas distinctio odit adipisci, quo natus quod ea eaque sit? Assumenda, eaque enim.</p>
//       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga amet debitis optio. Inventore odit eos nemo impedit ex consequuntur? Rerum architecto at placeat molestias numquam quia natus sed harum alias?</p>
//       <b className='text-gray-800'>Our Mission</b>
//       <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum debitis ab illum, aut beatae incidunt totam quas aliquam quam. Culpa quidem modi nihil eaque expedita fuga aperiam, nulla blanditiis voluptatibus.</p>
//       </div>
//     </div>
//      <div className='text-4xl py-4'>
//       <Title text1={'WHY'} text2={'CHOOSE US'} />
//      </div>
//      <div className='flex flex-col md:flex-row text-sm mb-20'>
//      <div className='boder px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
//       <b>Quality Assurances:</b>
//       <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non aspernatur aperiam nisi accusantium libero delectus harum eum minus dolorem dolore dolorum, inventore odit maiores perferendis adipisci eius iusto. Animi, provident?</p>
//      </div>
//       <div className='boder px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
//       <b>Convenience:</b>
//       <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non aspernatur aperiam nisi accusantium libero delectus harum eum minus dolorem dolore dolorum, inventore odit maiores perferendis adipisci eius iusto. Animi, provident?</p>
//      </div>
//       <div className='boder px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
//       <b>Exceptional Customer Service:</b>
//       <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non aspernatur aperiam nisi accusantium libero delectus harum eum minus dolorem dolore dolorum, inventore odit maiores perferendis adipisci eius iusto. Animi, provident?</p>
//      </div>
//      </div>
//       <div className='mb-20'>
//         <NewsletterBox/>
//       </div>
      

//     </div>
//   )
// }

// export default About;


import React from "react";
import Title from "../Components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../Components/NewsletterBox";

const About = () => {
  return (
    <div>

      {/* Title */}
      <div className="text-2xl text-center pt-4 mt-2 border-t">
        <Title text1={"ABOUT"} text2={"US"}  className="text-[#d4a257]"/>
      </div>

      {/* About Section */}
      <div className="my-10 mt-1 flex flex-col md:flex-row gap-16">

        <img
          className="w-full md:max-w-[450px] mb-14 rounded-xl"
          src={assets.about_img}
          alt=""
        />

        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-[#d4a257]">

          <p>
            Welcome to <b>Foodie Express</b>, your trusted online food delivery
            platform where taste meets convenience. We bring fresh and delicious
            meals directly from top restaurants in your city to your doorstep.
          </p>

          <p>
            Our partner restaurants are located in major areas including{" "}
            <b>DHA, Gulshan, Clifton, Saddar, and PECHS</b>, ensuring fast
            delivery and fresh food every time you order.
          </p>

          <p>
            Whether you are craving burgers, pizza, biryani, or drinks — we’ve
            got everything ready for you with just one click.
          </p>

          <b className="text-gray-400">Our Mission</b>

          <p>
            Our mission is to provide fast, affordable, and hygienic food
            delivery service while supporting local restaurants and improving
            customer dining experience.
          </p>

        </div>
      </div>

      {/* Why Choose Us */}
      <div className="text-4xl py-4 text-center">
        <Title text1={"WHY"} text2={"CHOOSE US"} className="text-[#d4a257]" />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">

        <div className="border border-[#d4a257]  px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>🍽️ Fresh Quality Food</b>
          <p className="text-gray-400">
            We partner only with top-rated restaurants that serve fresh,
            hygienic, and high-quality meals prepared daily.
          </p>
        </div>

        <div className="border border-[#d4a257]  px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>🚀 Fast Delivery</b>
          <p className="text-gray-400">
            Our delivery system ensures your food reaches you within 30–45
            minutes depending on your location.
          </p>
        </div>

        <div className="border border-[#d4a257] px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>📞 24/7 Support</b>
          <p className="text-gray-400">
            Our customer support team is available anytime to help you with
            orders, complaints, or tracking your delivery.
          </p>
        </div>

      </div>

      {/* Newsletter */}
      <div className="mb-20">
        <NewsletterBox />
      </div>

    </div>
  );
};

export default About;