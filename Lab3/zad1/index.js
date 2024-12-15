
// Your Vue code here....

const app = Vue.createApp({
    data(){
        return{
            password: ''
        };
    },
    computed: {
        message(){
            return this.password;
        },
        has_uppercase(){
            return /[A-Z]/.test(this.password);
        },
        has_lowercase(){
            return /[a-z]/.test(this.password);
        },
        has_number(){
            return /\d/.test(this.password);
        },
        has_special(){
            return /[!@#$%^&*(),.?":{}|<>]/.test(this.password);
        }
    }
});

app.mount('#app');