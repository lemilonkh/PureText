<template>
  <q-page class="flex flex-center fit">
    <q-list>
      <q-list-header inset>Library</q-list-header>
      <q-item>
        <q-item-side icon="folder" inverted color="primary" />
        <q-item-main>
          <q-item-tile label>Samples</q-item-tile>
          <q-item-tile sublabel>February 22, 2016</q-item-tile>
        </q-item-main>
        <q-item-side right icon="info" color="green" />
      </q-item>
      <q-item-separator inset />
      <q-list-header inset>Projects</q-list-header>
      <q-item>
        <q-item-side icon="assignment" inverted color="grey-6" />
        <q-item-main>
          <q-item-tile label>Dub Loop</q-item-tile>
          <q-item-tile sublabel>April 1st, 2018</q-item-tile>
        </q-item-main>
        <q-item-side right icon="info" />
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
export default {
  name: 'Library'
}
</script>

<style scoped>

</style>
