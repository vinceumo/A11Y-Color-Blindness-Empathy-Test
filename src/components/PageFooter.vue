<template>
  <footer class="has-py-5 has-bg-dark">
    <div class="container">
      <div v-if="isTestShown && sourceInput == 'url'">
        <h2>Why is my site showing as a blank white box?</h2>
        <p>Some websites do not allow to be embedded in other websites. There is no workaround. Alternatively, you can provide a screenshot of the website you wish to testor use the browser extension.</p>
        <hr>
      </div>
      <h2>Why this website?</h2>
      <p><i>A11Y - Color blindness empathy test</i> was build to help designers and developers to understand color blindness and visual imparity.</p>
      <p>This website is base on <a href="https://lukyvj.github.io/accecss/">AcceCSS</a> Sass mixin by <a href="https://twitter.com/LukyVj">LukyVj</a>. This mixin allows this app to emulate 8 types of color blindness, plus grayscale to check the contrast of your website.</p>
      <p>If you want to learn about color blindness, here are few resources:</p>
      <ul>
        <li><a href="https://www.nhs.uk/conditions/Colour-vision-deficiency/">Colour vision deficiency (colour blindness) - NHS</a></li>
        <li><a href="https://nei.nih.gov/health/color_blindness/facts_about">Facts About Color Blindness - NIH</a></li>
        <li><a href="https://99designs.co.uk/blog/tips/designers-need-to-understand-color-blindness/">Why all designers need to understand color blindness  - 99designs</a></li>
        <li><a href="https://medium.com/intrepid-s-insights/designing-for-and-with-color-blindness-48392aab3d87">Designing For (and With) Color Blindness - Aaron Tenbuuren</a></li>
        <li><a href="https://uxcellence.com/2018/accessible-color-contrast">Designing for Accessibility: Color & Contrast - UXcellence</a></li>
      </ul>
      <hr>
      <ul class="list-unstyle plugins">
        <li><a href="https://chrome.google.com/webstore/detail/a11y-color-blindness-empa/idphhflanmeibmjgaciaadkmjebljhcc" class="btn is-dark">Chrome extension</a></li>
        <li><a href="https://addons.mozilla.org/en-GB/firefox/addon/a11y-color-blindness-test/" class="btn is-dark">Firefox extension</a></li>
      </ul>
      <ul class="list-inline has-text-center has-my-4">
        <li><a href="https://github.com/vinceumo/a11y-empathy-test">Code</a></li>
        <li><a href="http://www.vincent-humeau.com/">Made by Vincent Humeau</a></li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {
  name: "PageFooter",
  props: {
    isTestShown: Boolean,
    sourceInput: String
  }
}
</script>

<style lang="scss" scoped>
.plugins {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  .btn {
    margin: 0.5rem;
  }
}
</style>
