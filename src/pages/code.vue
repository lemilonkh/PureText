<template>
  <q-page class="flex flex-center fit round-borders">
    <q-editor
      v-model="code"
      :fonts="{
        droid: 'Droid'
      }"
    />
  </q-page>
</template>

<script>
export default {
  name: 'Code',
  data: () => ({
    code: '(print "Hello World")'
  })
}
</script>

<style scoped>

</style>
