// * abstract class = 추상 클래스는 다른 클래스가 상속받을 수 있는 클래스이다.
// * abstract class didn't create instance
// * 상속만 가능한 클래스이다.
abstract class User {
  constructor(
    private firstName: string,
    private lastName: string,
    public nickName: string
  ) {}
  private getFullName() {
    return `${this.firstName}-${this.lastName}`;
  }
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
