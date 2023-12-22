import React, { useState } from "react";
import { Parallax, ParallaxLayer } from '@react-spring/parallax';


const imageArray = [
  "https://wallpapers.com/images/hd/nature-4k-hdapuxny79ad3rev.jpg",
  "https://i.pinimg.com/originals/8a/58/da/8a58da46777660f46473ba5f4a3d9ae5.jpg",
  "https://images4.alphacoders.com/721/721655.jpg",
  "https://wallpapercave.com/wp/wp4527441.jpg",
  "https://wallpapercave.com/wp/wp2506793.jpg"
];

const Imageslider = () => {
 
  return (
    <div className="bg-gradient-to-r from-blue-500 to-green-500 h-screen overflow-y-hidden ">
      <div className="w-[100%]  px-10 flex justify-between hover:bg-black">
        
        <div className="mt-10">
          <ul className="flex text-lg font-semibold gap-x-10 hover:text-white">
            <li>Home</li>
            <li>Shop</li>
            <li>Journal</li>
            <li>About us</li>
            <li>Contact us</li>
          </ul>
        </div>
        <div className="mt-10  flex gap-x-10 ">
          <ion-icon class="hover:text-white text-lg" name="search-outline"></ion-icon>
          <ion-icon class=" hover:text-white text-lg" name="person-outline"></ion-icon>
          <ion-icon class=" hover:text-white text-lg" name="notifications-outline"></ion-icon>
        </div>
      </div>
    
      <div className="flex justify-center items-center min-h-screen">
        <div className="bg-[#ffff] shadow-xl w-[800px] h-[500px] rounded-xl relative">
        <Parallax pages={5} >
            <ul>
            {imageArray.map((item, index) => (
              <ParallaxLayer  key={index} offset={(index ) * 0.98} speed={(index)*0.07}>
                <li>
                  <img
                    className="rounded-xl object-cover w-[800px] h-[500px]"
                    src={item}
                    alt={`Image ${index + 1}`}
                  />
                </li>
              </ParallaxLayer>
            ))}
            </ul>
            </Parallax>
          
            
            
        </div>
      </div>
     
    </div>
  );
};

export default Imageslider;