import './style.css'
import '@riotjs/hot-reload'
import { mount } from 'riot'
import registerGlobalComponents from './register-global-components'
import axios from "axios"

axios.defaults.baseURL = "http://localhost:8000"

// register
registerGlobalComponents()

// mount all the global components found in this page
mount('[data-riot-component]')
