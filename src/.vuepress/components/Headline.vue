<template>
  <div class="headline-wrapper">
    <div class="headline-item">
      <p>{{ message }}</p>
    </div>
    <div class="headline-item">
      <p>{{ message }}</p>
    </div>
    <div class="headline-item">
      <p>{{ message }}</p>
    </div>
    <div class="headline-item">
      <p>{{ message }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'headline',
  data() {
    return {
      message: 'Hello world!',
    };
  },
};
</script>

<style>
.headline-wrapper {
  display: flex;
  flex-wrap: wrap;
  align-content: stretch;
  align-items: stretch;
  justify-content: center;
}
.headline-item {
  position: relative;
  flex-basis: calc(33% - 3rem);
  margin: 0.5rem;
  padding: 1rem;
  border-radius: 0.5rem;
  transition: background var(--color-transition),
    box-shadow var(--color-transition), transform var(--transform-transition);
}
.headline-item.link {
  cursor: pointer;
}
</style>
