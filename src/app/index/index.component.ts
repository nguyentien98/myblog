import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ApiService } from '../Services/api.service';

@Component({
	selector: 'app-index',
	templateUrl: './index.component.html',
	styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
	data: any = false;
	posts: any = false;
	loadingMore = false;
	currentPage = 1;
	constructor(
		private api: ApiService, 
		private title: Title
		) {
		this.title.setTitle('Tiến Nguyễn\'s Blog');
	}

	ngOnInit() {
		this.api.all(this.currentPage).subscribe(data => {
			this.data = data;
			this.posts = this.data.data;
		});
	}

	loadmore(){
		this.loadingMore = true;
		this.currentPage++;
		let page = this.currentPage;
		this.api.all(page).subscribe(data => {
			this.data = data;
			this.posts = this.data.data;
			this.loadingMore = false;
		});
	}
}
