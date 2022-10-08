<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Inicio base</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Ionic Base</ion-title>
        </ion-toolbar>
      </ion-header>
        <div class="centraliza">
            Bem vindo ao app base ionic da tecinova. 2022
        </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent } from 'vue';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';


export default defineComponent({
    name: "Index-land",
    components: {
        IonButtons,
        IonContent,
        IonHeader,
        IonMenuButton,
        IonPage,
        IonTitle,
        IonToolbar,
    }
})
</script>

<style lang="css" scoped>

  ion-content{
    --background: var(--ion-background-color, #eb445a);
  }
    .centraliza {
        padding: 20px;
        margin-top: 20%;
        margin-left: 10%;
        margin-right: 10%;
        color: aliceblue;
        min-height: 100px;
    }

</style>