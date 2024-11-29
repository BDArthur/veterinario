import React, { useState } from "react";
import footerLogo from "../../assets/logo.png";
import Banner from "../../assets/website/footer-pattern.jpg";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    cpf: '',
    rg: '',
    email: '',
    phone: '',
    reason: '',
    description: ''
  });

  const [loading, setLoading] = useState(false);

  // Função para lidar com a mudança dos campos do formulário
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Função para enviar o formulário
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('http://localhost:3000/api/contacts/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Erro ao enviar os dados!');
      }

      const data = await response.json();
      alert('Agendamento realizado com sucesso!');
      setFormData({
        name: '',
        cpf: '',
        rg: '',
        email: '',
        phone: '',
        reason: '',
        description: ''
      }); // Limpa o formulário após o sucesso

    } catch (error) {
      alert(`Erro: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={BannerImg} className="text-white">
      <div className="container">
        <div data-aos="zoom-in" className="grid md:grid-cols-3 pb-44 pt-5">
          {/* company details */}
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              <img src={footerLogo} alt="" className="max-w-[50px]" />
              Consultas
            </h1>
            <p>
              Marque uma consulta que pode salvar a vida do seu amigo de 4 patas
            </p>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li
                      className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                      key={link.title}
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* social links */}
            <div>
              <div className="flex items-center gap-3 mt-6">
                <a href="#">
                  <FaInstagram className="text-3xl" />
                </a>
                <a href="#">
                  <FaFacebook className="text-3xl" />
                </a>
                <a href="#">  
                  <FaLinkedin className="text-3xl" />
                </a>
              </div>
              <div className="mt-6">
                <div className="flex items-center gap-3">
                  <FaLocationArrow />
                  <p>São Paulo, Brasil</p>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <FaMobileAlt />
                  <p>+55 12 982023800</p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario de Agendamento */}
          <div className="md:col-span-3 mt-8">
            <h2 className="text-xl font-bold mb-4">Agende sua consulta</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label>Nome:</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-2"
                />
              </div>
              <div>
                <label>CPF:</label>
                <input
                  type="text"
                  name="cpf"
                  value={formData.cpf}
                  onChange={handleChange}
                  required
                  className="w-full p-2"
                />
              </div>
              <div>
                <label>RG:</label>
                <input
                  type="text"
                  name="rg"
                  value={formData.rg}
                  onChange={handleChange}
                  required
                  className="w-full p-2"
                />
              </div>
              <div>
                <label>E-mail:</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-2"
                />
              </div>
              <div>
                <label>Telefone:</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full p-2"
                />
              </div>
              <div>
                <label>Motivo:</label>
                <input
                  type="text"
                  name="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  required
                  className="w-full p-2"
                />
              </div>
              <div>
                <label>Descrição:</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  className="w-full p-2"
                />
              </div>
              <div>
                <button type="submit" disabled={loading} className="bg-primary text-white p-2 rounded">
                  {loading ? 'Enviando...' : 'Enviar'}
                </button>
              </div>
            </form>
          </div>
        </div>
        <br></br>

        <div className="text-center py-4">
          <p className="text-black">&copy; {new Date().getFullYear()} Arthur. Todos os direitos reservados.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
