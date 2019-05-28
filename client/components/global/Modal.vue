<template>
  <transition name="modal">
    <div class="modal-mask" :class="{ 'is-active': showModal }">
      <div class="modal-wrapper">
        <div class="modal-container">
          <slot name="form-container">
            <div class="modal-card-head">
              <slot name="header">
                default header
              </slot>
            </div>

            <div class="modal-card-body">
              <slot name="body">
                default body
              </slot>
            </div>
          </slot>

          <slot name="footer">
            <footer class="modal-card-foot">
              <button class="button is-success" @click="$emit('close')">
                Save changes
              </button>
              <button class="button is-danger" @click="$emit('close')">
                {{ $t("cancel") }}
              </button>
            </footer>
          </slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Modal",
  props: {
    showModal: { type: Boolean, default: null }
  }
}
</script>

<style>
.modal-mask {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 550px;
  margin: 0px auto;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-card-head {
  font-size: 20px;
  margin-top: 0;
  background: hsl(0, 0%, 96%);
}

.modal-card-body {
}

.modal-card-foot {
  margin-top: 30px;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
