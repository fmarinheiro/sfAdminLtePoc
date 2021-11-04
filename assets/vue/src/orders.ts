import { createApp } from 'vue'
import ExampleMain from '@/components/ExampleMain.vue'

/**
* Create a fresh Vue Application instance
*/
const app = createApp(ExampleMain )
app.mount('#orders')

