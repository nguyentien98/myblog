import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { RequestOptions, Headers } from '@angular/http';
import { Observable, of } from 'rxjs';

interface TestServiceInterface{
	list: any;
}

@Injectable({
	providedIn: 'root'
})
export class ApiService {

	options: any;
	api_key = 'a780990d-fecc-4f80-a285-c2173def2cf3';

	constructor(private http: HttpClient) {
		// let headers = new HttpHeaders({ Authorization :  this.api_key});
		// headers.append('Content-Type', 'application/json');
		// this.options = {
		// 	headers: headers
		// }
		// 

	}

	all(page){
		let url = 'http://localhost:8000/api/posts?api_token='+this.api_key+'&current_page='+page;
		return this.http.get<TestServiceInterface>(url);
	}

	detail(slug: any){
		
		let url = 'http://localhost:8000/api/posts/'+slug+'?api_token='+this.api_key;
		// return this.http.get<TestServiceInterface>(url, this.options);
		return this.http.get<TestServiceInterface>(url, this.options)
	}
}


