import { observable, action } from "mobx";

class DefaultStore {
  @observable helloVariable = "Hello World";

  @action
  toggleVariable() {
    this.helloVariable = 'Easy as Pi!';
    console.log("Variable: ",this.helloVariable);
  }
}

export default new DefaultStore();