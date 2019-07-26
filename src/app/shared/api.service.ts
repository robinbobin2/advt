import { Field } from "src/app/shared/field.model";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getGroupInfo(request: any) {
    return this.http.post('https://vookie.ru/vkapp_delete',request);
    // return '{"group":{"id":2,"group_id":168595662,"created_at":"2018-12-17 07:44:03","updated_at":"2018-12-17 07:44:03","fields":[{"id":281,"app_advt_id":2,"type":"text","label":"21","required":0,"created_at":"2019-07-05 12:02:01","updated_at":"2019-07-05 12:02:01"},{"id":282,"app_advt_id":2,"type":"text","label":"asdasd","required":1,"created_at":"2019-07-05 12:02:01","updated_at":"2019-07-05 12:02:01"}]},"group_id":"168595662","fields":[{"id":281,"app_advt_id":2,"type":"text","label":"21","required":0,"created_at":"2019-07-05 12:02:01","updated_at":"2019-07-05 12:02:01"},{"id":282,"app_advt_id":2,"type":"text","label":"asdasd","required":1,"created_at":"2019-07-05 12:02:01","updated_at":"2019-07-05 12:02:01"}],"i":0,"token":null,"has_img":false}';
  }

  createField(group_id: number, field: Field) {
    return this.http.post("https://vookie.ru/api/add_field", {
      group_id: group_id,
      label: field.label,
      type: field.type,
      required: field.required
    });
  }
  editField(id: number, field: Field) {
    return this.http.post("https://vookie.ru/api/edit_field", {
      id: id,
      label: field.label,
      type: field.type,
      required: field.required
    });
  }
}
