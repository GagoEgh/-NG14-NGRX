export class EditDTO {
  body!: string
  description!: string
  tagList!: string[]
  title!: string
  constructor(formValue: any) {
    this.body = formValue?.body;
    this.description = formValue.description;
    this.title = formValue.title;
    this.tagList = []
  }

}