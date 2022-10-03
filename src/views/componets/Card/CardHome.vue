<template>
  <ion-card>
    <ion-card-header>
      <ion-card-title>Visão geral</ion-card-title>
      <ion-card-subtitle>receitas x despesas</ion-card-subtitle>
    </ion-card-header>

    <ion-card-content>
        <item-list-vue
          listColor="success"
          listShape="round"  
          v-bind:listIcon="addCircle"
          listSlot="start"
          titulo="Receitas"
          valor="5.750,33"
          listRouter="/page/receitas"
        ></item-list-vue>

        <item-list-vue
          listColor="danger"
          listShape="round"  
          v-bind:listIcon="removeCircle"
          listSlot="start"
          titulo="Despesas"
          valor="2.752,33"
          listRouter="/page/despesas"
        ></item-list-vue>

        <item-list-vue
          listColor="primary"
          listShape="round"  
          v-bind:listIcon="addCircle"
          listSlot="start"
          titulo="Restante"
          valor="2.997,34"
          listRouter="/page/restante"
        ></item-list-vue>
    </ion-card-content>
  </ion-card>
</template>

<script>
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/vue';
import { defineComponent } from 'vue';
import { addCircle, removeCircle } from 'ionicons/icons';
import ItemListVue from '../ItemsList/ItemList.vue';

export default defineComponent({
  name: "card-home",
  components: { 
    IonCard, 
    IonCardContent, 
    IonCardHeader, 
    IonCardSubtitle, 
    IonCardTitle, 
    ItemListVue
  },
  setup() {
    return {
      addCircle,
      removeCircle
    }
  }
});
</script>