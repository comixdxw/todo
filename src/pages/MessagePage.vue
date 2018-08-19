<template>
  <div class='ui centered card'>
    <div class='content'>
      <div class='header'>
        My Messages
      </div>
      <div class='content'>
        <div class='ui form'>
          <div class='field'>
            <textarea cols="20" rows="10" v-model="msgs" defaultValue=""/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MessagePage',
  data() {
    return {
      msgs: '',
      ws: undefined,
    };
  },
  methods: {
    updateMsg() {
      if (this.ws === undefined) {
        this.ws = new WebSocket('ws://localhost:3000/notify');
        this.ws.onopen = () => {
          // Web Socket 已连接上，使用 send() 方法发送数据
          console.log('数据发送中...');
          // ws.send('Holle');
          console.log('数据发送完成');
        };
        this.ws.onmessage = (evt) => {
          console.log('数据已接收...' + evt.data);
          this.msgs = this.msgs + evt.data + '\n';
        };
        this.ws.onclose = () => {
          // 关闭 websocket
          console.log('连接已关闭...');
        };
      }
    },
  },
  beforeRouteEnter(to, from, next) {
    console.log('start get message');
    next((vm) => {
      console.log('vm is ' + vm);
      vm.updateMsg();
    });
  },
};
</script>

<style scoped>

</style>
