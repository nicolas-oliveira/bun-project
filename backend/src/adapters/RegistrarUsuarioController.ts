import Elysia from "elysia";
import RegistrarUsuario from "../core/usuario/service/RegistrarUsuario";

export default class RegistrarUsuarioController {
    constructor(readonly servidor: Elysia, readonly casoDeUsu: RegistrarUsuario) {
        servidor.post('/usuarios', async ({ body }) => {
            const { nome, email, senha } = body as any;
            await casoDeUsu.executar({ nome, email, senha });

            return new Response('Usuário Criado com Sucesso!', { status: 201 });
        })
    }
}