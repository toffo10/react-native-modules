import { NativeModules } from 'react-native'

const { EventModule } = NativeModules;

interface EventInterface {
    startEvent(): void;
}

export interface EventObject {
    eventMessage: string;
}

export default EventModule as EventInterface;