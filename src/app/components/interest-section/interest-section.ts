import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-interest-section',
  imports: [],
  templateUrl: './interest-section.html',
  styleUrl: './interest-section.scss'
})
export class InterestSection {
  @Input() sectionId = '';
  @Input() title = '';
  @Input() subtitle = '';
  @Input() description = '';
  @Input() topics: string[] = [];
}