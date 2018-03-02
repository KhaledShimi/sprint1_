<template>
  <div>
    <!-- <div class="row">
      <div class="col-md-12">
        <div class="card">
          <paper-table :title="table1.title" :sub-title="table1.subTitle" :data="items.data" :columns="table1.columns">



          </paper-table>

            <input type="text"> Product Name <br>
            <input type="text"> Price <br>


          <button v-on: click = "AddToApi"> add product</button>
        </div>
      </div> -->
    <table id="firstTable" style=  width:100%>
      <thead style= "background-color: lightblue">
        <tr>
          <th>Name</th>
          <th>ID</th>
          <th>sellerID</th>
          <th>CreatedAt</th>
          <th>price</th>
          <th>UpdatedAt</th>
          <th>delete</th>
        </tr>
      </thead>
      <tbody style= "background-color: lightblue">
        <tr v-for="row in rows.data">
          <td>{{row.name}}</td>
          <td>{{row._id}}</td>
          <td>{{row.sellerID}}</td>
          <td>{{row.createdAt}}</td>
          <td>{{row.price}}</td>
          <td>{{row.updatedAt}}</td>
          <td><input type="checkbox"></td>
        </tr>
      </tbody>
    </table>
    <br/>
    ID of product to be deleted
    <input type="text" v-model="delID"> </input>
    <button v-on:click="deleteP"> delete product</button>
    </br>
    </br>
     Name of new product
    <input type="text" v-model="name"> </input>
     price of new product
    <input type="text" v-model="price"> </input>
    <br/>
    <button v-on:click="Addp"> create product</button>
    </br>
    </br>
    ID of product to be updated
   <input type="text" v-model="updatedID"> </input>
    Updated name
   <input type="text" v-model="updatedName"> </input>
    Updated price
   <input type="text" v-model="updatedPrice"> </input>
   </br>
   <button v-on:click="updateP"> update product</button>
  </div>

</template>
<script>

import axios from 'axios'
import PaperTable from 'components/UIComponents/PaperTable.vue'
const tableColumns = ['CreatedAt', 'Id', 'name', 'price', 'UpdatedAt']
const tableData = [{
  id: 1,
  name: 'Dakota Rice',
  price: '$36.738',
  createdat: '15/2/2018',
  updatedat: '16/2/2018',
  sellername: 'Mo'
},
{
  id: 2,
  name: 'Minerva Hooper',
  price: '$36.738',
  createdat: '15/2/2018',
  updatedat: '16/2/2018',
  sellername: 'Mo'
}]
export default {
  components: {
    PaperTable
  },
  data () {
    return {
      table1: {
        title: 'Stripped Table',
        subTitle: 'Here is a subtitle for this table',
        columns: [...tableColumns],
        data: [...tableData]
      },
      table2: {
        title: 'Table on Plain Background',
        subTitle: 'Here is a subtitle for this table',
        columns: [...tableColumns],
        data: [...tableData]
      },
      rows: [],
      name: '',
      price: '',
      delID: '',
      updatedID: '',
      updatedName: '',
      updatedPrice: ''
    }
  },
  created () {
    this.getP()
  },
  methods: {
    // AddToApi () {
    //   let newtable = {
    //     tablecolumns: this.table1.tableColumns,
    //     tabledata: this.table1.tableData
    //   }
    //   axios.get('http://localhost:3000/User')
    // .then((response) => {
    //   console.log(response)
    // })
    // .catch((error) => {
    //   console.log(error)
    // })
    // },
    getP () {
      axios.get('http://localhost:3000/api/product/getProducts')
      .then((response) => {
        this.rows = response.data
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
    },
    deleteP () {
      axios.delete('http://localhost:3000/api/product/deleteProduct/' + this.delID)
      .then((response) => {
        window.location.reload()
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
    },
    Addp () {
      axios.post('http://localhost:3000/api/product/createProduct', {
        name: this.name,
        price: this.price
      })
      .then((response) => {
        console.log(response)
        // window.location.reload()
      })
        .catch((error) => {
          console.log(error)
        })
    },
    updateP () {
      axios.patch('http://localhost:3000/api/product/updateProduct/' + this.updatedID, {
        name: this.updatedName,
        price: this.updatedPrice
      })
      .then((response) => {
        console.log(response)
        // window.location.reload()
      })
      .catch((error) => {
        console.log(error)
      })
    }
  }
}

</script>
<style>
/* .firstTable{
  padding-top: 50px;
  padding-right: 30px;
  padding-bottom: 50px;
  padding-left: 80px;
  width:100%
} */
</style>
