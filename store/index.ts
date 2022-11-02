import {defineStore} from "pinia";
import axios from "axios";
import {CustomCardsTypes} from "~/types/CustomCardsTypes";


interface State {
    goodsList: CustomCardsTypes[]
}

export const useDataStore = defineStore({
    id: 'dataStore',
    state: function (){
        return {
            goodsList: [],
            answerToAdminPanel:null
        }
    },
    getters: {
        getState : (state) => state.goodsList
    },
    actions: {
        async getData(){
            try {
                this.$state.goodsList = await axios.get("http://localhost:9100/api/goods")
                    .then(resp => resp.data);
            }catch (err){
                console.log(err);
            }
        },
        async addGood(name,price,file){
            try{
                console.log(file.files[0]);
                const data = new FormData();
                data.append('name', name.value);
                data.append('price', price.value);
                data.append('file', file.files[0]);
                await axios.post("http://localhost:9100/api/goods", data,{
                    headers: {
                        'Content-Type': 'application/octate-stream'
                    }
                })
                    .then(res => res.data)
                }catch(err){
                    console.log(err);
                }
            },

        async delItem(text){
            try{
                const nameOfGood = text.value;
                console.log(nameOfGood)
                await axios.delete("http://localhost:9100/api/goods",  {params: {name: nameOfGood}})
                    .then(res => res.data)
            }catch (err){
                console.log(err);
            }
        },

        async getOne(target){
            try{
                const nameOfGood = target.value;
                await axios.get(`http://localhost:9100/api/goods/${nameOfGood}`)
                    .then(res =>  this.$state.answerToAdminPanel = res.data)
            }catch (err){
                console.log(err);
            }
        }
    }
})