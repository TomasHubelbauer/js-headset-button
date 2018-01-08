# JavaScript Headphones Button

An attempt in using WebAudio API on a phone with a TRRS jack headset to detect button presses on the headset.
If the headset shows up as a possible input stream in the WebAudio API, it should be possible to detect input pattern of the button press.
Analyzer node with `getByteFrequencyData` and `getByteTimeDomainData` buffers in a `requestAnimationFrame` should be enough to tell.

This should bridge the gap between native APIs and web APIs.
Both Google's Android and Apple's iPhone provide programmatic ways for listening for the headphones button press in an application:

- [The Google API](https://stackoverflow.com/a/19543982/2715716)
- [The Apple API](https://stackoverflow.com/a/15425324/2715716)

## Jack pinouts

**3 conductor:**

| Conductor | Channel   |
|-----------|-----------|
| *T*ip     | Left Out  |
| *R*ing    | Right Out |
| *S*leeve  | Ground    |

**4 conductor:**

| Conductor | Channel (Nokia) | Channel (Apple) |
|-----------|-----------------|-----------------|
| *T*ip     | Left Out        | Left Out        |
| *R*ing    | Right Out       | Right Out       |
| *R*ing    | Microphone In   | Ground          |
| *S*leeve  | Ground          | Microphone In   |
