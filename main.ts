input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Butterfly)
    basic.showString("Hello!")
    basic.showArrow(ArrowNames.North)
    music.play(music.stringPlayable("C5 B A G F E D C ", 120), music.PlaybackMode.UntilDone)
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Funk), music.PlaybackMode.UntilDone)
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Blues), music.PlaybackMode.UntilDone)
import speech
=speech.say ;(hello (John))})