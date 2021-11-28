/**
 * Person Linked list, sets a new person to be added to a team.
 * constructor takes head.
 * Head is initialised to null if a Node is not passed.
 * let Jon_Doe = new Person(#Pointer)
 */
class node {
  constructor(_person, _rank) {
    this.name = _person;
    this.rank = _rank;
    this.next = null;

    // this.next = null;
  }
  getRank() {
    return this.rank;
  }
  /**
   * Returns the first one in the list.
   */
  getName() {
    return this.name;
  }
}

class Person_list {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  /**
   * Clear the list
   */
  p_clear() {
    this.head = null;
  }

  grabName(person) {
    let current = this.head;
    // traverse the entire list
    while (current != null) {
      if (current.name === person) {
        // we found the node

        return current;
      }
      current = current.next;
    }
    console.log("did not find", person);
    return null;
  }

  grabRank() {
    var temp = this.head;
    return temp.rank;
  }

  json_obj(data, _data) {
    return {
      name: data,
      rank: _data
    };
  }

  /////////////////////////////////////////////////////////////////
  /**
   *  Person Methods
   * current points to list
   * next, prev points to node
   */
  /////////////////////////////////////////////////////////////////

  /**
   * add people to the People Linked List
   * _person = string
   * _rank = (int)number
   * @param {*} _person
   * @param {*} _rank
   */
  add_people(_person, _rank) {
    // creates a new node
    var n = new node(_person, _rank);
    // to store current node
    var current;
    // if list is Empty add the
    // element and make it head
    if (this.head == null) this.head = n;
    else {
      current = this.head;
      // Iterate to the end of the list.
      while (current.next) {
        current = current.next;
      }
      // Add node
      current.next = n;
    }
    this.size++;
  }

  search(person) {
    let current = this.head;
    // traverse the entire list
    while (current != null) {
      if (current.name === person) {
        // we found the node
        console.log("found", current);
        return current;
      }
      current = current.next;
    }
    console.log("did not find", person);
    return null;
  }

  /**
   * Returns the size
   */
  p_size() {
    let count = 0;
    let n = this.name;
    while (n) {
      count++;
      n = n.next;
    }
    return count;
  }

  /**
   * Returns last in the list
   */
  getLast() {
    let lastNode = this.head;
    if (lastNode) {
      while (lastNode.next) {
        lastNode = lastNode.next;
      }
    }
    return lastNode;
  }

  /**
   * removes a Person from the Linked list.
   * @param {*} Person
   */
  removePerson(Person) {
    var current = this.name;
    var prev = null;
    // iterate over the list
    while (current != null) {
      // comparing element with current element if found then remove.
      if (current.element === Person) {
        if (prev == null) {
          this.name = current.next;
        } else {
          prev.next = current.next;
        }
        this.size--;
        return current.Person;
      }
      prev = current;
      current = current.next;
    }
    return -1;
  }

  // checks the list for empty
  isEmpty() {
    return this.size === 0;
  }

  /**
   * For testing delete or comment out later.
   *  gives the size of the list
   * */

  console_size_of_list() {
    console.log(this.size);
  }

  /**
   * For testing delete or comment out later.
   * Prints the list items
   */
  printList() {
    var curr = this.head;
    var last = this.getLast();
    var str = "";
    while (curr) {
      if (curr === last) {
        str += "[name: " + curr.name + " | rank: " + curr.rank + "]";
      } else {
        str += "[name: " + curr.name + " | rank: " + curr.rank + "],";
      }
      curr = curr.next;
    }
    console.log(str + "| results for people |");
  }
}
// makes class methods to be used in other js files.
const _Person_list = Person_list;
export { _Person_list as Person_list };
