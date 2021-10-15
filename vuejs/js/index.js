let app1= new Vue({
    el:"#app1",
    data: {
        message: "Hello World"
    }
})

let app2= new Vue({
    el:"#app2",
    data: {
        message: "Hello World" + new Date().toLocaleString(),
        linkUrl: "https://bbc.in/2LAnJs8",
        linkText: "Google down"
    }
})

let app3= new Vue({
    el:"#app3",
    data: {
    showIt:true
    // showIt:false
    // hid element
    },
    methods: {
        toggleMsg:function(){
            if(this.showIt) {
                this.showIt = false
            } else {
                this.showIt = true
            }
        }
    }
})


let app4 = new Vue ({
    el:"#app4",
    data: {
        theList: [
            { text: "Learn HTML"},
            { text: "Learn css"},
            { text: "Learn java"}
        ]
    }
})

let app5 = new Vue ({
    el:"#app5",
    data: {
        mes: "kfc",
        groceryList: [
            {
                id:1,
                desc:"Rocket Salad"
            },
            {
                id:2,
                desc:"kfc"
            },
            {
                id:3,
                desc:"mcd"
            },
            {
                id:4,
                desc:"pizza"
            }
        ],
        orderList: [
            {
                id:1,
                desc:"nasi lemak"
            },
            {
                id:2,
                desc:"nasi kerabu"
            },
            {
                id:3,
                desc:"nasi babi"
            },
            {
                id:4,
                desc:"nasi lembu"
            }
        ]
    }
})



