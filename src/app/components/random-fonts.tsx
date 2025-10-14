'use client';

import { cn } from "@/lib/utils";
import { useState } from "react";

import {
  Inter,
  Roboto,
  Oswald,
  Lato,
  Montserrat,
  Merriweather,
  Playfair_Display,
  Lora,
  Crimson_Text,
  EB_Garamond,
} from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-roboto' });
const oswald = Oswald({ subsets: ['latin'], weight: ['400'], variable: '--font-oswald' });
const lato = Lato({ subsets: ['latin'], weight: ['400'], variable: '--font-lato' });
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' });
const merriweather = Merriweather({ subsets: ['latin'], weight: ['400'], variable: '--font-merriweather' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });
const lora = Lora({ subsets: ['latin'], variable: '--font-lora' });
const crimson = Crimson_Text({ subsets: ['latin'], weight: ['400'], variable: '--font-crimson' });
const garamond = EB_Garamond({ subsets: ['latin'], variable: '--font-garamond' });

const fonts = [inter.className, roboto.className, oswald.className, lato.className, montserrat.className, merriweather.className, playfair.className, lora.className, crimson.className, garamond.className]

interface RandomFontsProps {
  className?: string;
  children: string
}

export function RandomFonts({ className, children }: RandomFontsProps) {
  const [charFonts, setCharFonts] = useState<string[]>(
    Array(children.length).fill("font-normal")
  );

  const handleMouseEnter = (index: number) => {
    const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
    const newCharFonts = [...charFonts];
    newCharFonts[index] = randomFont;
    setCharFonts(newCharFonts);
  };

  return (
    <p className={cn("inline-block", className)}>
      {children.split(' ').map((char, index) => (
        <span
          key={index}
          className={cn("transition-all duration-300", charFonts[index])}
          onMouseEnter={() => handleMouseEnter(index)}
        >
          {char} {' '}
        </span>
      ))}
    </p>
  );
}