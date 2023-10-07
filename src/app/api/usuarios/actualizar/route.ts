import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
    const usuario = await req.json();

    const usuarioActualizado = await prisma.usuario.update({
        where: { id: "944700ee-25c9-47fa-b992-688a742669e1" },
        data: { activo: false }
    });
    console.log(usuarioActualizado)
    return new Response("Usuario actualizado", { status: 200 });
}