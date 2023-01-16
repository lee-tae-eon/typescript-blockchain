// * abstract class = 추상 클래스는 다른 클래스가 상속받을 수 있는 클래스이다.
// * abstract class didn't create instance
// * 상속만 가능한 클래스이다.
abstract class User {
  constructor(
    private firstName: string,
    private lastName: string,
    public nickName: string,
    protected wifeName: string
  ) {}

  // * abstract methods = 추상 클래스를 상속받는 클래스들이 구현해야하는 메소드이다.
  // * property를 private으로 만들면 클래스를 상속하더라도 그 property 에 접근할수 없다
  abstract getNickName(): void;

  protected getFullName() {
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

// * in javascript
// * class Player {
// *    constructor (firstName, lastName) {
//*           this.firstName = firstName;
//*           this.lastName = lastName;
//*        }
// *  }

// *          ------------------------

type Words = {
  [key: string]: string;
};

class Dict {
  private words: Words = {};
  // constructor() {
  //   this.words = {};
  // }
  // * class 를 parameter 의 type으로 사용
  add(word: Word) {
    if (this.words[word.term] === undefined) {
      this.words[word.term] = word.def;
    }
  }

  // todo : delete
  delete(word: Word) {
    if (this.words[word.term]) {
      delete this.words[word.term];
      console.log(this.words);
    }
  }
  // todo : update
  update(word: Word, updateDef: string) {
    this.words[word.term] = updateDef;
  }
  def(term: string) {
    return this.words[term];
  }
  list() {
    console.log(this.words);
  }
}

class Word {
  // * public이라 외부 사용은 가능하지만 readonly로 property의 변경을 막아줌
  constructor(public readonly term: string, public readonly def: string) {}
}

const kimchi = new Word("kim", "korean food");

const dict = new Dict();

dict.add(kimchi);

dict.update(kimchi, "한국음식이야");

console.log(dict.list());
