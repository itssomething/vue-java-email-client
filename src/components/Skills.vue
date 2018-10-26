<template>
  <div class="hello">
    <h2>Just a random email app</h2>
    <!-- {{ name }} -->
    <br>
    <div>
      <div v-if="loading">
        <img src="../assets/double-ring.gif" alt="Smiley face">
        <!-- <object data="../assets/double-ring.svg" type="image/svg+xml"></object> -->
        <Loading/>
      </div>

      <div v-if="!loading">
        <div class="container">
          <div class="row email-row text-left">
            <div class="col-md-3">
              <b>From</b>
            </div>
            <div class="col-md-9">
              <b>Subject</b>
            </div>
          </div>
          <div class="row email-row text-left" v-for="(email, index) in emails" :key="index">
            <div class="col-md-3">
              {{ removeEmailString(email.from) }}
            </div>
            <div class="col-md-9">
              {{ email.subject }}
            </div>
          </div>
        </div>
      </div>
    </div>
      <!-- end of div -->
  </div>
</template>

<script>
import Loading from './Loading.vue'
import axios from 'axios'

export default {
  name: 'Skills',
  data () {
    return {
      name: 'A random string',
      emails: null,
      loading: false
    }
  },
  mounted () {
    this.loading = true
    axios
      .get('http://localhost:8080/')
      .then(response => {
        this.emails = response.data
        this.loading = false
      })

  },
  methods: {
    removeEmailString: function (email) {
      let temp = email.split(' ');
      temp.splice(-1,1);
      temp = temp.join(' ');
      return temp
      // return temp[0];
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* @import '/node_modules/bootstrap/scss/bootstrap.scss'; */

h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.email-row {
  box-sizing: border-box;
  padding: 10px 0;
  /* border: 1px black solid; */
  font-size: .875rem;
  padding-top: 10px;
  -webkit-box-shadow: inset 0 -1px 0 0 rgba(100,121,143,0.122);
  box-shadow: inset 0 -1px 0 0 rgba(100,121,143,0.122);
  display: -webkit-box;
  display: -moz-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  position: relative;
  background: rgba(242,245,245,0.8);
  color: #202124;
  cursor: pointer;
}
/* .col-md-3 {
  min-width: 200px;
} */
</style>
