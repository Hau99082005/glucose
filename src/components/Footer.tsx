"use client";
import { MDBFooter } from 'mdb-react-ui-kit';
import React from 'react';

export default function Footer() {
  return (
    <MDBFooter className="text-center text-black w-full" >
      <div className="flex flex-col md:flex-row justify-center items-center gap-2 p-4 text-xs bg-white bg-opacity-20 text-black">
        <span className="text-gray-500" style={{fontSize: "15px", fontFamily: "Lato"}}>
          © {new Date().getFullYear()} Free AI Apps
        </span>
        <span className="text-gray-500 font-semibold hover:underline cursor-pointer" style={{fontSize: "15px", fontFamily: "Lato"}}>
          All rights reserved.
        </span>
      </div>
    </MDBFooter>
  );
}
