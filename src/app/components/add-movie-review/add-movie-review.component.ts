import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { MessageService, ConfirmationService } from "primeng/api";

@Component({
  selector: "app-add-movie-review",
  templateUrl: "./add-movie-review.component.html",
  styleUrls: ["./add-movie-review.component.scss"],
})
export class MovieReviewComponent implements OnInit {
  @Output() discard = new EventEmitter();
  @Output() addReview = new EventEmitter();

  name: string = "";
  rating: number = 0;
  review: string = "";

  constructor(
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit(): void {}

  clearFields() {
    this.name = "";
    this.rating = 0;
    this.review = "";
  }

  onAddReview() {
    if (this.name === "" || this.rating === 0 || this.review === "") {
      this.messageService.add({
        severity: "error",
        summary: "Error",
        detail: "Fields required",
      });

      return;
    }

    const payload = {
      name: this.name,
      rating: this.rating,
      review: this.review,
    };

    this.clearFields();
    this.addReview.emit(payload);
  }

  onDiscard(event: any) {
    this.confirmationService.confirm({
      target: event.target,
      message: "Are you sure that you want to proceed?",
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        this.discard.emit();
      },
      reject: () => {},
    });
  }
}
