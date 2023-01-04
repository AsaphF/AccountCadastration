<template>
  <div class="container">
    <table class="table table-hover table-bordered">
      <thead>
        <tr>
          <th scope="col" v-for="(mark, index) in marks" :key="index">{{mark}}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items" :key="index">
          <td>{{item.id}}</td>
          <td>{{item.name}}</td>
          <td>{{item.phone}}</td>
          <td>{{item.cargo}}</td>
          <td>{{item.email}}</td>
          <td><a :href="item.whatsapp">Entrar em contato</a></td>
          <td><button class="btn btn-danger btn-sm" @click="deleteRow(index)" >Delete</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { users, doc, db, deleteDoc } from '../firebase/config'

export default {
  name: 'usersTable',
  data () {
    return {
      marks: ['ID', 'Nome', 'Telefone', 'Cargo', 'Email', 'WhatsApp'],
      items: users
    }
  },
  methods: {
    deleteRow (index) {
      const docRef = doc(db, 'users', this.items[index].id)
      console.log(this.items[index].id)
      this.items.splice(index, 1)

      deleteDoc(docRef)
    }
  }
}

</script>
<style>
  td{
    font-size: 16px;
  }
</style>
