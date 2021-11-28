/**
 *
 * T_cline
 */
const peeps = require("/src/js_package/Person.js");
let peep = new peeps.Person_list();

class d_array {
  // constructor
  constructor() {
    this.VAR_N = 2;
    this.initial = [];
    this.size = 0;
    this.rcounter = 0;
    this.newSize = 2;
    this.capacity = 10;
    this.newSize = 0;
  }

  /**
   * Balance is a method I made up and tested on my own. I graphed this to test the BIG R.
   * It is used in place to not double up on the dynamic array.
   * It works much faster and does not bloat in the background.
   */
  balance() {
    this.capacity = 2 * (this.rcounter * (this.VAR_N - 1) + 2);
    this.newSize = this.capacity;
  }

  /**
   * Adds a String type element to a dynamic array.
   *
   * @param data
   */
  addElement(_name, _rank) {
    var newForm = {
      "full name": _name,
      rank: _rank
    };
    if (this.size >= this.initial.length) {
      this.balance();
      this.rcounter++;
      var temp = new Array(this.size + this.newSize);
      for (let i = 0; i < this.initial.length; i++) {
        temp[i] = this.initial[i];
      }
      this.initial = temp;
    }
    this.initial[this.size] = newForm;
    this.size++;
    this.trimToSize();
  }

  /**
   * Gets rid of all the null occurrence in the dynamic array.
   */
  trimToSize() {
    //System.out.println("erase null");
    let temp = new Array(this.size);
    for (var i = 0; i < this.size; i++) {
      temp[i] = this.initial[i];
    }
    this.initial = temp;
    this.size = this.initial.length;
  }

  /**
   * Used for testing: cycles the dynamic array and prints the elements.
   *
   * @param arry
   */
  print_all() {
    console.log("json class builder:");
    let x = JSON.stringify(this.initial, null, 3);
    //for (var i = 0; i <= this.d_array.initial.length; i++) {
    console.log(x);
    //}
  }
}
const _d_array = d_array;
export { _d_array as d_array };
