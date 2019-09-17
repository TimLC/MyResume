import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'wt-book-search',
  templateUrl: './book-search.component.html'
})
export class GithubServiceService implements OnInit {

  private projectsIdUrl = 'https://api.github.com/users/:username/projects';
​  private projectUrl = 'https://api.github.com/projects/:project_id';

  constructor(private _httpClient: HttpClient) {
  }

  ngOnInit() {
    this._httpClient.get(this.projectsIdUrl);
    console.log(this._httpClient.get(this.projectsIdUrl));
  }
}



​

