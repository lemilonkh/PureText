<template>
  <q-page class="flex flex-center fit round-borders">
    <q-table
      title="Mixer"
      :data="tableData"
      :columns="columns"
      row-key="name"
    >
      <q-tr slot="body" slot-scope="props" :props="props" @click.native="rowClick(props.row)" class="cursor-pointer">
        <q-td v-for="col in props.cols" :key="col.name" :props="props">
          <q-slider v-if="col.hasFader" v-model="props.row.volume" :min="-20" :max="2" :step="0.01" :decimals="2" color="lime" :fill-handle-always="true" /> <!-- dB -->
          <p class="caption" v-if="col.hasFader">
            <span class="chip-container">
              <q-chip square color="secondary">
                {{ props.row.volume }} dB
              </q-chip>
            </span>
          </p>
        </q-td>
      </q-tr>
    </q-table>
  </q-page>
</template>

<script>
const channelCount = 4
const channelWidth = 200

let columns = [{
  name: 'volume',
  required: false,
  label: 'Volume',
  align: 'center',
  field: 'volume',
  sortable: 'false',
  width: channelWidth,
  hasFader: true
}]

let tableData = []
for (let i = 0; i < channelCount; i++) {
  tableData.push({
    volume: 0, // dB
    solo: false,
    muted: false
  })
}

export default {
  name: 'Mixer',
  data: () => ({
    columns,
    tableData
  }),
  methods: {
    rowClick (row) {
      this.$q.notify({
        color: 'primary',
        icon: 'local_dining',
        message: `Hmm, are you sure? Your base has ${row.volume} decibels.`,
        actions: [{
          label: 'Yes, listen!',
          handler: () => {
            this.$q.notify({ color: 'positive', icon: 'done', message: 'Yummy. Thanks! Now one more with sweet and sour beat sauce.' })
          }
        }]
      })
    }
  }
}
</script>

<style scoped>

</style>
