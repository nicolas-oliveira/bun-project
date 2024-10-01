import Elysia from "elysia";
import ConsultarUsuarios from "../core/usuario/service/ConsultarUsuarios";

export default class ConsultarUsuariosController {
    constructor(readonly servidor: Elysia, readonly casoDeUsu: ConsultarUsuarios) {
        servidor.get('/usuarios', async () => {
            return casoDeUsu.executar();
        })
    }
}