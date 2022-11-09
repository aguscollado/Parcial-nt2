<template>
  <section class="src-componentes-ingresos">
    <div class="jumbotron">
      <br />
      <h2>Completar gasto</h2>
      <br />

      <vue-form :state="formState" @submit.prevent="enviar()">
        <validate tag="div">
          <label for="nombre">Nombre</label>
          <input
            id="nombre"
            class="form-control"
            type="text"
            v-model.trim="formData.nombre"
            required
            name="nombre"
            autocomplete="off"
          />
          
          <!-- cartel de validación -->
          <field-messages name="nombre" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">
              Campo requerido
            </div>
          </field-messages>
        </validate>

        <br />
        <!--  <label for="nombre">Nombre de quien hizo el gasto</label>
        <input
          id="nombre"
          class="form-control"
          type="text"
          required
          name="nombre"
          autocomplete="off"
        />

        <br /> -->

        <label for="descripcionGasto">Descripcion del gasto</label>
        <input
          id="descripcionGasto"
          class="form-control"
          type="text"
          required
          name="descripcionGasto"
          autocomplete="off"
        />

        <br />

        <label for="importeGasto">Importe gastado</label>
        <input
          id="importeGasto"
          class="form-control"
          type="number"
          required
          name="importeGasto"
          autocomplete="off"
        />

        <button class="btn btn-success my-3">Enviar</button>
      </vue-form>
    </div>
  </section>
</template>

<script>
export default {
  name: "src-componentes-ingresos",
  props: [],
  mounted() {},
  data() {
    return {
      formState: {},
      formData: this.getInitialData(),
      nombreMinLength: 3,
      edadMin: 18,
      edadMax: 120,
    };
  },
  methods: {
    getInitialData() {
      return {
        nombre: null,
        descripcionDelGasto: null,
        importeGastado: null,
      };
    },
    enviar() {
      console.log({ ...this.formData });

      this.formData = this.getInitialData();
      this.formState._reset();
    },
  },
  computed: {},
};
</script>

<style scoped lang="css">
.jumbotron {
  background-color: purple;
  color: white;
}

hr {
  background-color: #bbb;
}

pre {
  color: white;
}
</style>
