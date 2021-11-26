<template>
  <div class="py-12 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="lg:text-center">
        <h2 v-if="preHeading" class="text-base text-indigo-600 font-semibold tracking-wide uppercase">
          {{ preHeading }}
        </h2>
        <p v-if="heading" class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          {{ heading }}
        </p>
        <p v-if="description" class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          {{ description }}
        </p>
      </div>

      <div v-if="features.length > 0" class="mt-10">
        <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
          <div v-for="feature in features" :key="feature.heading" class="relative">
            <dt>
              <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <component :is="feature.icon" class="h-6 w-6" aria-hidden="true" />
              </div>
              <p class="ml-16 text-lg leading-6 font-medium text-gray-900">
                {{ feature.heading }}
              </p>
            </dt>
            <dd class="mt-2 ml-16 text-base text-gray-500">
              {{ feature.description }}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from "vue-property-decorator";

@Component
export default class FeaturesCentered2x2Grid extends Vue {
  @Prop({ required: false, default: "" })
  public preHeading!: string;

  @Prop({ required: false, default: "" })
  public heading!: string;

  @Prop({ required: false, default: "" })
  public description!: string;

  @Prop({ required: false, default: () => [] })
  public features!: Array<{
    heading: string;
    description: string;
    icon: string;
  }>;
}
</script>
