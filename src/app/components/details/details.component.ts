import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BalletService, BalletItem } from '../../services/ballet.service';

@Component({
  selector: 'app-details',
  standalone: false,
  templateUrl: './details.component.html'
})
export class DetailsComponent implements OnInit {
  item?: BalletItem;
  loading = true;

  constructor(private route: ActivatedRoute, private service: BalletService, private router: Router) {}

ngOnInit(): void {
  const id = this.route.snapshot.paramMap.get('id');
  console.log('DetailsComponent: route id =', id);

  const navState = window.history.state as { item?: BalletItem };
  if (navState && navState.item) {
    this.item = navState.item;
    this.loading = false;
    this.service.getById(id!).subscribe(found => {
      if (!found) {
      
        console.warn('DetailsComponent: item not found on server, showing navigation state only.');
      } else {
    
      }
    });
    return;
}}

  back() {
    this.router.navigate(['/list']);
  }
}
