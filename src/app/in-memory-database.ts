import { InMemoryDbService } from "angular-in-memory-web-api";
import { Category } from './pages/categories/shared/category.model';
export class InMemoryDatabase implements InMemoryDbService {
  createDb() {
    const categories: Category[] = [
      { id: 1, name: "Lazer", description: "" },
      { id: 2, name: "Tech", description: "" },
      { id: 3, name: "Code", description: "" },
      { id: 4, name: "Design", description: "" },
      { id: 5, name: "Rest", description: "" },
      { id: 6, name: "Eat", description: "" },
      { id: 7, name: "Trip", description: "" },
      { id: 8, name: "Chill", description: "" },
    ];
    return {categories};
  }
}