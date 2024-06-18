import {NativeModules} from 'react-native'

const { PromiseModule } = NativeModules;

interface PromiseInterface {
    createPromiseEvent(name: string, location: string): void;
}

export default PromiseModule as PromiseInterface;