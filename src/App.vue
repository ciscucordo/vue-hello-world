<template>
  <div id="app"> 
    <table>
      <tr>
        <td>
          <pending></pending>
        </td>
      </tr>
	  <tr>
        <td>
          <done></done>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
  import Pending from './components/Pending';
  import Done from './components/Done';

  export default {
    name: 'app',
    components: {
      Pending,
      Done,
    },
  };
</script>
