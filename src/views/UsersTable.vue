
<template>
  <div class="home">
    <UserTable/>
  </div>
</template>

<script>
// @ is an alias to /src
import UserTable from '../components/UserTable.vue'

export default {
  name: 'userTable',
  components: { UserTable }
}
</script>
