import React from "react";
import Image1 from "../../assets/hero/cachorrabanho.png";
import Image2 from "../../assets/hero/cachorromachucado.png";
import Image3 from "../../assets/hero/cachorrobanho.png";
import Slider from "react-slick";

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Dia de Princesa",
    description:
      "O Dia de Princesa de uma cachorrinha é um dia dedicado a mimá-la com cuidados especiais, como banho, tosa e petiscos deliciosos. É uma oportunidade para mostrar todo o amor e carinho, fazendo com que ela se sinta como uma verdadeira realeza.",
  },
  {
    id: 2,
    img: Image2,
    title: "Tratamento para seu pet",
    description:
      "O tratamento de saúde de um cachorro inclui consultas veterinárias regulares, vacinação, controle de parasitas e, se necessário, medicamentos. Manter uma alimentação balanceada e acompanhamento constante é essencial para prevenir e tratar doenças.",
  },
  {
    id: 3,
    img: Image3,
    title: "Dia de príncipe",
    description:
      "O Dia de Príncipe de um Cachorro é uma celebração para mimar o pet com cuidados especiais, como passeios e brinquedos novos. É uma forma de demonstrar todo o amor e carinho que ele merece.",
  },
];

const Hero = ({ handleOrderPopup }) => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200">
      {/* background pattern */}
      <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-[8]"></div>
      {/* hero section */}
      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div key={data.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* text content section */}
                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                  <h1
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                  >
                    {data.title}
                  </h1>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="100"
                    className="text-sm"
                  >
                    {data.description}
                  </p>
                  <div
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="300"
                  >
                    <button
                      onClick={handleOrderPopup}
                      className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full"
                    >
                      Peça agora
                    </button>
                  </div>
                </div>

                {/* image section */}
                <div className="order-1 sm:order-2">
                  <div
                    data-aos="zoom-in"
                    data-aos-once="true"
                    className="relative z-10"
                  >
                    <img
                      src={data.img}
                      alt={data.title}
                      className="w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] object-cover mx-auto border-4 border-primary rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
