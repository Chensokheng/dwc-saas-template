import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function page() {
  return (
    <div className="flex h-[80vh] flex-col items-center justify-center gap-10">
      <Image
        src={
          "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMWlkdWNndDhneGVqYWwycTd0bWY0MWNvenJjejY0ZnM2OXRtbmdqdiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/UuAQ71qJ7cQk6NZ99p/giphy.webp"
        }
        width={500}
        height={500}
        alt="oops"
        className=" object-cover object-center"
      />
      <Link href={"/auth"}>
        <Button>Try Again</Button>
      </Link>
    </div>
  );
}
