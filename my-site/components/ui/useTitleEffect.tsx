"use client";
import { useEffect, useState } from "react";
import { isMapIterator } from "util/types";
import styles from "./TitleEffect.module.css";

const ITERATIONS: number = 20;
const GAP: number = 150;
const DELAY = 250;

export function TitleEffect({ text }: { text: string }) {
  let length = text.length;
  const [title, setTitle] = useState(generateString(length));

  const timers: ReturnType<typeof setTimeout>[] = [];

  useEffect(() => {
    for (let i=0; i< ITERATIONS; i++) {
      const timer = setTimeout(() => {
        setTitle(playEffect(i, length, text));
      }, DELAY + GAP * i + 1);
      timers.push(timer);
    }

    return () => {
      timers.forEach(clearTimeout);
    };
  }, [text]);

    return <h1 className={styles.pageTitle}>{title}</h1>;
}

function generateString(length : number) : string {
  const chars = ['<', '>', '$', '!', '*', "?", '/', '-', '=', '+', '%', '&', '_', '#', '(', ')', ';', ':'];
  let string: string = "";

  for(let i=0; i<length; i++) {
    let index = Math.floor((Math.random() * chars.length));
    let char = chars[index];
    string = string + char;
  }

  return string;
}

function playEffect(index: number, length: number, text: string) {
  let next: string = "";
  if (ITERATIONS - index < length + 1) {
    next += text.slice(0, length - (ITERATIONS - index) + 1);
    length = (ITERATIONS - index);
  }
    next += generateString(length - 1);
  return next;
}