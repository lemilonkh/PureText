<template>
  <q-page class="flex flex-center fit round-borders">
    <brace
      :fontsize="'22px'"
      :theme="'monokai'"
      :mode="'javascript'"
      :codefolding="'markbegin'"
      :softwrap="'free'"
      :selectionstyle="'text'"
      :highlightline="true"
    >
      Testerino
    </brace>
  </q-page>
</template>

<script>
import Brace from 'vue-bulma-brace'

export default {
  name: 'Code',
  components: {
    Brace
  },
  data: () => ({
    code: '(print "Hello World")'
  })
}
</script>

<style scoped>

</style>
