// * abstract class = 추상 클래스는 다른 클래스가 상속받을 수 있는 클래스이다.
// * abstract class didn't create instance
// * 상속만 가능한 클래스이다.
abstract class User {
  constructor(
    private firstName: string,
    private lastName: string,
    public nickName: string,
    protected wifeName?: string
  ) {}

  // * abstract methods = 추상 클래스를 상속받는 클래스들이 구현해야하는 메소드이다.
  // * property를 private으로 만들면 클래스를 상속하더라도 그 property 에 접근할수 없다
  abstract getNickName(): void;

  private getFullName() {
    return `${this.firstName}-${this.lastName}`;
  }
}

class Player extends User {
  getNickName(): void {
    // * property를 private으로 만들면 클래스를 상속하더라도 그 property 에 접근할수 없다
    // * 외부로부터는 보호되지만 자식 클래스에서 사용도되기를 원하면 protected를 써야한다.
    console.log(`${this.wifeName}-${this.nickName}`);
  }
}

const taeeon = new Player("lee", "taeeon", "taeeon", "huikyung");

taeeon.getNickName();

// * in javascript
// * class Player {
// *    constructor (firstName, lastName) {
//*           this.firstName = firstName;
//*           this.lastName = lastName;
//*        }
// *  }
