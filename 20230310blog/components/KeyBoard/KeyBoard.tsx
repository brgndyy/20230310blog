"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import classes from "./KeyBoard.module.css";

export default function KeyBoard() {
  const [inputString, setInputString] = useState("");
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setInputString((prevState) => prevState + e.key);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      // Cleanup - remove event listener when component unmounts
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (inputString.includes("brgndyadmin")) {
      router.push("/login");
    }
  }, [inputString, router]);

  return <div className={classes.keyboard_div}>KeyBoard</div>;
}
