
const app = Vue.createApp({

    data() {
        return {
            showAge: true,
            title: 'Harry Potter',
            age: 25,
            x: 0,
            y: 0,
            books: [
                { title: 'Apple Tree', author: 'Angela', img: 'assets/1.jpg', isFav: true },
                { title: 'Banana', author: 'Benny', img: 'assets/2.jpg', isFav: false },
                { title: 'Orange Juice', author: 'Cindy', img: 'assets/3.jpg', isFav: true }
            ],
            myurl: "https://www.google.com/",
        }
    },
    methods: {
        changeTitle(title) {
            this.title = title;
        },
        toggleAge() {
            this.showAge = !this.showAge;
        },
        handleEvent(e, data) {
            console.log(e, e.type);
            if (data) {
                console.log(data);
            }
        },
        handleMousemove(e) {
            this.x = e.offsetX;
            this.y = e.offsetY;
        },
        toggleFav(book) {
            book.isFav = !book.isFav;
        }
    },
    computed: {
        filterBooks() {
            return this.books.filter((book) => book.isFav)
        }
    }
})

app.mount('#app')