import React from "react";

import ImgHeader from "../../assets/gardening2.webp";

function Header() {
  return (
    <header>
      <div class="flex flex-col justify-center sm:px-0 mx-auto">
      <div class="text-right sm:pr-10">Fale Conosco</div>
        <img
          class="object-scale-down max-h-full "
          src={ImgHeader}
          alt=""
        />
      </div>
    </header>
  );
}

export default Header;
