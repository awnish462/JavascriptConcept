// #Rule

const iterable = {
  [Symbol.iterator]() {
    return {
      next() {
        return { value: "item", done: false };
      },
    };
  },
};

const iterableObj = {
  data: [10, 20, 30],
  [Symbol.iterator]() {
    let index = 0;
    return {
      next: () => {
        if (index < this.data.length) {
          return { value: this.data[index++], done: false };
        }
        return { done: true };
      },
    };
  },
};

console.log(iterableObj);

for (const item of iterableObj) {
  console.log(item);
}
