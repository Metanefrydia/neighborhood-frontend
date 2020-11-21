import { Component, OnInit } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';

export interface SearchChipType {
  name: string;
}

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent implements OnInit {
  constructor() {}

  public visible = true;
  public selectable = true;
  public removable = true;
  public addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  public searchChips: SearchChipType[] = [];

  public rangeOptions = [0, 1, 2, 3, 5, 10, 20, 50];
  public selectedRange = 0;
  public announcementCategory = [{id: "1", name:"animals", description:"Zwierzęta"}, 
  {id: "2", name: "transport", description: "Transport"},
  {id: "3", name: "work", description: "Praca"},
  {id: "4", name: "shopping", description: "Ogłoszenia drobne"},
  {id: "5", name: "babysitting", description: "Pomoc przy dziecku"},
  {id: "6", name: "other", description: "Inne"},
  {id: "7", name: "services", description: "Usługi"},
  {id: "8", name: "meeting", description: "Spotkania"},
  {id: "9", name: "accommodation", description: "Noclegi"}
  ];
  public selectedCategory = "";
  
  public ngOnInit(): void {}

  public addSearchChip(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.searchChips.push({ name: value.trim() });
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  removeSearchChip(chip: SearchChipType): void {
    const index = this.searchChips.indexOf(chip);

    if (index >= 0) {
      this.searchChips.splice(index, 1);
    }
  }

  //TODO
  public search(): void {
    console.log('Szukanie: ', this.searchChips);
  }

  //TODO
  public chooseLocalization(localization: string): void {
    console.log('Wybrana lokalizacja: ', localization);
  }

  public chooseRange(range: number): void {
    this.selectedRange = range;
    console.log("Wybrany zakres: ", this.selectedRange);
  }

  public chooseCategory(category: string): void {
    this.selectedCategory = category;
    console.log("Wybrany zakres: ", this.selectedCategory);
  }
}
