"use client";

import { useEffect, useState } from "react";

const ITERATIONS: number = 20;
const GAP: number = 250;

// export function TitleEffect(text : string) {
//   let length = text.length;
//   const [title, setTitle] = useState(generateString(length));

//   useEffect(() => {
//     for(let i=0; i<ITERATIONS; i++) {
//       const timer = setTimeout(() => {
//           console.log("iterate");
//         let next = playEffect(i, length, text);
//         setTitle(next);
//       }, GAP)

//       return () => clearTimeout(timer);
//     },
//   }

//   return <h1>{title}</h1>;
// }

// export function TitleEffect(text : string) {
//   let length = text.length;
//   const [title, setTitle] = useState(generateString(length));

//   useEffect(() => {
//     for(let i=0; i<ITERATIONS; i++) {
//       console.log("iterate");
//       let next = playEffect(i, length, text);
//       setTitle(next);
//     }
//   })

//   return <h1>{title}</h1>;
//   }

export function TitleEffect({ text }: { text: string }) {
  let length = text.length;
  const [title, setTitle] = useState("0");

  const timers: ReturnType<typeof setTimeout>[] = [];

  useEffect(() => {
    for (let i=0; i< 100; i++) {
      const timer = setTimeout(() => {
        setTitle(i.toString());
      }, GAP * i + 1);
      timers.push(timer);
    }

    return () => {
      timers.forEach(clearTimeout);
    };
  }, [text]);

    return <h1>{title}</h1>;
}

// function generateString(length : number) : string {
//   const chars = ['<', '>', '$', '!', '*', "?", '/', '-', '=', '+', '%', '&'];
//   let string: string = "";

//   for(let i=0; i<length; i++) {
//     let index = Math.floor((Math.random() * chars.length)) + 1;
//     let char = chars[index];
//     string = string + char;
//   }

//   return string;
// }

// function playEffect(index: number, length: number, text: string) {
//   let next: string = "";
//   if (ITERATIONS - index <= length) {
//     next += text.slice(0, ITERATIONS - index);
//     length -= ITERATIONS - index;
//   }
//     next += generateString(length);
//   return next;
// }