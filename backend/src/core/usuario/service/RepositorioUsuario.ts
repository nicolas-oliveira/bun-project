import Usuario from "../model/Usuario";

export default interface RepositorioUsuario {
    consultarPorId(id: number): Promise<Usuario | null>;
    consultarPorEmail(email: string): Promise<Usuario | null>;
    consultarTodos(): Promise<Usuario[]>;
    criar(usuario: Usuario): Promise<Usuario>;
}