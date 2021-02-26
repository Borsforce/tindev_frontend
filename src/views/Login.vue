<template>
  <div class="home"></div>

  <Form>
    <Input />
    <Input />
  </Form>
</template>

<script>
import { Form, Input } from '../components';

export default {
  name: 'Login',
  components: {
    Form,
    Input,
  },
};
</script>
