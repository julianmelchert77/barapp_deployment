import Image from "next/image";
import useBarapp from "../hooks/useBarapp";

const Categoria = ({categoria}) => {
    const {categoriaActual, handleClickCategoria} = useBarapp();
    

    const {nombre, icono, id} = categoria;
  return ( 
    <div 
    className={`${
      categoriaActual?.id === id ? "bg-blue-500" : ""
    }${
      categoriaActual?.id === id ? " " : ""
    }flex items-center gap-4 w-full border p-5 hover:bg-blue-500`}
    
    >
      <Image
          width={70}
          height={70}
          src={`/assets/img/icono_${icono}.svg`}
          alt="Imagen Icono"
        
      />

    <button
        type='button'
        className="text-2xl font-bold hover:cursor-pointer"
        onClick={() => handleClickCategoria(id)}
    >
        {nombre}
        </button>
    </div>
  );
};

export default Categoria;