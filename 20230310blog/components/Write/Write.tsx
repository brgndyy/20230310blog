"use client";

import { useEffect } from "react";

export default function Write() {
  useEffect(() => {
    const getWrite = async () => {
      const response = await fetch("http://localhost:3002/api/user/write");

      if (!response.ok) {
        const data = await response.json();
        console.log("응답이 제대로 잘 안됐을때 : ", data);
      } else {
        const data = await response.json();
        console.log("응답이 제대로 됐을때 : ", data);
      }
    };

    getWrite();
  }, []);
  return <div>Write</div>;
}
