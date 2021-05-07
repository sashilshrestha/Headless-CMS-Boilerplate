<template>
    <div class="container">
        <div class="row">
            <template v-for="post in posts" :key="post.id">
                <div class="col-md-4 card mb-5">
                    <img
                        v-if="post.better_featured_image"
                        :src="
                            post.better_featured_image.media_details.sizes.large
                                .source_url
                        "
                        class="card-img-top"
                        alt="..."
                    />
                    <div class="card-body">
                        <h5 class="card-title">{{ post.title.rendered }}</h5>
                        <p class="card-text" v-html="post.title.rendered"></p>
                        <a class="btn btn-primary">Button</a>
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Posts',
    components: {},
    created() {
        this.getPosts();
    },
    data() {
        return {
            posts: [],
            api: 'http://localhost/Vue/src/admin/wp-json/wp/v2',
        };
    },
    methods: {
        getPosts() {
            axios
                .get(`${this.api}/posts`)
                .then((response) => {
                    console.log(response.data);
                    this.posts = response.data;
                })
                .catch((error) => {
                    console.log(error);
                    this.errorMsg = 'Error';
                });
        },
    },
};
</script>

<style lang="scss" scoped>
img {
    height: 15rem;
    object-fit: cover;
}
.card {
    margin: 1rem;
    padding: 0;
}
</style>
