'use strict';

import { NativeModules, NativeAppEventEmitter } from 'react-native';

const SoundLevelModule = NativeModules.RNSoundLevelModule;

const SoundLevel = {
    addListener: function (monitorInterval = 250) {
        if (this.frameSubscription) {
            this.frameSubscription.remove();
        }

        this.frameSubscription = NativeAppEventEmitter.addListener(
            'frame',
            (data) => {
                if (this.onNewFrame) {
                    this.onNewFrame(data);
                }
            }
        );

        SoundLevelModule.start(monitorInterval);

        return true;
    },

    removeListener: function () {
        if (this.frameSubscription) {
            this.frameSubscription.remove();
        }

        SoundLevelModule.stop();

        return true;
    },
};

module.exports = SoundLevel;
