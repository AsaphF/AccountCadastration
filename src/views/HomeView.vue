<template>
  <div class="home">
    <UserForm/>
  </div>
</template>

<script>
// @ is an alias to /src
import UserForm from '@/components/UserForm.vue'

export default {
  name: 'userForm',
  components: { UserForm }
}
</script>
