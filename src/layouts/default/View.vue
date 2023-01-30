<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-app-bar class="px-3" color="primary" flat density="compact">
    <v-avatar color="grey-darken-1" size="32"></v-avatar>

    <v-spacer></v-spacer>

    <v-tabs centered color="grey-darken-2">
      <v-tab v-for="link in links" :key="link">
        {{ link }}
      </v-tab>
    </v-tabs>
    <v-spacer></v-spacer>

    <v-btn text icon @click="toggleTheme">
      <v-icon>mdi-theme-light-dark</v-icon>
    </v-btn>
  </v-app-bar>
  <v-main class="background">
    <router-view />
  </v-main>
</template>

<script setup>
import { useTheme } from 'vuetify'
const links = ['Dashboard', 'Messages', 'Profile', 'Updates']
const theme = useTheme()
function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
</script>
