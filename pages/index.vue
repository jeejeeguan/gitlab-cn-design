<script setup lang="ts"></script>
<template>
  <div class="flex items-center space-x-4 p-4">
    <Button variant="primary" size="medium">Button</Button>
    <Button variant="primary" size="medium" as-child>
      <a href="/">Button</a>
    </Button>
  </div>
</template>
