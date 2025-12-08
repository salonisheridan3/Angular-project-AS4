import { Component, OnInit } from '@angular/core';
import { BalletService, BalletItem } from '../../services/ballet.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: false,
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {
  items: BalletItem[] = [];
  loading = true;
  error = '';

  constructor(private service: BalletService, private router: Router) {}

  ngOnInit(): void {
    this.service.getAll().subscribe({
      next: data => { this.items = data; this.loading = false; },
      error: err => { console.error(err); this.error = 'Failed to load data'; this.loading = false; }
    });
  }

goToDetails(item: BalletItem) {
 
  this.router.navigate(['/details', item.id], { state: { item } });
}
}
