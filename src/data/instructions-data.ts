export const instructionsCodes = {
  install: `
// npm
npm i @satha/core

// pnpm
pnpm add @satha/core`,
  store: `
import { useStorage } from '@satha/core';

const numberSave = useStorage('number-save', 1);`,
  useStore: `
// get value
const number = numberSave.get();

// set value
numberSave.set((state) => state + 1);`,
  createAndUseStore: `
import { useStorage } from '@satha/core';
const numberSave = useStorage('number-save', 1);

// get value
const number = numberSave.get();

console.log(number)

// set value
numberSave.set((state) => state + 1);`,

  multiValueStore: `
import { useStorage } from '@satha/core';

// user info
const userInfoStore = useStorage('userInfo', {
  name: 'S. Dogg',
  age: 40,
  birthPalce: 'LA'
});

// get value
const { name } = userInfoStore.get();

// log value
console.log(name);

// change age
userInfoStore.set(state => {
  state.age = 50;
  return state;
})

// get value
const { age } = userInfoStore.get();

// log value
console.log(age);`,
  resetValue: `
import { useStorage } from '@satha/core';
const numberSave = useStorage('number-save', 1);

// will reset value to initial state
numberSave.reset();`,
  sessionStorage: `
import { useStorage } from '@satha/core';

const numberSave = useStorage('number-save', 1, 'session');`,
  newLocalStorage: `
import { createLocalStorage, useStorage } from '@satha/core';

const storageNumber = createLocalStorage('storage-number');

const numberSave = useStorage(
  'number-save',
  1,
  ...storageNumber
);`,
  newSessionStorage: `
import {
  createSessionStorage,
  useStorage
} from '@satha/core';

const sessionStorageNumber = createSessionStorage(
  'session-number'
);

const numberSave = useStorage(
  'number-save',
  1,
  ...sessionStorageNumber
);`,
  changeDefaultStorageName: `
import {
  createLocalStorage,
  createSessionStorage,
} from '@satha/core';

// localStorage
createLocalStorage(
  'satha-main-storage', { defaultStorage: true }
);

// sessionStorage
createSessionStorage(
  'satha-main-storage', { defaultStorage: true }
);`,
  sublinkHack: `
import {
  createLocalStorage,
} from '@satha/core';

// use unique name for each site
createLocalStorage(
  'satha-store-001', { defaultStorage: true }
);

// after this useStorage can be used
`,
  subscribe: `
import { useStorage } from '@satha/core';
const numberSave = useStorage('number-save', 1);

// initial value
let numberValue = numberSave.get();

// subscribe
const subscribe = numberSave.subscribe((state) => {
  // update value
  numberValue = state;
})

// action to set data: can be used as onClick event
const handleSetData = () => {
  // subscribe callback will be triggered after this action
  numberSave.set((state) => state + 1);
}

// optional: unsubscribe on unmount
numberSave.unsubscribe(subscribe)`,
  useStorage: `
// Props
useStorage(
  name: String [required];
  state: any;

  // extra Props
  type: 'local' [default] | 'session';
  storageName: String;
);

// Methods
const store = useStorage('store', 0);

store.get(); // value: 0

store.set(state => state + 1); // value: 1

store.reset(); // value: 0

store.subscribe((state) => {
  // do your thing
}); // will return a unique id

store.unsubscribe(subscribe); // use subscribe id

store.unsubscribeAll();
`,
  createLocalStorage: `
// * same is applicable for createSessionStorage
// Props
createLocalStorage(
  storageName: String [required];
  // extra options
  config: {
    defaultStorage: Bool = false;
  };
);

// output: [type, storageName]

`,
};
