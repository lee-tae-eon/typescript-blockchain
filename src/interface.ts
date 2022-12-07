type Nick = "test" | "lee" | "eon";
type Health = 1 | 5 | 10;

// * interface 는 object의 shape을 결정해주려는 역할로 만들어진 type 정의이다.
interface Standards {
  nickname: Nick;
  healthBar: Health;
}

const test: Standards = {
  nickname: "test",
  healthBar: 1,
};

interface SuperUser {
  name: string;
}

interface HealthPlayer extends SuperUser {}

const option: HealthPlayer = {
  name: "taeeon",
};
