import Botao from "../components/Botao";
import Header from "../components/Header";
import img1 from "../../public/image/tanjiro.png"
import img2 from "../../public/image/itadori.png"
import Image from 'next/image'

export default function Home() {
  return (
    <div className={` flex flex-col h-screen bg-gray-900`}>
      <div>
        <Header />
      </div>
      <div className={`h-screen flex justify-center items-center`}>
        <div className="w-1/5 mt-32">
          <Image src={img1} />
        </div>
        <div className={`flex flex-col items-center w-2/5 m-16 mb-1`}>
          <h1 className={`tracking-normal text-sm flex justify-center items-center font-mono uppercase  text-white`}>
                Clique em uma das opções abaixo para ser direcionado a pagina:
          </h1>
          <Botao nome="Cursos" url="https://www.google.com/" />
          <Botao nome="Blog Otome" url="https://www.google.com/" />
          <Botao nome="Minha Loja" url="https://www.google.com/" />
        </div>
        <div className="w-1/5 mt-32">
            <Image src={img2}/>
        </div>
      </div>
      <div className={`
        flex flex-col items-center mb-16
        text-sm uppercase text-white
      `}>
          <span>@otomebrasil_</span>
          <span>@itachi.do.genjutsu</span>
          <span>@yunox</span>
      </div>
    </div>
  );
}
