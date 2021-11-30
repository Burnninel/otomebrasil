import Botao from "../components/Botao";
import Header from "../components/Header";
import userInsta from "../components/userInsta";

export default function Home() {
  return (
    <div className={` flex flex-col h-screen bg-gray-900`}>
      <div>
        <Header />
      </div>
      <div
        className={`
        h-screen 
        flex justify-center flex-col items-center 
      `}
      >
        <div className="mt-24">
          <h1
            className={`
          tracking-normal text-sm
          flex justify-center items-center
          font-mono uppercase  text-white
        `}
          >
            Clique em uma das opções abaixo para ser direcionado a pagina:
          </h1>
        </div>
        <div className={`mt-6 `}>
          <Botao nome="Cursos" url="https://www.google.com/" />
          <Botao nome="Blog Otome" url="https://www.google.com/" />
          <Botao nome="Minha Loja" url="https://www.google.com/" />
        </div>
      </div>
      <div className={`
        flex flex-col items-center mb-16
        font-normal uppercase text-white
      `}>
          <span>@otomebrasil_</span>
          <span>@itachi.do.genjutsu</span>
          <span>@yunox</span>
      </div>
    </div>
  );
}
