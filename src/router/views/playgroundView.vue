<template>
  <Layout>
    <div>
      <PlaygroundComp />
    </div>
  </Layout>
</template>

<script>
import Layout from '@layouts/main.vue'
import PlaygroundComp from '@components/playgroundComp.vue'
export default {
  page: {
    title: 'Playground',
    meta: [{ name: 'description' }],
  },
  components: { Layout, PlaygroundComp },
}
</script>
