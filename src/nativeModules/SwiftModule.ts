import { NativeModules } from 'react-native'

const { SwiftModule } = NativeModules;

interface SwiftEventInterface {
    swiftPromiseMethod(name: string): void;
    swiftEventMethod(): void;
}

export default SwiftModule as SwiftEventInterface;