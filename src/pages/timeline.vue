<template>
  <q-page class="flex flex-center fit round-borders">
    <q-list highlight>
      <q-list-header>
        <q-item-side icon="timeline">
          Timeline
        </q-item-side>
      </q-list-header>
      <q-item>
        <q-item-main label="Kick">
          <av-line
            :line-width="2"
            line-color="lime"
            audio-src="/statics/samples/kick.wav"
          />
        </q-item-main>
        <q-item-side right icon="drag handle" />
      </q-item>
      <q-item>
        <q-item-main label="Melody">
          <wavesurfer-player layout="modal" />
        </q-item-main>
        <q-item-side right icon="drag handle" />
      </q-item>
      <q-item-separator />
      <q-list-header>Create new</q-list-header>
      <q-item>
        <q-item-main label="Drum Loop" />
      </q-item>
      <q-item>
        <q-item-main label="Melody" />
      </q-item>
      <q-item>
        <q-item-main label="Synth" />
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
