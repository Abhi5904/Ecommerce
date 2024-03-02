import { CardProps } from "@/types/card";
import Image from "next/image";
import React from "react";
type CardDataProps = {
  data: CardProps;
};
const Card = ({ data }: CardDataProps) => {
  return (
    <div className="flex flex-col justify-center items-start">
      <Image
        src={data.image}
        alt={data.name}
        width={183}
        height={222}
        className="object-contain w-full h-auto"
      />
      <p className="mt-3">{data.name}</p>
      <div className="space-x-3 mt-1">
        <span className={`${data.salePrice && "line-through"} `}>
          $ {data.regularPrice}
        </span>
        <span className={`${!data.salePrice && "hidden"}`}>
          $ {data.salePrice}
        </span>
      </div>
    </div>
  );
};

export default Card;
