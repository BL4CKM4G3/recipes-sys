import { Component, OnInit } from '@angular/core';
import { Category } from '../shared/category.model';
import { CategoryService } from '../shared/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
})
export class CategoryListComponent implements OnInit {
  categories: Category[] = [];

  constructor(private readonly categoryService: CategoryService) {}

  ngOnInit(): void {
    this.categoryService.getAll().subscribe(
      (categories) => (this.categories = categories),
      (error) => alert('Erron in the load!')
    );
  }

  deleteCategory(category: Category) {
    const mustDelete = confirm('Do you really wanna delete this item?');
    if (mustDelete) {
      this.categoryService.delete(category).subscribe(
        () =>
          (this.categories = this.categories.filter(
            (element) => element != category
          )),
        () => alert('Error in deletion!')
      );
    }
  }
}
