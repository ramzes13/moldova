const { Buffer, constants } = require('buffer');

class MemoryTest {
  constructor(deltaMb) {
    this.data = {};
    this.deltaMb = deltaMb;
    this.counter = 0;
    this.nrBufInstances = Math.ceil(deltaMb * 1000000000 / constants.MAX_LENGTH);
    this.buffLength = constants.MAX_STRING_LENGTH;
    this.increase();

    console.log(constants);
  }

  increase() {
    this.data[this.counter] = []
    for (let i = 0; i < this.deltaMb; i++) {
      this.data[this.counter].push(' '.repeat(1e8));
    }
    this.counter++;
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

