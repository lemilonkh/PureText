<template>
  <q-page class="flex flex-center fit round-borders">
    <q-list highlight>
      <q-list-header>
        <q-item-side icon="timeline">
          Timeline
        </q-item-side>
      </q-list-header>
      <q-item>
        <q-item-main label="John Doe">
          <av-line
            :line-width="2"
            line-color="lime"
            audio-src="/statics/samples/kick.wav"
          />
        </q-item-main>
        <q-item-side right>
          <q-item-tile icon="chat_bubble" color="green" />
        </q-item-side>
      </q-item>
      <q-item>
        <q-item-main label="Jim Doe">
          <wavesurfer-player layout="modal" />
        </q-item-main>
        <q-item-side right icon="chat_bubble" />
      </q-item>
      <q-item-separator />
      <q-list-header>Previous chats</q-list-header>
      <q-item>
        <q-item-main label="Jack Doe" />
      </q-item>
    </q-list>
  </q-page>

</template>

<style>
</style>

<script>
import WavesurferPlayer from 'components/wavesurfer-player'

export default {
  name: 'Timeline',
  components: {
    WavesurferPlayer
  }
}
</script>
