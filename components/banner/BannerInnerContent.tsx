import React from "react";

const BannerInnerContent = () => {
  return (
    <div className="flex justify-center items-center w-full border border-l gap-2">
      <svg
        width="42"
        height="63"
        viewBox="0 0 42 63"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M21 0.833344C32.2758 0.833344 41.4166 9.9742 41.4166 21.25C41.4166 24.6593 40.5834 27.8717 39.1039 30.6983L21 62.0833L3.31538 31.4595C1.57498 28.4542 0.583313 24.9693 0.583313 21.25C0.583313 9.9742 9.72416 0.833344 21 0.833344ZM21 6.66668C12.9458 6.66668 6.41665 13.1959 6.41665 21.25C6.41665 23.566 6.95093 25.7882 7.96198 27.7943L8.45197 28.6893L21 50.4167L33.6366 28.5362C34.9071 26.3423 35.5833 23.8555 35.5833 21.25C35.5833 13.1959 29.0541 6.66668 21 6.66668ZM21 12.5C25.8325 12.5 29.75 16.4175 29.75 21.25C29.75 26.0825 25.8325 30 21 30C16.1675 30 12.25 26.0825 12.25 21.25C12.25 16.4175 16.1675 12.5 21 12.5ZM21 18.3333C19.3891 18.3333 18.0833 19.6392 18.0833 21.25C18.0833 22.8608 19.3891 24.1667 21 24.1667C22.6108 24.1667 23.9166 22.8608 23.9166 21.25C23.9166 19.6392 22.6108 18.3333 21 18.3333Z"
          fill="#C0B7E8"
        />
      </svg>
      <div className="border flex flex-col">
        <h1 className="font-700 text-white leading-[1]">Pay Us a Visit</h1>
        <p className="text-[14px] font-normal text-white">
          Union St, Seattle, WA 98101, United States
        </p>
      </div>
    </div>
  );
};

export default BannerInnerContent;
