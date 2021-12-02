<template>
  <div>
    <!-- Cards de negocios -->
    <div class="card" style="width:18rem; background-color:#292A33; border-radius:10px">
      <img class="card-img-top" src="../assets/Celebrare.jpg" alt="Card image cap" style="border-radius:10px">
      <div class="card-body">
        <div class="row justify-content-between">
          <div class="col">
            <h5 class="card-title">Celebráre</h5>
          </div>
          <div class="d-flex col justify-content-end">
            <i class="fas fa-star" style="margin-right:5px; margin-top:3px; color:#FFB13C" />
            <p>4.3</p>
          </div>
        </div>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <div class="row">
          <div class="col d-flex justify-content-end">
            <a href="#" class="btn btn-primary" style="background-color:#3F5AE8" @click="showDetails()">Details</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardService',
  data() {
    return {

    }
  },
  methods: {
    showDetails() {
      this.$router.replace({ path: 'Details' })
    }
  }
}
</script>
