var app = new Vue ({
    el: '#root',
    data: {
        ind: 0,
        cont:0,
        arrayImages: [
            'imgs/image-1.jpg',
            'imgs/image-2.jpg',
            'imgs/image-3.jpg',
            'imgs/image-4.jpg',
        ]
    },
    created() {
        setInterval(() => {
            this.avanti();
        }, 3000);
    },
    methods: {
        avanti() {
            if(this.ind < this.arrayImages.length - 1) {
                this.ind++;
            } else {
                this.ind = 0;
            }
        },
        indietro() {
            if(this.ind > 0) {
                this.ind--;
            } else {
                this.ind = this.arrayImages.length - 1;
            }
        },
        questoDot(ind) {
            this.ind = ind;
        },
    }
});