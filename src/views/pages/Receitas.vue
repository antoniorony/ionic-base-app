<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>{{ $route.params.id }}</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">{{ $route.params.id }}</ion-title>
        </ion-toolbar>
      </ion-header>
        <div>
            <item-list-vue
                listColor="success"
                titulo="Salário"
                valor="2.997,34"
            ></item-list-vue>
            <item-list-vue
                listColor="success"
                titulo="Extra x20"
                valor="180,34"
            ></item-list-vue>
            <item-list-vue
                listColor="success"
                titulo="Bolsa"
                valor="500,34"
            ></item-list-vue>
        </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent } from 'vue';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import ItemListVue from '../componets/ItemsList/ItemList.vue';

export default defineComponent({
    name: "Home-land",
    components: {
        IonButtons,
        IonContent,
        IonHeader,
        IonMenuButton,
        IonPage,
        IonTitle,
        IonToolbar,
        ItemListVue,
    }
})
</script>

<style lang="scss" scoped>

</style>