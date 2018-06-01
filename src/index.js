import Vue from 'vue'
import ThFormComponent from './components/th-form.component.vue'

export default {
    install(Vue, options) {
        Vue.component('th-form', ThFormComponent)
    }
}