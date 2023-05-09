import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'game-search-bar',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

  searchForm!: FormGroup;

  searchValue$ !: Observable<string>;

  constructor(private fb: FormBuilder) {}
  private readonly searchService = inject(SearchService);

  // NE PLUS FAIRE CA, VOIR LA CORRECTION D'EVAN
  ngOnInit(): void {
    this.searchForm = this.fb.group({
      searchInput: ['']
    })
  }

  saveValue(): void {
    const inputValue: string = this.searchForm.get('searchInput')!.value;
    this.searchService.setSearch(inputValue);
  }
}
