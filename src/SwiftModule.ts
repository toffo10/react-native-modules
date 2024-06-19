import { NativeModules } from 'react-native'

const { SwiftModule } = NativeModules;

interface SwiftModuleInterface {
    swiftNativeMethod(name: string): void;
}

export default SwiftModule as SwiftModuleInterface;