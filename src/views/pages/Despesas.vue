<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button @click="() => router.back()">
            <ion-icon :icon="arrowBack"></ion-icon>
          </ion-back-button>
        </ion-buttons>
        <ion-title>Despesas</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">{{ $route.params.id }}</ion-title>
        </ion-toolbar>
      </ion-header>
        <ion-fab vertical="center" horizontal="center" slot="fixed">
        <ion-fab-button>
            <ion-icon :icon="add"></ion-icon>
        </ion-fab-button>
        </ion-fab>
        <div>
            <item-list-vue
                listColor="danger"
                titulo="Salário"
                valor="2.997,34"
            ></item-list-vue>
            <item-list-vue
                listColor="danger"
                titulo="Extra x20"
                valor="180,34"
            ></item-list-vue>
            <item-list-vue
                listColor="danger"
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
import { IonFab, IonFabButton } from '@ionic/vue';
import { add, arrowBack } from 'ionicons/icons';
import ItemListVue from '../componets/ItemsList/ItemList.vue';
import { useRouter } from 'vue-router';

export default defineComponent({
    name: "despesas-land",
    components: {
        IonButtons,
        IonContent,
        IonHeader,
        IonPage,
        IonTitle,
        IonToolbar,
        IonFab,
        IonFabButton,
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