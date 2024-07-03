<script setup lang="ts">
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-base font-normal leading-normal transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        // sm:hover 确保 hover 样式只在非 mobile 尺寸的浏览器上生效，避免了 hover 样式不清除的问题
        // active 确保了 mobile 尺寸的浏览器上用户点按的时候仍然有交互样式
        primary: "bg-gray-950 text-white focus-visible:ring-gray-950 sm:hover:bg-gray-700 active:bg-gray-700",
        outline:
          "bg-white/0 text-gray-950 border border-gray-300 focus-visible:ring-gray-950 sm:hover:bg-gray-100 active:bg-gray-100",
        ghost: "bg-white/0 text-gray-950 focus-visible:ring-gray-950 sm:hover:bg-gray-100 active:bg-gray-100",
      },
      size: {
        medium: "h-10 px-4 py-2",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "medium",
    },
  },
);

type ButtonVariants = VariantProps<typeof buttonVariants>;

interface Props {
  variant?: ButtonVariants["variant"];
  size?: ButtonVariants["size"];
}

withDefaults(defineProps<Props>(), {
  variant: "primary",
  size: "medium",
});
</script>

<template>
  <button :class="buttonVariants({ variant, size })">
    <slot />
  </button>
</template>
