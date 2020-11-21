import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { ConfigService } from 'src/app/config.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-announcement-dialog',
  templateUrl: './announcement-dialog.component.html',
  styleUrls: ['./announcement-dialog.component.scss']
})
export class AnnouncementDialogComponent implements OnInit {
  constructor(public configService: ConfigService, private _snackBar: MatSnackBar) { }
  public visible = true;
  public selectable = true;
  public removable = true;
  public addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  public userId = 1; // Input
  public selectedPublishingType = "";

  public tagChips: TagChipType[] = [];
  public selectedCategory = "";
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
  addAnnouncementFormGroup = new FormGroup({
    userId: new FormControl(''),
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    announcementType: new FormControl('', [Validators.required]),
    publishingType: new FormControl(''),
    tags: new FormControl(''),
    localization: new FormControl(''),
  });

  ngOnInit(): void {
    this.addAnnouncementFormGroup.controls['userId'].setValue(this.userId); 
  }

  public chooseCategory(category: string): void {
    this.selectedCategory = category;
  }

  public onSubmit():void {
    console.log("Add announcement form: ", this.addAnnouncementFormGroup.value);
    //this.configService.postAnnouncement(this.addAnnouncementFormGroup.value);
    this.openSnackBar();
  }

  public addTagChip(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.tagChips.push({ name: value.trim() });
      this.addAnnouncementFormGroup.controls['tags'].setValue(this.tagChips);    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  public removeTagChip(chip: TagChipType): void {
    const index = this.tagChips.indexOf(chip);

    if (index >= 0) {
      this.tagChips.splice(index, 1);
    }
  }

  //TODO
  public addTags(): void {
    console.log('Szukanie: ', this.tagChips);
  }

  public choosePublishType(type: any): void {
    this.selectedPublishingType = type;
  }

  public openSnackBar() {
    this._snackBar.open('Twoje ogłoszenie zostało dodane.', '' , {
      duration: 5000,
    });
  }
}

export interface TagChipType {
  name: string;
}