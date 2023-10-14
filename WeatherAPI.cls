/**
* @description       : WeatherAPI class to make Rest API callout
* @author            : Akshay S
**/
public with sharing class WeatherAPI {
    @AuraEnabled
    public static string getWeather(String city){
        Http http = new Http();
        HttpRequest req = new HttpRequest();
        req.setEndpoint('callout:WeatherAPI/current.json?q='+city);
        req.setMethod('GET');
        HttpResponse res = http.send(req);
        return res.getBody();
    }
}