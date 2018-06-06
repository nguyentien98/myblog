import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../Services/api.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
	selector: 'app-detail',
	templateUrl: './detail.component.html',
	styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

	detail: any = false;

	constructor(
		private api : ApiService, 
		private route: ActivatedRoute, 
		private title: Title
				) {
		
	}


	ngOnInit() {
		let slug = this.route.snapshot.paramMap.get('slug');
		 this.api.detail(slug).subscribe(data => {
			this.detail = data;
			this.title.setTitle(this.detail.title);
		});
	}
	

}
