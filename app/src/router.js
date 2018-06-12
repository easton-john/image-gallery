import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import About from './components/About.vue';
import Albums from './components/Albums.vue';
import AlbumDetail from './components/AlbumDetail.vue';
import ListViewer from './components/ListViewer.vue';
import NewImage from './components/NewImage.vue';
import GalleryViewer from './components/GalleryViewer';
import ThumbnailViewer from './components/ThumbnailViewer';


export default new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/albums', component: Albums },
    {
      path: '/albums/:id',
      component: AlbumDetail,
      children: [
        { path: 'list', component: ListViewer },
        { path: 'gallery', component: GalleryViewer },
        { path: 'thumbnail', component: ThumbnailViewer },
        { path: 'new', component: NewImage },

        // Add 'new' component here
        { path: '', redirect: 'list' }
      ]
    },
    { path: '*', redirect: '/' }
  ]
});

