<template>
  <div class="App">
    <Header />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from '@/components/Header';
export default{
    data() {
        return {};
    },
    components: { Header }
}
</script>

