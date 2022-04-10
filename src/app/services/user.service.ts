import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

   userUrl: string = 'http://localhost:3000/users';// port du backend
  constructor(private httpClient: HttpClient) { }



  signup(user: any) {
    return this.httpClient.post(`${this.userUrl}/signup`, user);

  }
  login(user: any) {
    return this.httpClient.post<{message: any , users : any}>(`${this.userUrl}/login`, user);

  }

  editUser(user: any) {
    return this.httpClient.put<{message : any}>(`${ this.userUrl }/${user._id}`, user);

  }

  getAllUseres() {
   return this.httpClient.get<{useres: any}>(this.userUrl);
  }

  getUserById(id: any) {

    return this.httpClient.get<{user: any}>(`${ this.userUrl }/${id}`)
  }

  deleteUser(id: any) {
return this.httpClient.delete<{message : any}>(`${ this.userUrl }/${id}`)
  }

}
