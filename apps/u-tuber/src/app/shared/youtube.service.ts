import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';

const baseUrl =
  'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=15&playlistId=PLhv4jOhq_1oXKZZWYlIBWAh2qwNu8hmSl&fields=etag%2Citems(contentDetails(videoId%2CvideoPublishedAt)%2Cetag%2Cid%2Csnippet(channelTitle%2Cdescription%2CpublishedAt%2CresourceId%2FvideoId%2Cthumbnails%2Fhigh%2Furl%2Ctitle))%2Ckind&key=AIzaSyBrEWgOiMrEBXjN52TePcJsaaz7U5ttuf4';

@Injectable()
export class YoutubeService {
  constructor(private http: HttpClient) {}

  load() {
    return this.http
      .get<any>(`${baseUrl}`)
      .pipe(map(res => res.items), tap(res => console.log(res)));
  }
}
