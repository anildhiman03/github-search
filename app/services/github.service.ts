import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
    
    private Username:String;
    private ClientID = '';
    private ClientSecret = '';
    private GithubProfileUrl = 'http://api.github.com/users/';
    constructor(private _http:Http) { 
        
        this.ClientID = 'need client id';
        this.ClientSecret = 'need client secret id';
        this.Username = 'dhimancontact';
        console.log('start with service');
    }

    getUser() {
        return this._http.get(this.GithubProfileUrl+this.Username+'?client_id='+this.ClientID+'&client_secret='+this.ClientSecret)
            .map(res => res.json());
    }

    getRepos() {
        return this._http.get(this.GithubProfileUrl+this.Username+'/repos?client_id='+this.ClientID+'&client_secret='+this.ClientSecret)
            .map(res => res.json());
    }

    updateUser(username:String) {
        this.Username = username;
    }
}