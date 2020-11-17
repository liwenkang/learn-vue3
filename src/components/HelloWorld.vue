<template>
  <h1>{{ msg }}</h1>
  <button @click="count++">count is: {{ count }}</button>
  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
  <div @click="test1">测试1</div>
  <div @click="test2">测试2</div>
  <div @click="test3">测试3</div>
  <div @click="test4">测试4</div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      count: 0
    };
  },
  methods: {
    async test1() {
      const test = axios.get('/api/mock/ded924e8-8919-48dd-b697-99693d32fd8b/test')
          .then((response) => {
            axios.get('/api/mock/ded924e8-8919-48dd-b697-99693d32fd8b/test');
          });
      console.log('test1', test); // Promise <pending>
      await axios.get('/api/mock/ded924e8-8919-48dd-b697-99693d32fd8b/test');
    },

    async test2() {
      const test = await axios.get('/api/mock/ded924e8-8919-48dd-b697-99693d32fd8b/test')
          .then(response => {
            axios.get('/api/mock/ded924e8-8919-48dd-b697-99693d32fd8b/test');
          });
      console.log('test2', test); // undefined
      await axios.get('/api/mock/ded924e8-8919-48dd-b697-99693d32fd8b/test');
    },

    async test3() {
      const test = axios.get('/api/mock/ded924e8-8919-48dd-b697-99693d32fd8b/test')
          .then(async (response) => {
            await test.then(async response => {
              await axios.get('/api/mock/ded924e8-8919-48dd-b697-99693d32fd8b/test');
            })
          });
      console.log('test3', test); // Promise <pending>
      await axios.get('/api/mock/ded924e8-8919-48dd-b697-99693d32fd8b/test');
    },

    async test4() {
      const test = await axios.get('/api/mock/ded924e8-8919-48dd-b697-99693d32fd8b/test')
          .then(async (response) => {
            await axios.get('/api/mock/ded924e8-8919-48dd-b697-99693d32fd8b/test');
          });
      console.log('test4', test); // undefined
    },
  }
};
</script>
