# JavaScript Headphones Button

An attempt in using WebAudio API on a phone with a TRRS jack headset to detect button presses on the headset.
If the headset shows up as a possible input stream in the WebAudio API, it should be possible to detect input pattern of the button press.
Analyzer node with `getByteFrequencyData` and `getByteTimeDomainData` buffers in a `requestAnimationFrame` should be enough to tell.

This should bridge the gap between native APIs and web APIs.
Both Google's Android and Apple's iPhone provide programmatic ways for listening for the headphones button press in an application:

- [The Google API](https://stackoverflow.com/a/19543982/2715716)
- [The Apple API](https://stackoverflow.com/a/15425324/2715716)

| Conductor | Channel (Nokia) | Channel (Apple) |
|-----------|-----------------|-----------------|
| *T*ip     | Left Out        | Left Out        |
| *R*ing    | Right Out       | Right Out       |
| *R*ing    | Microphone In   | Ground          |
| *S*leeve  | Ground          | Microphone In   |

## Running

| Prerequisite | Version | Purpose     |
|--------------|---------|-------------|
| Python       | 2.7     | HTTP Server |

```sh
python -m SimpleHTTPServer
```

[On Bloggo](index.html)

## Testing

Use an Android phone on the same network with a TRRS jack.

| Prerequisite | Version | Purpose                       |
|--------------|---------|-------------------------------|
| Chrome       | 63      | `async`/`await`, WebAudio API |
| Jack         | TRRS    | Microphone input              |

On the phone go to `http://`(computer-local-ip)`:8000`.
Use `chrome://inspect` to use Chrome DevTools on the phone.
You may need to enable *Developer Mode* on the phone as well as USB debugging.
Ensure you have up-to-date version of Chrome on the phone.

## Contributing

See the [development plan](doc/tasks.md).

## Studying

See the [development log](doc/notes.md).
