import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

export class HttpHelper {
    private _base = 'API/';
    constructor(private _http: Http) {
    }

    get haserror(): boolean {
        return this.errormsg != null;
    }

    errormsg: string;

    private obj_to_query(obj: any) {
        var parts: any = [];
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                parts.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
            }
        }
        return parts? "?" + parts.join('&'): "";
    }

    getaction<T>(path: string, body: any = null) {
        return this._http.get(this._base + path + this.obj_to_query(body))
            .map(res => {
                return <T>res.json();
            })
            .catch(this._handleError);
    }

    deleteaction<T>(path: string, body: any = null) {
      return this._http.delete(this._base + path + this.obj_to_query(body))
          .map(res => {
              return <T>res.json();
          })
          .catch(this._handleError);
  }

    postaction(path: string, param: any = null) {
        this.errormsg = null;

        let body = JSON.stringify(param);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this._http.post(this._base + path, body, options)
            .map(this._handleSuccess)
            .catch(this._handleError);
    }
    putaction(path: string, param: any = null) {
      this.errormsg = null;

      let body = JSON.stringify(param);
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });

      return this._http.put(this._base + path, body, options)
          .map(this._handleSuccess)
          .catch(this._handleError);
  }

    private _handleError(error: Response) {
        if (error.status == 401) {
            localStorage.removeItem('currentUser');
            location.reload();
        }

        return Observable.throw(error || 'Server error');
    }
    private _handleSuccess(success: Response) {
        var jsonresult = null;
        try {
            jsonresult = success.json();
        } catch (ex) {
            return success;
        }

        return jsonresult;
    }
}
