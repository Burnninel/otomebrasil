import Link from "next/link";

interface BotaoProps {
  nome: string;
  url: string;
}

export default function Botao(props: BotaoProps) {
  return (
    <Link href={props.url}>
      <button
        className={`
          w-72 
          flex justify-center items-center 
          h-12 font-mono uppercase m-3 text-white 
          border-2 border-blue-500 rounded
          hover:bg-blue-100 hover:border-blue-900 hover:text-blue-900
      `}>
        {props.nome}
      </button>
    </Link>
  );
}
