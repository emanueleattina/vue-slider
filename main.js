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
    methods: {
        avanti: function() {
            if(this.ind < this.arrayImages.length - 1) {
                this.ind++;
            } else {
                this.ind = 0;
            }
        },
        indietro: function() {
            if(this.ind > 0) {
                this.ind--;
            } else {
                this.ind = this.arrayImages.length - 1;
            }
        },
        questoDot: function(ind) {
            this.ind = ind;
        },
        timer: function () {
            setTimeout(function () {
                this.avanti();
            }, 3000);
        }
    }
})