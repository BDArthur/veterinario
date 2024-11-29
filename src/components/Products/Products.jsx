import React from "react";
import Img1 from "../../assets/remedios/simparic.png";
import Img2 from "../../assets/remedios/vetmax.png";
import Img3 from "../../assets/remedios/glicopan.png";
import Img4 from "../../assets/remedios/sarniran.png";
import Img5 from "../../assets/remedios/chemitril.png";
import Img6 from "../../assets/remedios/flunixin.png";
import Img7 from "../../assets/remedios/triflex.png";
import Img8 from "../../assets/remedios/keravit.png";
import Img9 from "../../assets/remedios/dentes.png";
import { FaStar } from "react-icons/fa6";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Antipulgas e Carrapatos.",
    rating: 5.0,
    color: "white",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Vermífugos",
    rating: 4.8,
    color: "Red",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Vitaminas e Suplementos.",
    rating: 4.7,
    color: "brown",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Tratamentos Para Pele.",
    rating: 4.9,
    color: "Yellow",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img5,
    title: "Antibióticos",
    rating: 4.9,
    color: "Pink",
    aosDelay: "800",
  },
  {
    id: 6,
    img: Img6,
    title: "Anti-Inflamatórios",
    rating: 4.8,
    color: "Pink",
    aosDelay: "800",
  },
  {
    id: 7,
    img: Img7,
    title: "Tratamentos Para As Orelhas",
    rating: 4.7,
    color: "Pink",
    aosDelay: "800",
  },
  {
    id: 8,
    img: Img8,
    title: "Tratamentos para os Olhos",
    rating: 4.8,
    color: "Pink",
    aosDelay: "800",
  },
  {
    id: 9,
    img: Img9,
    title: "Tratamento Dentário",
    rating: 5.0,
    color: "Pink",
    aosDelay: "800",
  },
];

const Products = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            Melhores Produtos para seu Pet 🐾
          </p>
          <br></br>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Produtos
          </h1>
          <br></br>
          <p data-aos="fade-up" className="text-xs text-gray-400">
          Produtos para pets são essenciais para garantir o bem-estar e a 
          felicidade dos nossos amigos de quatro patas. Eles incluem uma variedade de itens, 
          desde alimentos nutritivos e brinquedos divertidos até acessórios de higiene e cuidados de saúde.
          </p>
        </div>
        {/* Body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {/* card section */}
            {ProductsData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-3"
              >
                <img
                  src={data.img}
                  alt=""
                  className="h-[220px] w-[150px] object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-600">{data.color}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* view all button */}
          <div className="flex justify-center">
            <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md">
              Ver mais
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
