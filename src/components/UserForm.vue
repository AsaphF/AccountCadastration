<template>
  <div>
    <form @submit.prevent="handleSubmit" class="formSection shadow-lg p-3 mb-5 bg-body-tertiary rounded">
      <div class="mb-3">
        <label for="exampleInputName" class="form-label">Nome Completo</label>
        <input type="text" class="form-control" id="exampleInputNome" aria-describedby="fullName" v-model="name">
      </div>
      <div class="mb-3">
        <label for="exampleInputPhone" class="form-label">Número de Telefone</label>
        <input type="tel" class="form-control" id="exampleInputPhone" aria-describedby="emailName"
          placeholder="(11) 55555-5555" v-model="phone">
      </div>
      <div class="mb-3">
        <label for="exampleInputCargo" class="form-label">Cargo Profissional</label>
        <select class="form-select" aria-label="Default select example" v-model="cargo">
          <option selected >Selecione</option>
          <option value="Contador">Contador em escritórios.</option>
          <option value="Analista">Analista</option>
          <option value="Auditor">Auditor</option>
          <option value="Consultor financeiro">Consultor financeiro</option>
          <option value="Perito">Perícia contábil</option>
          <option value="GerenteFinanceiro">GerenteFinanceiro</option>
          <option value="Controller">Controller</option>
          <option value="Diretor">Diretor</option>
          <option value="ProfissionalPúblico">Profissional em órgãos públicos</option>
          <option value="any">Outros</option>
        </select>
      </div>

      <div class="mb-4">
        <label for="exampleInputEmail1" class="form-label">Endereço de Email</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
          placeholder="usuario@dominio.com" v-model="email">
      </div>
      <div class="container">
        <button type="submit" class="btn btn-primary btn-lg mb-4">Submit</button>
      </div>
    </form>
  </div>
  <div>
    <p>Result</p>
    <p>{{ name }}</p>
    <p>{{ phone }}</p>
    <p>{{ cargo }}</p>
    <p>{{ email }}</p>
  </div>
</template>

<script>
import { ref, addDoc } from '../firebase/config'

export default {
  data () {
    return {
      name: '',
      phone: '',
      cargo: '',
      email: '',
      whatsapp: ''
    }
  },
  methods: {
    handleSubmit () {
      const userInfos = {
        name: this.name,
        phone: this.phone,
        cargo: this.cargo,
        email: this.email,
        whatsapp: `https://api.whatsapp.com/send?phone=+55${this.phone}&text=sua%20mensagem`
      }
      addDoc(ref, userInfos)
    }
  }

}
</script>

<style>
* {
  font-family: 'Times New Roman', Times, serif;
}

.formSection {
  margin: 0 auto;
  width: 25em;
}

.submitButton {
  margin: 0 auto;
}
</style>
