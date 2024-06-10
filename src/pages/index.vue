<script setup lang="ts">
import { isClient } from '@vueuse/core'

defineOptions({
  name: 'IndexPage',
})
if (isClient) {
  const router = useRouter()
  router.push(window.innerHeight > window.innerWidth ? '/m' : '/w')
}
</script>
