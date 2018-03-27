<template>
  <q-page class="flex flex-center fit round-borders">
    <grid-layout
      :layout="layout"
      :col-num="12"
      :row-height="30"
      :is-draggable="true"
      :is-resizable="false"
      :is-mirrored="false"
      :vertical-compact="true"
      :margin="[10, 10]"
      :use-css-transforms="true"
    >
      <grid-item
        v-for="item in layout"
        :x="item.x"
        :y="item.y"
        :w="item.w"
        :h="item.h"
        :i="item.i"
        :autoSize="false">
        <div style="width: 50px; height: 50px; border: 1px solid; margin: 10px">
          {{item.i}}
        </div>
      </grid-item>
    </grid-layout>
  </q-page>
</template>

<script>
import VueGridLayout from 'vue-grid-layout'
let GridLayout = VueGridLayout.GridLayout
let GridItem = VueGridLayout.GridItem

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

let layout = [
  {x: 1, y: 1, w: 1, h: 1, i: 0},
  {x: 2, y: 1, w: 1, h: 1, i: 1},
  {x: 3, y: 1, w: 1, h: 1, i: 2},
  {x: 1, y: 2, w: 2, h: 1, i: 3}
]

export default {
  name: 'Jam',
  data: () => ({
    columns,
    tableData,
    layout
  }),
  components: {
    GridLayout,
    GridItem
  },
  methods: {
    rowClick (row) {
      console.log('Click', row)
    }
  }
}
</script>

<style scoped>

</style>
