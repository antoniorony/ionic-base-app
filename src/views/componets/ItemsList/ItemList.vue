<template>

    <ion-item>
        <ion-button v-bind:shape="listShape" v-bind:color="listColor"  v-bind:slot="listSlot">
        <ion-icon v-bind:src="listIcon" v-bind:slot="listSlot"></ion-icon>
        <ion-label>{{ titulo }}</ion-label>
        </ion-button>
        <ion-label slot="end">R$ {{ valor }}</ion-label>  
    </ion-item>

</template>

<script>
import { IonIcon, IonItem, IonLabel, IonButton } from '@ionic/vue';
import { defineComponent } from 'vue';
import { addCircle, removeCircle } from 'ionicons/icons';

export default defineComponent({
  name: "item-list",
  props: {
    titulo: String,
    valor: Number,
    listShape: String,
    listColor: String,
    listSlot: String,
    listIcon: String,
  },
  components: { 
    IonIcon, 
    IonItem, 
    IonLabel, 
    IonButton,
  },
  setup() {
    return {
      addCircle,
      removeCircle
    }
  }
});
</script>

<style lang="scss" scoped>

</style>