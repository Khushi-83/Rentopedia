import { Locate, LocateFixed, LocateIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const SinglePg = ({
  name,
  location,
  city,
  price,
  description,
  image,
}: {
  name: string;
  location: string;
  city: string;
  price: string;
  description: string;
  image: string;
}) => {
  return (
    <div className="flex items-center gap-8">
      <Image
        alt="Profile picture"
        className="rounded-lg "
        height={300}
        width={300}
        src="/img.jpg"
        style={{
          // aspectRatio: "100/100",
          objectFit: "cover",
        }}
      />
      <div className="grid gap-1">
        <h2 className="text-2xl font-bold">{name}</h2>
        <div className="text-gray-500 dark:text-gray-400 flex gap-2">
          <Locate /> <span>{location}</span>
        </div>
        <div className="text-gray-500 font-bold dark:text-gray-800 flex gap-2">
          <LocateFixed /> <span>{city}</span>
        </div>

        <div className="font-semibold">{price}</div>
        <Link
          target="_blank"
          href="https://wa.me/917978016118?text=Hello Sir/Ma'am, I need a pg. Can you help me with that?"
          className="font-semibold flex items-center gap-2 cursor-pointer text-green-500"
        >
          <FaWhatsapp />
          <span>Direct message to owner</span>
        </Link>

        <p>{description}</p>
      </div>
    </div>
  );
};

export default SinglePg;
