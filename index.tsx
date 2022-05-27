import React from 'react';
import {
    NativeModules,
    NativeAppEventEmitter,
    EmitterSubscription,
} from 'react-native';

import { SoundLevelResultType } from './types';

const SoundLevelModule = NativeModules.RNSoundLevelModule;

export default class SoundLevel extends React.Component {
    frameSubscription: EmitterSubscription = null;

    addListener = (monitorInterval = 250) => {
        if (this.frameSubscription) {
            this.frameSubscription.remove();
        }

        this.frameSubscription = NativeAppEventEmitter.addListener(
            'frame',
            (data: SoundLevelResultType) => this.onNewFrame(data)
        );

        SoundLevelModule.start(monitorInterval);

        return true;
    };

    onNewFrame = (result: SoundLevelResultType) => {
        return result;
    };

    removeListener = () => {
        if (this.frameSubscription) {
            this.frameSubscription.remove();
        }

        SoundLevelModule.stop();

        return true;
    };
}
