'use strict'

import axios from 'axios';

export class PixabayAPI {
    static BASE_URL = 'https://pixabay.com/api/';
    static API_KEY = '32902525-5659279b2e410ad3de3aa6bbd';

    constructor() {
        this.page = 1;
        this.query = null;
        this.per_page = 40;
    }

    async fetchImagePixabay() {
        const searchParams = {
            params: {
                key: PixabayAPI.API_KEY,
                q: this.query,
                page: this.page,
                per_page: 40,
                image_type: 'photo',
                orientation: 'horizontal',
                safesearch: true,
            }
        };

        return await axios.get(`${PixabayAPI.BASE_URL}`, searchParams);
    }
}
