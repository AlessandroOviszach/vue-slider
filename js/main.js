
const app = new Vue(
    {
        el: '#app',
        data: {
            slides: [
                {
                    image: 'img/01.jpg',
                    title: 'Svezia',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
                },
                {
                    image: 'img/02.jpg',
                    title: 'Svizzera',
                    text: 'Lorem ipsum.',
                },
                {
                    image: 'img/03.jpg',
                    title: 'Gran Bretagna',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
                },
                {
                    image: 'img/04.jpg',
                    title: 'Germania',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
                },
                {
                    image: 'img/05.jpg',
                    title: 'Maldive',
                    text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
                },
            ],
            slide_active: 0,
        },
        created() {
            setInterval(() => {
                this.next_click()
            }, 3000);
        },
        methods: {
            next_click() {
                this.slide_active++;

                if (this.slide_active > this.slides.length - 1) {
                    this.slide_active = 0;
                }
            },
            prev_click() {
                this.slide_active--;
                
                if (this.slide_active < 0) {
                    this.slide_active = this.slides.length - 1;
                }
            },
            thumb_click(index) {
                this.slide_active = index;
            }
        },
    }
);

