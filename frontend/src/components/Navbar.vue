<template>
    <nav class="navbar navbar-expand-lg navbar-bytebank">
      <a class="navbar-brand" href="#">ByteBank</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <NavbarLogin v-if="usuarioLogado" />
        <NavbarLogout v-else/>

      </div>
    </nav>
</template>

<script>
import NavbarLogin from './NavbarLogin.vue'
import NavbarLogout from './NavbarLogout.vue'

export default {
    components: {
        NavbarLogin,
        NavbarLogout
    },
    computed: {
        usuarioLogado() {
            return Boolean(localStorage.getItem('token'))
        }
    }
}
</script>

<style>
.navbar {
  background: #27ae60;
}
.navbar-bytebank a {
  color: #fff;
}
.navbar-bytebank a:hover {
  color: #000;
}
</style>