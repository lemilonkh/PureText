<template>
  <q-table
    title="Mixer"
    :data="tableData"
    :columns="columns"
    row-key="name"
  />
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
    sortable: true
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
