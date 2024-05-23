import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductList = () => {
  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      <Link
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
        href="/test"
      >
        <div className="relative w-full h-80">
          <Image
            src="/1.png"
            alt="image"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease-in duration-500"
          />
          <Image
            src="/2.png"
            alt="image"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Producto Nombre</span>
          <span className="font-semibold">$213</span>
        </div>
        <div className="text-sm text-gray-500">Descripción</div>
        <button className="rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white">
          Agregar al carrito
        </button>
      </Link>
      <Link
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
        href="/test"
      >
        <div className="relative w-full h-80">
          <Image
            src="/1.png"
            alt="image"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease-in duration-500"
          />
          <Image
            src="/2.png"
            alt="image"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Producto Nombre</span>
          <span className="font-semibold">$213</span>
        </div>
        <div className="text-sm text-gray-500">Descripción</div>
        <button className="rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white">
          Agregar al carrito
        </button>
      </Link>
      <Link
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
        href="/test"
      >
        <div className="relative w-full h-80">
          <Image
            src="/1.png"
            alt="image"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease-in duration-500"
          />
          <Image
            src="/2.png"
            alt="image"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Producto Nombre</span>
          <span className="font-semibold">$213</span>
        </div>
        <div className="text-sm text-gray-500">Descripción</div>
        <button className="rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white">
          Agregar al carrito
        </button>
      </Link>
      <Link
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
        href="/test"
      >
        <div className="relative w-full h-80">
          <Image
            src="/1.png"
            alt="image"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease-in duration-500"
          />
          <Image
            src="/2.png"
            alt="image"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Producto Nombre</span>
          <span className="font-semibold">$213</span>
        </div>
        <div className="text-sm text-gray-500">Descripción</div>
        <button className="rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white">
          Agregar al carrito
        </button>
      </Link>
    </div>
  );
};

export default ProductList;
