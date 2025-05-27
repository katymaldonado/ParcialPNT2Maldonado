<template>
    <section>
        <div class="card-header">
            <h2>Transcripcion</h2>
        </div>

        <form>
            <input type="text" class="form-control" v-model="palabraIngresada"
            placeholder="Ingresar Texto...">

        </form>

        <p>Cantidad de Caracteres = {{ palabraIngresada.length}}</p>
        <br>
        <hr>

        <!-- Tabla para representar los datos ingresados -->
        <h2>Lista de Transcripciones</h2>
        <ol>
            <li>{{ codificacion() }}</li>
            <li>{{ palabraMayuscula() }}</li>
            <li>{{palabra}}</li>
            <li>{{ palabraMayusMinis() }}</li>
            <li>{{ palabraMinisMayus() }}</li>
        </ol>
    </section>
</template>

<script>
export default {
  name: 'transcripcion',
  props: [],
  mounted() {

  },

  data() {
    return {
        palabraIngresada: '',
        
    }
    },

    
  methods: {

    codificacion(){
        let carateres = this.palabra
        let palabraNueva =''
        for (let i = 0; i < carateres.length; i++) {
            if (carateres[i] == "a") {
                palabraNueva += 'u'
            }
            else if (carateres[i] == "e") {
                palabraNueva +=  "o"
            }
            else if (carateres[i] == "o") {
                palabraNueva += "e"
            }
            else if (carateres[i] == "a") {
                palabraNueva +=  "u"
            }
            else{
                palabraNueva += carateres[i]
            }

        }
        return palabraNueva
    },

    palabraMayuscula(){
        return this.palabra.toUpperCase()
    },
    palabraMayusMinis(){
        let carateres = this.palabra
        let palabraNueva = ""
        for (let i = 0; i < carateres.length; i++) {
            if (i == 0 || i%2 == 0) {
                palabraNueva += carateres[i].toUpperCase()
            }else{
                palabraNueva += carateres[i]
            }
        }
        return palabraNueva
    },
    palabraMinisMayus(){
        let carateres = this.palabra
        let palabraNueva = ""
        for (let i = 0; i < carateres.length; i++) {
            if (i == 0 || i%2 == 0) {
                palabraNueva += carateres[i]
            }else{
                palabraNueva += carateres[i].toUpperCase()
            }
        }
        return palabraNueva
    }
  },

  computed: {
    palabra(){
        return this.palabraIngresada.toLowerCase()
    }
  }
}
</script>