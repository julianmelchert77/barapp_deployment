import Layout from "../layout/Layout"
import useBarapp from "../hooks/useBarapp"
import ResumenProducto from "../components/ResumenProducto"

export default function Resumen() {
    const {pedido } = useBarapp()
    return (
        <Layout pagina='Resumen'>
            <h1 className="text-3xl font-black uppercase">Resumen</h1>
            <p className="text-xl my-10">Revisa tu Pedido:</p>


            {pedido.length === 0 ? (
                <p className="text-center text-2xl">No tienes pedidos pendientes</p>
            ) : (
                pedido.map(producto => (
                    <ResumenProducto 
                            key={producto.id}
                            producto={producto}
                    />
                ))
            )}
        </Layout>
    )
}