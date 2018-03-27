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
          # {{ col.value }} #
        </q-td>
      </q-tr>
    </q-table>
  </q-page>
</template>

<script>
const channelCount = 16
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
    volume: 1,
    solo: false,
    muted: false
  }
}

export default {
  name: 'Mixer',
  data: () => ({
    columns: channels,
    tableData: data
  })
}
</script>

<style scoped>

</style>
