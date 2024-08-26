import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IIngredient} from "../interfaces/Ingredient.interface";

@Injectable({
  providedIn: 'root'
})
export class IngredientsService {
  http = inject(HttpClient);

  baseApiUrl = 'https://norma.nomoreparties.space/api/ingredients';

  getIngredients() {
    return this.http.get<{success: boolean, data: IIngredient[]}>(this.baseApiUrl);
  }
}
