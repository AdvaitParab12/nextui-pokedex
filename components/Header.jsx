import React from "react";
import Image from "next/image";

function Header() {
  return (
    <div>
      <section className="py-5 flex justify-between items-center drop-shadow-2xl">
        <Image
          src="/images/header.png"
          height={100}
          width={250}
          sizes="100"
          alt="logo"
          className="drop-shadow-2xl"
        ></Image>
      </section>
    </div>
  );
}

export default Header;
