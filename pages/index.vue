<script setup>
import Search from "~/assets/svg/Search.svg";
</script>
<template>
  <div class="flex h-screen w-full space-x-4 p-4">
    <Button size="medium" variant="primary">Search</Button>

    <Button size="medium" variant="primary">
      Link Button
      <Search class="ml-1 h-4 w-4 fill-white" />
    </Button>

    <Button size="medium" variant="link">Link Button</Button>

    <Button size="medium" variant="link">
      Link Button
      <Search class="ml-1 h-4 w-4 fill-gray-950" />
    </Button>
  </div>
</template>
