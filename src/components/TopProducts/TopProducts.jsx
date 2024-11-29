import React from "react";
import Img1 from "../../assets/top/acolhimento.jpg";
import Img2 from "../../assets/top/exame.jpg";
import Img3 from "../../assets/top/vacina.jpg";
import { FaStar } from "react-icons/fa";


const ProductsData  = [
  {
    id: 1,
    img: Img1,
    title: "Acolhimento",
    description:
      "Aqui, o seu pet recebe o carinho e cuidado que ele merece. Atendimento com atenção e respeito em cada detalhe.",
  },
  {
    id: 2,
    img: Img2,
    title: "Exames",
    description:
      "Exames completos para garantir a saúde e bem-estar do seu melhor amigo. Porque a saúde dele é nossa prioridade.",
  },
  {
    id: 3,
    img: Img3,
    title: "Vacinas",
    description:
      "Proteja seu pet contra doenças com as vacinas mais atualizadas. A prevenção é o caminho para uma vida longa e feliz.",
  }
];
const TopProducts = ({ handleOrderPopup }) => {
  return (
    <div>
      <div className="container">
        {/* Header section */}
        <div className="text-left mb-24">
          <p data-aos="fade-up" className="text-sm text-primary">
            As melhores consultas para o seu pet:
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
          Consulta veterinária com carinho e dedicação. A saúde do seu pet é nossa prioridade.
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Diversos produtos e tratamentos para seu melhor amigo de 4 patas.
          </p>
        </div>
        {/* Body section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
          {ProductsData.map((data) => (
            <div
              data-aos="zoom-in"
              className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]"
            >
              {/* image section */}
              <div className="h-[100px]">
                <img
                  src={data.img}
                  alt=""
                  className="max-w-[240px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                />
              </div>
              {/* details section */}
              <div className="p-4 text-center">
                {/* star rating */}
                <div className="w-full flex items-center justify-center gap-1">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>
                <h1 className="text-xl font-bold">{data.title}</h1>
                <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                  {data.description}
                </p>
                <button
                  className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                  onClick={handleOrderPopup}
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
