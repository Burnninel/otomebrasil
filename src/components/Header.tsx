import Titulo from "./Titulo";

export default function Header() {
  return (
    <div className={`
        flex justify-center items-center h-12
        bg-indigo-50 
    `}>
        <Titulo />
    </div>
  );
}
