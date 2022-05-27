export type SoundLevelResultType = {
    /**
     * @description Frame number
     */
    id: number;

    /**
     * @description Sound level in decibels Full Scale (dbFS)
     * @description -160 is a silence / 0 is max sound that the microphone can record
     */
    value: number;

    /**
     * @description raw level value, OS-depended
     */
    rawValue: number;
};

export type SoundLevelType = {
    /**
     * @description monitoringInterval works only for iOS
     */
    start: (monitoringInterval?: number) => void;
    stop: () => void;
    onNewFrame: (result: SoundLevelResultType) => void;
};
