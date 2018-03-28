<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar
        color="black"
        id="main-toolbar"
        :inverted="true"
      >
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          Pure Text
          <div slot="subtitle">DAW by YWF's Algh0st - v0.0.1</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer
      class="main-menu"
      v-model="leftDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null"
    >
      <q-list
        no-border
        link
        inset-delimiter
      >
        <q-item link to="/timeline">
          <q-item-side icon="timeline" />
          <q-item-main label="Timeline" sublabel="Edit linear audio tracks" />
        </q-item>
        <q-item link to="/jam">
          <q-item-side icon="audiotrack" />
          <q-item-main label="Jam" sublabel="Record and try out stuff" />
        </q-item>
        <q-item link to="/mixer">
          <q-item-side icon="volume up" />
          <q-item-main label="Mixer" sublabel="Adjust sounds and effects" />
        </q-item>
        <q-item link to="/library">
          <q-item-side icon="library music" />
          <q-item-main label="Library" sublabel="Browse available sounds" />
        </q-item>
        <q-item link to="/code">
          <q-item-side icon="code" />
          <q-item-main label="Code" sublabel="Edit your synths and effects" />
        </q-item>
        <q-item-separator />
        <q-item @click.native="openURL('https://github.com/lemilonkh/PureText')">
          <q-item-side icon="code" />
          <q-item-main label="PureText on GitHub" sublabel="github.com/lemilonkh/PureText" />
        </q-item>
      </q-list>
    </q-layout-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'LayoutDefault',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  methods: {
    openURL
  }
}
</script>

<style lang="stylus">
.main-toolbar, .main-menu
  color: white
  background-color: $body-background

</style>
