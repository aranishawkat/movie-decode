import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { SelectItem } from "primeng/api";
import { PrimeNGConfig, ConfirmationService } from "primeng/api";

@Component({
  selector: "app-movie-list",
  templateUrl: "./movie-list.component.html",
  styleUrls: ["./movie-list.component.scss"],
})
export class MovieListComponent implements OnInit {
  @Input() movies: any;

  @Output() viewItem = new EventEmitter();
  @Output() deleteItem = new EventEmitter();
  @Output() addToggle = new EventEmitter();

  sortOptions: SelectItem[] = [];
  sortOrder: number = 1;
  sortKey: string = "";
  sortField: string = "name";

  constructor(
    private primengConfig: PrimeNGConfig,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit(): void {
    this.sortOptions = [
      { label: "Name Ascending", value: "asc" },
      { label: "Name Descending", value: "des" },
    ];

    this.primengConfig.ripple = true;

    console.log(this.sortOptions);
  }

  onSortChange(event: { value: any }) {
    let value = event.value.value;

    if (value === "asc") {
      this.sortOrder = 1;
    } else {
      this.sortOrder = -1;
    }
  }

  onViewItem(id: string) {
    this.viewItem.emit(id);
  }

  confirmDelete(event: any, id: string) {
    this.confirmationService.confirm({
      target: event.target,
      message: "Are you sure that you want to proceed?",
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        this.deleteItem.emit(id);
      },
      reject: () => {},
    });
  }

  onAddToggle() {
    this.addToggle.emit();
  }
}
