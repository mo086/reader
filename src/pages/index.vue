<script setup lang="ts">
defineOptions({
  name: 'IndexPage',
})
const router = useRouter()
router.push(window.innerHeight > window.innerWidth ? '/m' : '/w')
</script>
