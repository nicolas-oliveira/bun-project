import Elysia from "elysia";
import ConsultarUsuarioPorId from "../core/usuario/service/ConsultarUsuarioPorId";

export default class ConsultarUsuarioPorIdController {
    constructor(readonly servidor: Elysia, readonly casoDeUsu: ConsultarUsuarioPorId) {
        servidor.get('/usuarios/:id', async ({params}) => {
            return casoDeUsu.executar(+params.id);
        })
    }
}