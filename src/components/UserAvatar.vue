<script setup>
import { computed } from "vue";
import Avataaars from 'vuejs-avataaars/src/Avataaars.vue'

const p = defineProps({
  avatar: {
    type: Object,
    default: { avatar: {} },
  }
});

</script>

<template>
  <div>
    <Avataaars :accessoriesType="p.avatar.accessoriesType" :circleColor="p.avatar.circleColor"
      :clotheColor="p.avatar.clotheColor" :clotheType="p.avatar.clotheType" :eyeType="p.avatar.eyeType"
      :eyebrowType="p.avatar.eyebrowType" :facialHairColor="p.avatar.facialHairColor"
      :facialHairType="p.avatar.facialHairType" :graphicType="p.avatar.graphicType" :hairColor="p.avatar.hairColor"
      :isCircle="p.avatar.is_circle" :mouthType="p.avatar.mouthType" :skinColor="p.avatar.skinColor"
      :topColor="p.avatar.topColor" :topType="p.avatar.topType" class="block h-auto w-full max-w-full">
    </Avataaars>
    <slot />
  </div>
</template>
