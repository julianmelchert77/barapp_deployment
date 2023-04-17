import Head from 'next/head'
import Image from 'next/image';
import Layout from '../layout/Layout';
import Producto from '../components/Producto';
import useBarapp from '../hooks/useBarapp';


export default function Home() {
  const { categoriaActual } = useBarapp()

  return (
      <Layout pagina={`Menú ${categoriaActual?.nombre}`}>
          <h1 className='text-3xl font-black uppercase'>{categoriaActual?.nombre}</h1>
          <p className='text-xl my-10'>
            Elige y personaliza tu pedido a continuación:
          </p>

          <div className='grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
                {categoriaActual?.productos?.map(producto => (
                  <Producto key={producto.id} producto={producto} />
                ))}
          </div>
      </Layout>
  );
}
