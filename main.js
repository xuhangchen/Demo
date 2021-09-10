// --------------------------------- Demo1 - 初识 ---------------------------------------
// const App = {
//     // 定义组件的属性
//     data() {
//         return {
//             title: '超爷',
//             counter: 1,
//             timer: null,
//         };
//     },
//     // 方法 定义组件的行为
//     methods: {
//         onClick() {
//             console.log('chaoye');
//         },

//         onStop() {
//             if (this.timer) {
//                 clearInterval(this.timer);
//             }
//         },

//         onStart() {
//             this.timer = setInterval(() => {
//                 this.counter += 1;
//             }, 1000);
//         },
//     },
// };
// const app = Vue.createApp(App);
// const vm = app.mount('#app');

// const App = {
//     data() {
//         return {
//             myColor: 'red',
//             counter: 1,
//             iniColor: 'red',
//             sigleColor: 'green',
//             timer: null,

//             dataList: [1, 2, 3, 4, 5],

//             projectList: [
//                 {
//                     name: '超爷大肌霸',
//                     id: 9527,
//                     description: '超爷哪里肌肉都很吊',
//                     卧推: 100,
//                 },
//                 {
//                     name: '阿杜大肌霸',
//                     id: 9528,
//                     description: '超爷哪里肌肉都很吊',
//                     卧推: 100,
//                 },
//                 {
//                     name: '蒋总大肌霸',
//                     id: 9529,
//                     description: '超爷哪里肌肉都很吊',
//                     卧推: 100,
//                 },
//             ],
//         };
//     },

//     methods: {
//         getCompuseData() {
//             this.counter = 10000;
//         },
//         addPress(item) {
//             item.卧推 += 10;
//         },
//         onProjectClick(project) {
//             console.log(`点击条目 ${project.name}`);
//         },
//         onItemClick(item) {
//             console.log(`点击条目 ${item}`);
//         },
//         // 启动计数器
//         onStart() {
//             if (!this.timer) {
//                 this.timer = setInterval(() => {
//                     this.counter++;
//                 }, 1000);
//             }
//         },

//         // 停止计数器
//         onStop() {
//             if (this.timer) {
//                 console.log('响应点击');
//                 clearInterval(this.timer);
//                 this.counter = 0;
//                 alert('清空计数器');
//             }
//         },
//     },

//     // watch

//     // 计算属性
//     computed: {
//         // // 双数红色 单数绿色
//         // getColorByMyNumber: {
//         //     get() {
//         //         return this.myNumber % 2 === 0 ? 'color:green' : 'color:red';
//         //     },
//         // },

//         getColorByCount: {
//             get() {
//                 // return this.counter % 2 === 0 ? 'red' : 'green';
//                 return this.counter % 2 === 0 ? 'red' : this.sigleColor;
//             },

//             set(color) {
//                 this.sigleColor = color;
//             },
//         },
//     },
// };
// Vue.createApp(App).mount('#app');

// --------------------------------- Demo2 - 组件渲染 ---------------------------------------
// const Counter = {
//     data() {
//         return {
//             counter: 30,
//         };
//     },

//     methods: {
//         onStart() {
//             if (!this.timer) {
//                 this.timer = setInterval(() => {
//                     if (this.counter > 0) {
//                         this.counter--;
//                     }
//                 }, 300);
//             }
//         },

//         // 停止计数器
//         onStop() {
//             if (this.timer) {
//                 console.log('响应点击');
//                 clearInterval(this.timer);
//                 this.counter = 0;
//                 alert('停止倒计时');
//             }
//         },
//     },
// };

// Vue.createApp(Counter).mount('#counter');
// --------------------------------- Demo3 - 数据绑定 ---------------------------------------

// const dataBind = {
//     data() {
//         return {
//             isShow: false,
//             inputValue: '',
//         };
//     },
//     methods: {
//         setText() {
//             this.inputValue = 'heihei';
//         },
//     },

// template: `
//   <h3>数据绑定 条件控制语句</h3>
//     <div>
//         <div v-if="isShow">{{inputValue}}</div>

//         <input v-model="inputValue" />

//         <br />
//         <button style="margin-top: 10px; color: red" @click="isShow = !isShow">控制显示隐藏</button>
//         <button style="margin-top: 10px; color: green" @click="setText()">改变数据</button>
//     </div>`,
// };

// Vue.createApp(dataBind).mount('#input');

// --------------------------------- Demo4 - 组件渲染 & 生命周期 ---------------------------------------

// const todoItem = {
//     template: `
//         <h3>组件渲染 & 生命周期</h3>
//         <button @click="getListByData()">获取网络数据</button>
//         <button @click="destory()">销毁组件</button>
//         <div>{{title}}</div>
//         <button @click="update()">更新一下数据</button>
//         <div v-for="item in dataList"><todo-item v-bind:todo="item" :key="item.id"></todo-item></div>
//             `,
//     data() {
//         return {
//             id: String,
//             title: '',
//             avatar: String,
//             description: String,

//             dataList: [],

//             createdData: 'was created',
//         };
//     },

//     methods: {
//         update() {
//             this.title = 'UPDATE title';
//         },
//         getListByData() {
//             axios
//                 .get('http://localhost:30001/todoList')
//                 .then(result => {
//                     this.dataList = result.data;
//                     console.log('result ===>', result);
//                 })
//                 .catch(err => {
//                     console.log(err);
//                 });
//         },

//         destory() {
//             todoList.unmount();
//         },
//     },

//     // mounted() {
//     //     this.getListByData();
//     // },

//     // 创建
//     beforeCreate() {
//         console.log('1  ---  beforeCreate ===>', this.createdData);
//     },

//     created() {
//         console.log('2  ---  created ===>', this.createdData);
//     },

//     beforeMount() {
//         console.log('3  ---  beforemount ===>', this.createdData);
//     },
//     mounted() {
//         console.log('4  ---  mounted ===>', this.createdData);
//     },

//     // 销毁前
//     beforeUnmount() {
//         console.log('5  ---  beforUnmount ===>', this.createdData);
//     },

//     // 销毁后
//     unmounted() {
//         console.log('6  ---  unmounted ===>', this.createdData);
//     },

//     beforeUpdate() {
//         console.log('7  ---  beforeUptate ===>', this.createdData);
//     },
//     updated() {
//         console.log('8  ---  updated ===>', this.createdData);
//     },
// };

// const todoList = Vue.createApp(todoItem);

// todoList.component('todoItem', {
//     props: ['todo'],
//     template: `<li>{{todo.title}}</li>`,
// });

// const vm = todoList.mount('#todoList');

// console.log(vm.$data);

// --------------------------------- Demo5 - 组件方法 ---------------------------------------

// const dataProperty = Vue.createApp({
//     // 数据
//     data() {
//         return {
//             myNumber: 1,
//             question: '',
//             answer: 'Questions usually contain a question mark. ;-)',
//         };
//     },
//     // 方法
//     methods: {
//         onChange(event) {
//             if (event.target.value && event.target.value.indexOf('?') > -1) {
//                 console.log('发送请求', event.target.value);
//                 this.getAnswer(event.target.value);
//             }
//         },
//         increment() {
//             return (this.myNumber += 1);
//         },

//         getAnswer(res) {
//             console.log(res);
//             this.answer = 'Think...';
//             axios
//                 .get('https://yesno.wtf/api')
//                 .then(response => {
//                     console.log(response);
//                     this.answer = response.data;
//                 })
//                 .catch(err => {
//                     this.answer = '出错了 : ' + err;
//                 });
//         },
//     },

//     // 监听属性
//     watch: {
//         // question(newQuestion, oldQuestion) {
//         // console.log(`newQuestion ===> ${newQuestion}`);
//         // console.log(`oldQuestion ===> ${oldQuestion}`);
//         // if (newQuestion.indexOf('?') > -1) {
//         //     this.getAnswer();
//         // }
//         // },

//         question(newData, oldData) {
//             this.answer = 'waiting ...';
//             if (newData && newData.indexOf('?') > -1) {
//                 // 发送请求更新数据
//                 axios
//                     .get('https://yesno.wtf/api')
//                     .then(res => {
//                         this.answer = res.data;
//                     })
//                     .catch(err => {
//                         alert(err);
//                     });
//             }
//         },
//     },

//     // 计算属性
//     computed: {
//         // 双数红色 单数绿色
//         getColorByMyNumber() {
//             return this.myNumber % 2 === 0 ? 'red' : 'green';
//         },
//     },

//     // 模板代码
//     template: `
//     <h3>计算属性 & 监听属性</h3>
//     <span title='title'></span>
//     <div :style="'color:'+getColorByMyNumber">myNumber:{{myNumber}}</div>
//     <button @click='increment'>increment</button>

//      <p>
//         Ask a yes/no question:
//         <input type="text" v-model="question" />;
//      </p>
//      <p>{{ answer }}</p>
//     `,
// });

// // <input type="text" v-on:input="onChange($event)" />;
// //
// const vm = dataProperty.mount('#dataProperty');
// console.log(vm.increment());

// --------------------------------- Demo6父子组件传值组件 ---------------------------------------

// const grandSonComponent = {
//     template: `
//     <div>孙子  --->  {{title}}</div>
//     `,
//     // props: { title: { type: String, default: '默认值' } },
//     props: ['title'],
//     data() {
//         return {};
//     },
// };

// const sonComponent = {
//     template: `
//     <div :style="color">儿子</div>
//     <button @click="$emit('sonevent', toFatherMessage)">像root组件发送事件</button>
//     <grandSon :title="toSonTitle"></grandSon>

//     `,

//     emits: ['sonevent'],
//     props: ['color'],
//     data() {
//         return {
//             toFatherMessage: '儿子的数据',
//             toSonTitle: '父亲给儿子起名字  叫社会王',
//             title: 'title',
//         };
//     },

//     methods: {
//         sendMessage() {
//             this.$emit('sonevent', this.toFatherMessage);
//         },
//     },
// };

// const rootComponent = {
//     template: `
//     <div>爷爷</div>
//     <son @sonevent='onsonevent' color='color:green'></son>
//     `,
//     data() {
//         return {
//             title: 'title',
//         };
//     },

//     methods: {
//         onsonevent(str) {
//             console.log('儿子组件发来数据 ---> ' + str);
//         },
//     },
// };

const rootComponent = {
    data() {
        return {
            data: {
                name: '爸爸给你的名字',
                id: '9527',
            },
        };
    },

    methods: {
        onSonClick(data) {
            console.log('父组件响应事件  ---> 回调方法触发');
            console.log('父组件收到数据 ---> ' + data);
        },
    },

    template: `
        <div>这是根组件</div>
        <son-component  @sonevent="onSonClick($event)" v-bind:data="data"></son-component>
        
    `,
};

const sonComponent = {
    emits: ['sonevent'],
    // props: ['title'],
    props: { data: { type: Object, default: {} } },
    data() {
        return {};
    },

    methods: {
        onClick(data) {
            console.log('子组件事件被出发   --->  像父组件传递事件  $emit()');
            this.$emit('sonevent', data);
        },
    },
    template: `
       <div >
       
        <p style="color:red">{{data.name+'-----'+data.id}}</p>
            <button @click="onClick('子组件想传递的数据9527')">根根组件发送事件</button>
        </div>
        
    `,
};

const grandSonComponent = {
    data() {
        return {};
    },

    template: `
        <p style="color:gray">我是孙子</p>
    `,
};

const root = Vue.createApp(rootComponent);

root.component('sonComponent', sonComponent);
root.component('grandSon', grandSonComponent);

root.mount('#TransferData');

// const root = Vue.createApp(rootComponent);
// root.component('son', sonComponent);
// root.component('grandSon', grandSonComponent);
// const vm = root.mount('#TransferData');

//---------------------------------------------------- PromisDemo --------------------------------------------------------------
// 1 创建组件对象
// const promiseComponent = {
//     data() {
//         return {
//             getResponse: [],
//             postResponse: '',
//         };
//     },
//     template: `
//     <div style="margin-top:20px">
//             <li v-for="item in getResponse">{{item.name}}</li>

//         <div>GET Response: {{getResponse}}</div>
//         <button @click="getRequest()">发送GET请求</button>
//     </div>
//         <br>

//     <div style="margin-top:20px">
//         <div>POST Response: {{postResponse}}</div>
//         <button @click="postData()">发送POST请求</button>
//     </div>

//     <button @click="promiseTest()">测试promise</button>
//     `,

//     methods: {
//         getRequest() {
//             this.getResponse = 'waiting ... ';
//             axios.get('http://localhost:30001/todoList').then(
//                 response => {
//                     if (response.status === 200) {
//                         setTimeout(() => {
//                             this.getResponse = response.data;
//                         }, 1000);
//                     }
//                 },
//                 reject => {
//                     console.log(`response : ${reject}`);
//                 }
//             );
//         },

//         postData() {
//             axios
//                 .post('http://localhost:30001/todoList', {
//                     id: 5555,
//                     title: '健身怎么吃???',
//                     avatar: 'https://camo.githubusercontent.com/1d440f4ffad2f6a8df0e532493cd225964bc8624cb0956171be0717dc4fbce64/68747470733a2f2f7261772e6769746875622e636f6d2f616c7272612f62726f777365722d6c6f676f732f6d61737465722f7372632f6368726f6d652f6368726f6d655f34387834382e706e67',
//                     description: '自定义',
//                 })
//                 .then(
//                     response => {
//                         // this.postResponse = response;
//                         console.log(response);
//                     },
//                     rej => {
//                         console.log('rej' + rej);
//                     }
//                 );
//         },

//         promiseTest() {
//             this.fun1()
//                 .then(response => {
//                     console.log('成功的回调' + response);
//                 })
//                 .catch(err => {
//                     console.info('成功的回调' + err);
//                 });
//         },

//         fun1() {
//             return new Promise((resolve, reject) => {
//                 setTimeout(() => {
//                     resolve('成功了');
//                 }, 1500);
//             });
//         },
//     },
// };

// // 2. 调用API创建组件实例
// const app = Vue.createApp(promiseComponent);

// // 3. 挂载组件
// app.mount('#promiseDemo');
