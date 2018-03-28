<template>
  <q-page class="flex flex-center fit round-borders">
    <draggable
      v-model="sounds"
      :options="{group: 'sounds'}"
      @start="drag=true"
      @end="drag=false"
    >
      <div
        v-for="sound in sounds"
        :key="sound.id"
        class="sound"
        :style="{backgroundColor: `sound.color`}"
      >
        {{sound.name}}
      </div>
    </draggable>
  </q-page>
</template>

<script>
import draggable from 'vuedraggable'

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

let sounds = [
  {name: 'Base drum', id: 'sample0', color: '#a20'},
  {name: 'Snare drum', id: 'sample1', color: '#ea2'},
  {name: 'Closed HiHat', id: 'sample2', color: '#cfc'}
]

export default {
  name: 'Jam',
  data: () => ({
    columns,
    tableData,
    sounds
  }),
  components: {
    draggable
  },
  methods: {
    rowClick (row) {
      console.log('Click', row)
    }
  }
}
</script>

<style scoped>
.sound {
  width: 250px;
  height: 50px;
  border: 1px solid #bbb;

  padding: 10px;
  margin: 10px;

  background-color: #eee;

  border-radius: 5px;
}
</style>
