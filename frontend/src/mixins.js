export const logoutMixin = {
    methods: {
        logoutUsuario () {
            this.$store.commit('DESLOGAR_USUARIO')
            this.$router.push({ name: 'login' })
        }
    }
}