import exampleApp from './example.vue';
$(document).ready(function(){
    new Vue({
        el: '#example1-app',
        template: '<exampleApp/>',
        components: {exampleApp}
    });
});
