import {NativeModules} from 'react-native'

const { PromiseModule } = NativeModules;

interface PromiseInterface {
    startPromise(name: string): void;
}

export default PromiseModule as PromiseInterface;