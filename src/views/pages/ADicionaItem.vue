<template>
    <ion-page>
      <ion-header :translucent="true">
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button @click="() => router.back()">
              <ion-icon :icon="arrowBack"></ion-icon>
            </ion-back-button>
          </ion-buttons>
          <ion-title>Adicionar Item</ion-title>
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
          <div class="margem-topo">
            <ion-item>
                <ion-label position="floating">Descrição</ion-label>
                <ion-input formControlName="descricao" type="text"></ion-input>
            </ion-item>
            <ion-item>
                <ion-label position="floating">Valor</ion-label>
                <ion-input formControlName="valor" type="number"></ion-input>
            </ion-item>
            <ion-item>
                <ion-label position="floating">Data</ion-label>
                <ion-input formControlName="descricao" type="date"></ion-input>
            </ion-item>
            <ion-button class="button-left">
                <ion-label>Adicionar</ion-label>
            </ion-button>
          </div>        
      </ion-content>
    </ion-page>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  import { IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonLabel, IonInput } from '@ionic/vue';
  import { IonFab } from '@ionic/vue';
  import { add, arrowBack } from 'ionicons/icons';
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
          IonLabel,
          IonInput
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
  
  <style lang="css" scoped>
    .button-left {
      max-width: 200px;
      display: flex;
      float: right;
      margin-right: 15px;
    }

    .margem-topo {
      margin-top: 25px;
    }
  </style>