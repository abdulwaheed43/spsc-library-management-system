import React from "react";

const NewsletterBox = () => {
  const onsubmithandler = (event) => {
    event.preventDefault();
  };
  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-[#d4a257]">
        Subscribe Now & Get 20% Off
      </p>
      <p className="text-[#d4a257] mt-3">
        we offer hassle free exchange policy we offer hassle free exchange
        policy
      </p>
      <form
        onSubmit={onsubmithandler}
        
        className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border border-[#d4a257] pl-3"
      >
       <input
  type="email"
  className="w-full border-[#d4a257] text-[#d4a257] bg-black sm:flex-1 outline-none placeholder:text-[#d4a257]"
  placeholder="enter your email"
  required
/>
        <button
          type="submit"
          className="bg-black text-[#d4a257] text-xs px-10 py-4"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default NewsletterBox;
