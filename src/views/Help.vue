<script setup lang="ts">
const helpData = [
  {
    title: '¿Cómo puedo retirar dinero en el banco?',
    content: "<strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow."
  },
  {
    title: '¿Cómo retirar efectivo en el banco?',
    content: "<strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow."
  },
  {
    title: '¿Cuánto dinero se puede retirar en el banco?',
    content: "<strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow."
  },
  {
    title: '¿Qué pasa si retiro mucho dinero en efectivo?',
    content: "<strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow."
  },
  {
    title: '¿Qué pasa si no puedo justificar mi dinero?',
    content: "<strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow."
  },
  {
    title: '¿Qué pasa si recibo mucho dinero en mi cuenta?',
    content: "<strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow."
  },
  {
    title: '¿Qué pasa si muevo mi dinero de un banco a otro?',
    content: "<strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow."
  }
]
</script>

<template>
  <div>
    <h1 class="display-2">¿Cómo podemos ayudarte?</h1>

    <div class="accordion" id="helpAccordion">
      <div
        v-for="(help, index) in helpData"
        :key="index"
        class="accordion-item"
      >
        <h2 class="accordion-header">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            :data-bs-target="`#collapse-${index}`"
            aria-expanded="false"
            :aria-controls="`collapse-${index}`"
          >
            {{ help.title }}
          </button>
        </h2>
        <div
          :id="`collapse-${index}`"
          class="accordion-collapse collapse"
          data-bs-parent="#helpAccordion"
        >
          <div class="accordion-body" v-html="help.content"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  h1 {
    text-align: center;
    padding-bottom: 15px
  }

  button.accordion-button {
    box-shadow: none !important;
  }
</style>
