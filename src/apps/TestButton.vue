<!--
 * @Author: Royal
 * @LastEditTime: 2022-07-14 15:12:43
 * @Description: 
-->
<template>
  <div class="outer" ref="handle">
    <button @click="test()">Test</button>
    <div class="screen">TEST</div>
    <div class="testright"></div>
  </div>
</template>
<script lang="ts" setup>
// import { Dialog } from '@feature/dialog/Dialog';
import { BrowserWindow, Notify, makeDragable } from '@packages/plug';
import { inject, onMounted, onUnmounted, ref } from 'vue';
const browserWindow = inject<BrowserWindow>('browserWindow');
const handle = ref<HTMLElement>();
async function test() {
  // const res = await Dialog.showMessageBox({
  //   type: 'info',
  //   title: 'title',
  //   message: '无法将文件移动到“C:',
  // });

  new Notify({
    title: 'title',
    content: '111',
    timeout: 5000,
  });
}
let unMount: () => void;
onMounted(() => {
  if (handle.value && browserWindow) {
    unMount = makeDragable(handle.value, browserWindow);
  }
});
onUnmounted(() => {
  unMount();
});
</script>
<style></style>
<style scoped>
.screen {
  position: fixed;
  bottom: 0;
  right: 0i;
}

.testright {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 100px;
  height: 100px;
  background-color: red;
}
</style>
