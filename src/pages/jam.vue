<template>
  <q-page class="flex flex-center fit round-borders">
    <q-table
      title="Jam"
      row-key="name"
      :data="tableData"
      :columns="columns"
      :hide-bottom="true"
    >
      <q-tr slot="body" slot-scope="props" :props="props" @click.native="rowClick(props.row)" class="cursor-pointer">
        <q-td v-for="col in props.cols" :style="{width: col.width + 'px'}" :key="col.name" :props="props">
          Track {{col.name}}
        </q-td>
      </q-tr>
    </q-table>
  </q-page>
</template>

<script>
const rowCount = 4
const volumeWidth = 200
const mutedWidth = 40

let columns = [{
  name: 'volume',
  required: false,
  label: 'Volume',
  align: 'center',
  field: 'volume',
  sortable: false,
  width: volumeWidth,
  hasFader: true
}, {
  name: 'buttons',
  required: false,
  label: 'Buttons',
  align: 'center',
  sortable: false,
  width: mutedWidth,
  hasFader: false
}]

let tableData = []
for (let i = 0; i < rowCount; i++) {
  tableData.push({
    volume: 0, // dB
    solo: false,
    muted: false,
    live: false
  })
}

export default {
  name: 'Jam',
  data: () => ({
    columns,
    tableData
  }),
  methods: {
    rowClick (row) {
      console.log('Click', row)
    }
  }
}
</script>

<style scoped>

</style>
