/**
 * Node for the Linked list
 */
class Node {
  // constructor
  constructor(teamMember) {
    this.element = teamMember;
    this.next = null;
  }
}

/**
 * team Linked list, sets a new temMember to be added to a team.
 * constructor takes head.
 * Head is initialised to null if a Node is not passed.
 */
class team_list {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  /////////////////////////////////////////////////////////////////
  /**
   *  team Methods
   */
  /////////////////////////////////////////////////////////////////

  /**
   * add teamMember to the teamMember Linked List
   * @param {*} teamMember
   */
  add_teamMember(teamMember) {
    // creates a new node
    var node = new Node(teamMember);
    // to store current node
    var current;
    // if list is Empty add the
    // element and make it head
    if (this.head == null) this.head = node;
    else {
      current = this.head;
      // Iterate to the end of the list.
      while (current.next) {
        current = current.next;
      }
      // Add node
      current.next = node;
    }
    this.size++;
  }

  /**
   * Returns the size
   */
  team_size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }

  /**
   * Clear the list
   */
  team_clear() {
    this.head = null;
  }

  /**
   * Returns last in the list
   */
  team_getLast() {
    let lastNode = this.head;
    if (lastNode) {
      while (lastNode.next) {
        lastNode = lastNode.next;
      }
    }
    return lastNode;
  }

  /**
   * Returns the first one in the list.
   */
  team_getFirst() {
    return this.head;
  }

  /**
   * removes a teamMember from the Linked list.
   * @param {*} teamMember
   */
  removeTeamMember(teamMember) {
    var current = this.head;
    var prev = null;
    // iterate over the list
    while (current != null) {
      // comparing element with current element if found then remove.
      if (current.element === teamMember) {
        if (prev === null) {
          this.head = current.next;
        } else {
          prev.next = current.next;
        }
        this.team_size--;
        return current.teamMember;
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
    var last = this.team_getLast();
    var str = "";
    while (curr) {
      if (curr === last) {
        str += curr.element + " ";
      } else {
        str += curr.element + ", ";
      }
      curr = curr.next;
    }
    console.log(str + "| results for teams |");
  }

  //end
}
module.exports.team_list = team_list;
