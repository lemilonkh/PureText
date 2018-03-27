<template>
<div class="wavesurf-root">
  <div class="meta-artist">
    <span class="artist"></span>
    <span class="name"></span>
  </div>

  <div id="waveform" />

  <div class="controls">
    <div v-if="layout == 'modal'">
      <q-btn
        icon="skip previous"
        v-on:click="playPrev()"
      />
      <q-btn>
        <q-checkbox
          v-model="playing"
          checked-icon="play arrow"
          unchecked-icon="pause"
          color="deep-orange"
        />
      </q-btn>
      <!--  v-on:click="togglePlayPause($event)" -->
      <q-btn
        icon="skip next"
        v-on:click="playNext()"
      />
    </div>
  </div>

  <!--<div :v-if="showPlaylist" class="playlist" v-for="source in sources" v-bind:key="source.name">
    <div class="demo-song" v-bind:class="{active: source.isActive}">
      <div class="demo-title"><b>{{source.title}}</b></div>
      <div class="artist-name">{{source.name}}</div>
      <div class="demo-src">{{source.src}}</div>
      <div class="demo-desc"></div>
    </div>
  </div>-->
</div>
</template>

<script>
import WaveSurfer from 'wavesurfer.js'

export default {
  name: 'wavesurfer-player',
  props: ['layout'],
  data: () => {
    return {
      sources: [
        {
          name: 'test',
          title: 'Test',
          src: 'https://downloads.arturia.com/products/synthwave/preset/audio_examples/Prophet_V__Sample_Magic.mp3',
          isActive: true
        }
      ],
      playing: false,
      showPlaylist: false
    }
  },
  methods: {
    initWaveSurf (self) {
      this.wavesurfer = WaveSurfer.create({
        container: '#waveform',
        barWidth: 1,
        height: 120,
        waveColor: '#262626',
        progressColor: '#2ddcb4'
      })
      this.wavesurfer.load(this.sources[0].src)
      this.indexPlaying = 0
    },

    addWaveSurfListeners () {
      let me = this
      this.wavesurfer.on('ready', () => {
        console.log('Ready to surf!')
        me.wavesurfer.play()
      })
      this.wavesurfer.on('finish', () => {
        console.log('Done w/ surfing!')
        me.playNext()
      })
    },

    getSurfer () { return this.wavesurfer },

    play () {
      this.wavesurfer.play()
    },

    pause () {
      this.wavesurfer.pause()
    },

    playNext () {
      if (this.indexPlaying < this.sources.length - 1) {
        this.indexPlaying += 1
        this.wavesurfer.load(this.sources[this.indexPlaying].src)
      } else {
        this.indexPlaying = 0
        this.wavesurfer.load(this.sources[0].src)
      }
    },

    playPrev () {
      if (this.indexPlaying > 0) {
        this.indexPlaying -= 1
        this.wavesurfer.load(this.sources[this.indexPlaying].src)
      } else {
        this.indexPlaying = 0
        this.wavesurfer.load(this.sources[0].src)
      }
    },

    togglePlayPause (event) {
      let targetClasses = event.target.classList

      if (targetClasses.contains('play')) {
        this.play()
        targetClasses.remove('play')
        targetClasses.add('pause')
      } else {
        this.pause()
        targetClasses.remove('pause')
        targetClasses.add('play')
      }
    },

    mounted () {
      this.initWaveSurf(this)
      this.addWaveSurfListeners()
    }
  }
}
</script>

<style scoped>
  .fa-circle-thin:before {
    content: "\f1db";
  }

  .btn-prev, .btn-next, .play-pause-btn {
    display: inline-block;
  }

  .fa-backward {
    margin-left: 0.4em;
    margin-top: 0.1em;
  }

  .fa-forward {
    margin-left: 0.6em;
    margin-top: 0.1em;
  }

  .fa-play {
    margin-left: 0.7em;
    margin-top: 0.1em;
  }

  .playlist .demo-song {
    background-color: #444444;
    color: #fff;
    padding:1em;
  }
  .playlist .demo-song.active {
    background-color: #222222;
  }
</style>
