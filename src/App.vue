<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'

const sxFontStyle = {
  xs: '12px',
  sm: '14px',
  md: '16px',
  lg: '20px',
  xl: '24px',
  xxl: '30px',
};

const sxColorStyle = {
  xs: 'red',
  sm: 'green',
  md: 'blue',
  lg: 'purple',
  xl: 'pink',
  xxl: 'cyan',
};
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" height="125" src="./assets/logo.svg" width="125"/>

    <div class="wrapper">
      <HelloWorld msg="You did it!"/>
      <div v-sx:backgroundColor="sxColorStyle"
           v-sx:fontSize="sxFontStyle">With Vue Media query style extension
      </div>
    </div>
  </header>

  <main>
    <TheWelcome/>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
