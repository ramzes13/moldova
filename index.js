const { MemoryTest } = require('./src/index');

const memory = new MemoryTest(50);
memory.increase();
memory.decrease();