abstract class User {
  constructor(
    private firstName: string,
    private lastName: string,
    public nickName: string
  ) {}
}

class Player extends User {}

const taeeon = new Player("lee", "taeeon", "taeeon");

// * in javascript
// * class Player {
// *    constructor (firstName, lastName) {
//*           this.firstName = firstName;
//*           this.lastName = lastName;
//*        }
// *  }
