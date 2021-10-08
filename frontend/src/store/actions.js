import http from '@/http'

export const actions = {
    loginUsuario({ commit }, usuario) {
        return new Promise((resolve, reject) => {
            http.post('auth/login', usuario)
                .then((res) => {
                    commit('DEFINIR_USUARIO_LOGADO', {
                        token: res.data.access_token,
                        usuario: res.data.user
                    })
                    localStorage.setItem('token', res.data.access_token)
                    resolve(res.data)
                })
                .catch((err) => {
                    console.log(err)
                    reject(err)
                })
        })
    }
}