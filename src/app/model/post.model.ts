export class Post {
  _id?: string;
  question: string;
  answer: string;

  constructor(question: string, answer: string, _id?: string) {
    this.question = question;
    this.answer = answer;
    this._id = _id;
  }

}
