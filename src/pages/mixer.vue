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
          <div v-if="col.hasFader">
            <q-slider v-model="props.row.volume" :min="-20" :max="2" :step="0.01" :decimals="2" color="lime" :fill-handle-always="true" /> <!-- dB -->
            <p class="caption" v-if="col.hasFader">
              <span class="chip-container">
                <q-chip square color="secondary">
                  {{ props.row.volume }} dB
                </q-chip>
              </span>
            </p>
          </div>
          <div v-if="col.name == 'muted'">
            <q-checkbox
              v-model="props.row.muted"
              checked-icon="volume off"
              unchecked-icon="volume up"
              color="lime"
            />
          </div>
        </q-td>
      </q-tr>
    </q-table>
  </q-page>
</template>

<script>
const channelCount = 4
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
  name: 'muted',
  required: false,
  label: 'Muted',
  align: 'center',
  field: 'muted',
  sortable: true,
  width: mutedWidth,
  hasFader: false
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
      // TODO remove
      // this.$q.notify({
      //   color: 'primary',
      //   icon: 'local_dining',
      //   message: `Hmm, are you sure? Your base has ${row.volume} decibels.`,
      //   actions: [{
      //     label: 'Yes, listen!',
      //     handler: () => {
      //       this.$q.notify({ color: 'positive', icon: 'done', message: 'Yummy. Thanks! Now one more with sweet and sour beat sauce.' })
      //     }
      //   }]
      // })
    }
  }
}
</script>

<style scoped>

</style>
