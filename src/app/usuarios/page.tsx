import { Publicacion } from "@prisma/client";

async function obtenerUsuarios() {
    const respuesta = await fetch("http://localhost:3000/api/usuarios", {
        cache: "no-store",
    });
    const datos = await respuesta.json();
    return datos;
}

async function obtenerPublicaciones() {
    const resp = await fetch("http://localhost:3000/api/usuarios/publicaciones", {
        cache: "no-store",
    });
    const dato = await resp.json();
    return dato;
}

type Usuario = {
    id: string;
    nombre: string;
    edad: number;
    email: string;
    password: string;
    activo: boolean;
    Publicacion: Publicacion[]
};

export default async function Pagina() {
    const usuarios = await obtenerUsuarios();
    const publicaciones = await obtenerPublicaciones();

    return (
        <section>
            <h2>Usuarios mayores de 25 años</h2>

            <ul>
                {usuarios
                    .filter((usuario: Usuario) => usuario.edad > 25)
                    .map((usuario: Usuario) => (
                        <main>
                        <li key={usuario.id}>
                            {usuario.nombre} - {usuario.edad}
                        </li>
                        <li>
                        {publicaciones.map((publicacion: Publicacion) => (
                            <li>
                                {publicacion.titulo} - {publicacion.contenido}
                            </li>
                        ))}
                        </li>
                        </main>
                    ))}
            </ul>
        </section>
    );

}