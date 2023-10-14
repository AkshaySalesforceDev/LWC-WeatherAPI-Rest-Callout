import { LightningElement } from 'lwc';
import getWeather from '@salesforce/apex/WeatherAPI.getWeather';

export default class WeatherAPI extends LightningElement {
    city;
    condition;
    imageURL;
    
    handleonchange(event) {
        this.city = event.target.value;
     }
    buttonClick() { 
        getWeather({ city: this.city }).then((response) => {
            console.log("###Response : " + response);
            let parsedData = JSON.parse(response);
            this.imageURL = parsedData.current.condition.icon;
            this.condition = parsedData.current.condition.text;
        })
            .catch((error) => {
                this.condition = 'No matching location found.';
                console.log('###Error : ' + JSON.stringify(error));
            });
    }
}