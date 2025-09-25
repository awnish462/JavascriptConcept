const asyncIterable = {
  data: [10, 20, 30],
  [Symbol.asyncIterator]() {
    let index = 0;
    return {
      next: async () => {
        if (index < this.data.length) {
          return { value: this.data[index++], done: false };
        }
        return { done: true };
      },
    };
  },
};

(async () => {
  for await (let val of asyncIterable) {
    console.log(val);
  }
})();

