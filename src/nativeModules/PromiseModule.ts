import {NativeModules} from 'react-native'

const { PromiseModule } = NativeModules;

interface PromiseInterface {
    startPromise(name: string): string;
}

export default PromiseModule as PromiseInterface;