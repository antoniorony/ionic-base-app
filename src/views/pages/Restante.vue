<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button @click="() => router.back()">
            <ion-icon :icon="arrowBack"></ion-icon>
          </ion-back-button>
        </ion-buttons>
        <ion-title>Restante</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">{{ $route.params.id }}</ion-title>
        </ion-toolbar>
      </ion-header>
        <ion-fab vertical="center" horizontal="center" slot="fixed">
        </ion-fab>
        <div>
            <item-list-vue
                listColor="primary"
                titulo="Salário"
                valor="2.997,34"
            ></item-list-vue>
            <item-list-vue
                listColor="primary"
                titulo="Extra x20"
                valor="180,34"
            ></item-list-vue>
            <item-list-vue
                listColor="primary"
                titulo="Bolsa"
                valor="500,34"
            ></item-list-vue>
        </div>        
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent } from 'vue';
import { IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { IonFab } from '@ionic/vue';
import { add, arrowBack } from 'ionicons/icons';
import ItemListVue from '../componets/ItemsList/ItemList.vue';
import { useRouter } from 'vue-router';

export default defineComponent({
    name: "restante-land",
    components: {
        IonButtons,
        IonContent,
        IonHeader,
        IonPage,
        IonTitle,
        IonToolbar,
        IonFab,
        ItemListVue,
    },
    setup() {
      const router = useRouter();
      return {
        router,
        add,
        arrowBack,
      }
    }
})
</script>

<style lang="scss" scoped>

</style>