const { Buffer, constants } = require('buffer');

class MemoryTest {
  constructor(deltaMb) {
    this.data = {};
    this.counter = 0;
    this.nrBufInstances = Math.ceil(deltaMb * 1000000000 / constants.MAX_LENGTH);
    this.buffLength = constants.MAX_LENGTH;
    this.increase();

    console.log(this.nrBufInstances);
  }

  increase() {
    this.data[this.counter] = []
    for (let i = 0; i < this.nrBufInstances; i++) {
      console.log('increase', i)
      this.data[this.counter].push(Buffer.alloc(this.buffLength))
    }
    this.counter++;

    console.log('increase', constants)
  }

  decrease() {
    this.counter--;
    delete this.data[this.counter];
    //todo call garbage collector
  }
}

module.exports = {
  MemoryTest,
};

