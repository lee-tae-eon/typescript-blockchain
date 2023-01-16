interface NewStorage<T> {
  [key: string]: T;
}

class LocalStorage<T> {
  private storage: NewStorage<T> = {};
  set(key: string, value: T) {
    this.storage[key] = value;
  }
  remove(key: string) {
    delete this.storage[key];
  }
  get(key: string): T {
    return this.storage[key];
  }
  clear() {
    this.storage = {};
  }
}

const stringsStorage = new LocalStorage<string>();

stringsStorage.get("key");
stringsStorage.set("hello", "test is best");
console.log(stringsStorage.get("hello"));
const booleanStorage = new LocalStorage<boolean>();

booleanStorage.get("boolean");
booleanStorage.set("hello", false);
console.log(booleanStorage.get("hello"));

export {};
