<template>
    <div class="container">
        <h1>Login</h1>
        <form @submit.prevent="login()">
            <div class="form-group">
                <label for="email">E-mail</label>
                <input type="email" class="form-control" v-model="usuario.email">
            </div>
            <div class="form-group">
                <label for="senha">Senha</label>
                <input type="password" class="form-control" v-model="usuario.senha">
            </div>
            <p class="alert alert-danger" v-if="mensagemErro">{{ mensagemErro }}</p>
            <button type="submit" class="btn btn-primary brn-block">Logar</button>
            <router-link :to="{ name: 'novo.usuario' }">
                Ainda não está cadastrado? Cadastre-se aqui!
            </router-link>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            usuario: {
                email: '',
                senha: ''
            },
            mensagemErro: ''
        }
    },
    methods: {
        login() {
            this.$store.dispatch('loginUsuario', this.usuario)
                .then(() => {
                    this.$router.push({ name: 'gerentes' })
                    this.mensagemErro = ''
                })
                .catch((err) => {
                    if (err.request.status == '401') {
                        this.mensagemErro = 'Login ou senha inválido(s)!'
                    }
                })
        }
    }
}
</script>