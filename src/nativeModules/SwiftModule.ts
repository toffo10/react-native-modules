import { NativeModules } from 'react-native'

const { SwiftModule } = NativeModules;

interface SwiftEventInterface {
    swiftPromiseMethod(name: string): string;
    swiftEventMethod(): void;
}

export interface SwiftEventObject {
    eventMessage: string;
}

export default SwiftModule as SwiftEventInterface;