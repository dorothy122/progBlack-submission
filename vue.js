const app = Vue.createApp({
            data() {
                return {
                    message: "Hello World!",
                    
                    vueClass: "pinkBG",

                    size: 1.5,

                    bgVal: 200,

                    isImportant: true,

                    className: "impClass",

                    InStock: true,

                    count: 1,

                    text: 'I want pizza',

                    text2: "hello",

                    showDiv: false,

                    manyFoods: [
                        'Burrito',
                        'Salad',
                        'Cake'
                    ],

                    manyFoodsArray: [
                        {name: 'Burrito', url: 'images/img_burrito.svg'},
                        {name: 'Salad', url: 'images/img_salad.svg'},
                        {name: 'Cake', url: 'images/img_cake.svg'}
                    ],

                    count: 0,

                    lightOn:false,

                    inpCount: 0,

                    colorVal: 50,

                    imgUrl: 'images/img_salad.svg',

                    text1: '',
                    text2: '',

                    xPos: 0,
                    yPos: 0,

                    mooseCount: 0,

                    msgAndId: '',

                    keyValue: '',

                    bgColor: 0,
                    bgColorCtrl: 0,
                    bgColorRight: 0,

                    itemName: null,
                    itemNumber: null,
                    important:false,
                    shoppingList: [
                        { name: 'Tomatoes', number: 5, important: false, found: false }
                    ],

                    inpText: 'Change this text',

                    opacityVal: 0.8,

                    isYellow: true,

                    chbxVal: false,

                    rangeVal: 70,

                    xDiff: 0,

                    inpAddress: '',
                    feedbackText: '',
                    myClass: 'invalid',

                }
            },

        // Template replaces content of 'app' section with contents of th template section
            // template: 

            //    `<h1>{{ message }}</h1>
            //    <p>Line of code</p>`,
            
            
            watch: {

                rangeVal(val) {
                    if (val>20 && val<60) {
                        if (val<40) {
                            this.rangeVal = 20;
                        }
                        else {
                            this.rangeVal = 60;
                        }
                    }
                },

                xPos(newVal, oldVal) {
                    this.xDiff = newVal-oldVal
                },

                inpAddress(newVal, oldVal) {
                    if(!newVal.includes('@')) {
                        this.feedbackText = 'The email address is NOT valid';
                        this.myClass = 'invalid';
                    }
                    else if(!oldVal.includes('@') && newVal.includes('@') ) {
                        this.feedbackText = 'Perfect! You fixed it!';
                        this.myClass = 'valid';
                    }
                    else {
                        this.feedbackText = 'The e-mail address is valid :)';
                        this.myClass = 'valid'
                    }
                }

            },



            computed: {
                isImportant() {
                    if(this.chbxVal) {
                        return 'yes'
                    }
                    else {
                        return 'no'
                    }
                }




            },






            methods: {
                writeText1() {
                    this.text1 = "Hello World!"
                },

                mousePos(event) {
                    this.xPos = event.offsetX
                    this.yPos = event.offsetY
                },

                writeText2() {
                    this.text2 = event.target.value
                },

                addMoose(number) {
                    this.mooseCount += number
                },

                myMethod(e,msg) {
                    this.msgAndId = msg + ', '
                    this.msgAndId += e.target.id
                },

                createAlert() {
                    alert("Alert created from button click")
                },


                getKey(evt) {
                    this.keyValue = evt.key
                    console.log(evt.key)
                },

                createAlertS() {
                    alert("You pressed the 'S' key!")
                },

                createAlertSCtrl() {
                    alert("You pressed the 'S' and 'Ctrl' keys")
                },

                changeColor() {
                    this.bgColor += 50
                },

                changeColorCtrl() {
                    this.bgColorCtrl += 50
                },

                changeColorRight() {
                    this.bgColorRight += 50
                },

                addItem() {
                    let item = {
                        name: this.itemName,
                        number: this.itemNumber,
                        important: this.itemImportant,
                        found: false
                    }

                    this.shoppingList.push(item);
                    this.itemName = null
                    this.itemNumber = null
                    this.itemImportant = false
                },


                updatePos(evt) {
                    this.xPos = evt.offsetX
                }

            }
        })

        app.mount("#app")