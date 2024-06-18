import { NativeModules } from 'react-native'

const { EventModule } = NativeModules;

interface EventInterface {
    executeEvent(name: string): void;
}

export default EventModule as EventInterface;