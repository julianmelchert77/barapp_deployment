import Image from "next/image";
import useBarapp from "../hooks/useBarapp";
import Categoria from "./categoria";

const Sidebar = () => {
    const {categorias} = useBarapp();
  return (
    <>
        <Image 
            width={300} 
            height={100} 
            src="/assets/img/logo.svg" 
            alt="imagen logotipo"
        />

        <nav className="mt-10">
            {categorias.map((categoria) => (
                <Categoria
                    key={categoria.id}
                    categoria={categoria}
                />
            ))}
        </nav>
    </>
  );
};

export default Sidebar;