<template>
  <button :class="buttonClasses" :disabled="disabled">
    <slot />
  </button>
</template>

<script setup lang="ts">
  import { computed } from "vue";

  interface ButtonProps {
    variant?: "primary" | "outline" | "ghost";
    size?: "medium";
    disabled?: boolean;
  }

  // 使用 widthDefaults 和 defineProps 定义组件的默认属性
  const props = withDefaults(defineProps<ButtonProps>(), {
    variant: "primary",
    size: "medium",
    disabled: false,
  });

  // 使用计算属性 buttonClasses,根据按钮的类型、大小和状态生成相应的类名
  const buttonClasses = computed(() => {
    const baseClasses =
      "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-base font-normal leading-normal ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"; // 基础类

    // 根据 props.variant 生成类型相关的类名
    const variantClasses = {
      primary: "bg-gray-950 text-white hover:bg-gray-700",
      outline: "bg-white/0 text-gray-950 border border-gray-300 hover:bg-gray-100",
      ghost: "bg-white/0 text-gray-950 hover:bg-gray-100",
    }[props.variant || "primary"]; // 默认使用 primary 类型

    // 根据 props.size 生成大小相关的类名
    const sizeClasses = {
      medium: "h-10 px-4 py-2 ",
    }[props.size || "medium"];

    return `${baseClasses} ${variantClasses} ${sizeClasses}`;
  });
</script>
