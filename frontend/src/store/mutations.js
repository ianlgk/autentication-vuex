export const mutations = {
    DEFINIR_USUARIO_LOGADO(state, { token, usuario }) {
        state.usuario = usuario
        state.token = token
    },
    DESLOGAR_USUARIO(state) {
        state.token = null
        localStorage.removeItem('token')
        state.usuario = {}
    }
}