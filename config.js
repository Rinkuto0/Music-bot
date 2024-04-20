module.exports = {
    app: {
        token: 'xxx',
        playing: 'Get rumbled, Stay humbled🗣🗣🔥🔥🙏',
        global: true,
        guild: 'xxx',
        ExtraMessages: false,
        loopMessage: true,

    },

    opt: {
        DJ: {
            enabled: false,
            roleName: '',
            commands: []
        },
        maxVol: 200,
        spotifyBridge: true,
        volume: 85,
        leaveOnEmpty: false,
        leaveOnEmptyCooldown: 30000,
        leaveOnEnd: false,
        leaveOnEndCooldown: 30000,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
