import { NativeModules } from 'react-native'

const { EventModule } = NativeModules;

interface EventInterface {
    startEvent(): void;
}

export default EventModule as EventInterface;