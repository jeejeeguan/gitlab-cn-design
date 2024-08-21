<script setup lang="ts">
import { cva, type VariantProps } from "class-variance-authority";
import type { HTMLAttributes } from "vue";
import { Primitive, type PrimitiveProps } from "radix-vue";
import { cn } from "~/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-base font-normal leading-normal transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        // sm:hover 确保 hover 样式只在非 mobile 尺寸的浏览器上生效，避免了 hover 样式不清除的问题
        // active 确保了 mobile 尺寸的浏览器上用户点按的时候仍然有交互样式
        primary: "bg-orange-600 text-white focus-visible:ring-orange-600 sm:hover:bg-orange-500 active:bg-orange-500",
        secondary: "bg-gray-950 text-white focus-visible:ring-gray-950 sm:hover:bg-gray-700 active:bg-gray-700",
        outline:
          "bg-white/0 text-gray-950 border border-gray-300 focus-visible:ring-gray-950 sm:hover:bg-gray-100 active:bg-gray-100",
        ghost: "bg-white/0 text-gray-950 focus-visible:ring-gray-950 sm:hover:bg-gray-100 active:bg-gray-100",
        link: "text-gray-950 sm:hover:underline underline-offset-4 focus-visible:ring-gray-950 active:underline",
      },
      size: {
        md: "h-10 px-4",
        lg: "h-12 px-6",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

type ButtonVariants = VariantProps<typeof buttonVariants>;

interface Props extends PrimitiveProps {
  variant?: ButtonVariants["variant"];
  size?: ButtonVariants["size"];
  class?: HTMLAttributes["class"];
}

const props = withDefaults(defineProps<Props>(), {
  variant: "primary",
  size: "md",
  class: "",
  as: "button",
});
</script>

<template>
  <Primitive :as="as" :as-child="asChild" :class="cn(buttonVariants({ variant, size }), props.class)">
    <slot></slot>
  </Primitive>
</template>
