<script setup lang="ts">
import Keynote from "~/assests/svg/Keynote.svg";
import Download from "~/assests/svg/Download.svg";
</script>
<template>
  <div class="flex items-center space-x-4 p-4">
    <Button variant="primary" size="medium">Button</Button>
    <Button variant="outline" size="medium">Button</Button>
    <Button variant="outline" size="medium">
      Button
      <Keynote class="ml-1 h-4 w-4 fill-gray-950" />
    </Button>
    <Button variant="outline" size="icon">
      <Download class="h-4 w-4 fill-gray-950" />
    </Button>
  </div>
</template>
