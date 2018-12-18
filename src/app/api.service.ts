import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  headers: HttpHeaders = new HttpHeaders({
    'Accept': 'application/json',
    'application_id': '5c0121ec34841d67d12c05a1',
    'app_user_token': 'a2b28bb06b58edd514684e2ff481e1a52cb1bf26ce642674a26f4d5af583d50b',
    'portal_type': 'AP',
    'publish_type': 'work',
    'app_user_ip': '115.248.118.242',
    'Content-Type': 'application/json'
  });
  constructor(private http: HttpClient) { }

  getEmpAll(limit, offset, sort_type) {
    let headers = this.headers;
    return this.http.get('https://brisol.ajrgroup.in/sr-q/api/apps/5c0121ec34841d67d12c05a1/sc_employees3s?limit=' + limit + '&offset=' + offset + '&sort=sc__sc_employees3__name5c13365b34841d68042c2f48&sort_type=' + sort_type, { headers });
  }
  getStuAll(offset, sort_type) {
    let headers = this.headers;
    return this.http.get('https://brisol.ajrgroup.in/sr-q/api/apps/5c0121ec34841d67d12c05a1/sc_employees4s?limit=15&offset=' + offset + '&sort=sc__sc_employees4__name5c14999034841d68042c37a4&sort_type=' + sort_type, { headers });
  }
  deleteStu(id, row_version) {
    let headers = this.headers.append('row_version', row_version);
    return this.http.delete('https://brisol.ajrgroup.in/sr-q/api/apps/5c0121ec34841d67d12c05a1/sc_employees4s/' + id, { headers });
  }
  deleteEmp(id, row_version) {
    let headers = this.headers.append('row_version', row_version);
    return this.http.delete('https://brisol.ajrgroup.in/sr-q/api/apps/5c0121ec34841d67d12c05a1/sc_employees3s/' + id, { headers });
  }
  getStuByID(id) {
    let headers = this.headers;
    return this.http.get('https://brisol.ajrgroup.in/sr-q/api/apps/5c0121ec34841d67d12c05a1/sc_employees4s/' + id, { headers });
  }
  postStuData(student) {
    let headers = this.headers;
    return this.http.post('https://brisol.ajrgroup.in/sr-q/api/apps/5c0121ec34841d67d12c05a1/sc_employees4s', student, { headers });
  }
  getEmpByID(id) {
    let headers = this.headers;
    return this.http.get('https://brisol.ajrgroup.in/sr-q/api/apps/5c0121ec34841d67d12c05a1/sc_employees3s/' + id, { headers });
  }
  postEmpData(student) {
    let headers = this.headers;
    return this.http.post('https://brisol.ajrgroup.in/sr-q/api/apps/5c0121ec34841d67d12c05a1/sc_employees3s', student, { headers });
  }
  updateStuData(id, row_version, student) {
    let headers = this.headers.append('row_version', row_version);
    return this.http.put('https://brisol.ajrgroup.in/sr-q/api/apps/5c0121ec34841d67d12c05a1/sc_employees4s/' + id, student, { headers });
  }
  updateEmpData(id, row_version, emp) {
    let headers = this.headers.append('row_version', row_version);
    return this.http.put('https://brisol.ajrgroup.in/sr-q/api/apps/5c0121ec34841d67d12c05a1/sc_employees3s/' + id, emp, { headers });
  }
}
