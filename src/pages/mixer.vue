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
          <q-slider v-model="props.row[col.name].volume" :min="-20" :max="2" /> <!-- dB -->
        </q-td>
      </q-tr>
    </q-table>
  </q-page>
</template>

<script>
const channelCount = 4
const channelWidth = 200

let channels = []
let data = [{}]

for (let i = 0; i < channelCount; i++) {
  let channelName = 'channel' + i
  channels.push({
    name: channelName,
    required: false,
    label: 'Channel #' + i,
    align: 'center',
    field: channelName,
    sortable: true,
    width: channelWidth
  })

  data[0][channelName] = {
    volume: 1, // dB
    solo: false,
    muted: false
  }
}

export default {
  name: 'Mixer',
  data: () => ({
    columns: channels,
    tableData: data
  }),
  methods: {
    rowClick (row) {
      this.$q.notify({
        color: 'primary',
        icon: 'local_dining',
        message: `Hmm, are you sure? Your base has ${row['channel0'].volume} decibels.`,
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
