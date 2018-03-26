<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar
        color="primary"
        :glossy="$q.theme === 'mat'"
        :inverted="$q.theme === 'ios'"
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
          Quasar App
          <div slot="subtitle">Running on Quasar v{{ $q.version }}</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer
      v-model="leftDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null"
    >
      <q-list
        no-border
        link
        inset-delimiter
      >
        <!--<q-list-header>Essential Links</q-list-header>
        <q-item @click.native="openURL('http://quasar-framework.org')">
          <q-item-side icon="school" />
          <q-item-main label="Docs" sublabel="quasar-framework.org" />
        </q-item>
        <q-item @click.native="openURL('https://github.com/quasarframework/')">
          <q-item-side icon="code" />
          <q-item-main label="GitHub" sublabel="github.com/quasarframework" />
        </q-item>

         //@click.native="changeView('timeline')"

        -->
        <q-item link to="/timeline">
          <q-item-side icon="timeline" />
          <q-item-main label="Timeline" sublabel="Edit linear audio tracks" />
        </q-item>
        <q-item link to="/mixer">
          <q-item-side icon="volume up" />
          <q-item-main label="Mixer" sublabel="Adjust sounds, volumes and effects" />
        </q-item>
        <q-item link to="/jam">
          <q-item-side icon="audiotrack" />
          <q-item-main label="Jam" sublabel="Record and try out stuff" />
        </q-item>
        <q-item link to="/library">
          <q-item-side icon="library music" />
          <q-item-main label="Library" sublabel="Browse available synths, samples and effects" />
        </q-item>
        <q-item link to="/code">
          <q-item-side icon="code" />
          <q-item-main label="Code" sublabel="Edit your synths and effects" />
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

<style>
</style>
