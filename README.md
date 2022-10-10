# Simple usage:

```
<html>
    <body>
        <!-- # -->
        <canvas id="target"></canvas>
        <!-- # -->
        <script src="qr.min.js"></script>
        <!-- # -->
        <script>
            /**/
            var qr = new QR("target", "Hello World!", "#000000", "#FFFFFF", "H"); // id, text, foreground, background, correction level
            /**/
            console.log(qr.text);
            console.log(qr.version);
            console.log(qr.matrix);
            /**/
            qr.download("filename"); // optional: download qrcode as png image
            /**/
        </script>
    </body>
</html>
```

# Usage with image tag

If using an img instead of canvas, the code will create a hidden canvas, fill the context with values from the matrix, convert the canvas to dataURL, then replace the src attribute of the img with this URL, there will be no change in the code, just replace canvas with img as follows: 

```
<img id="target" src="">
```

# Notes:

If you want to understand this code, keep in mind that everything here is a direct application of this amazing tutorial:

https://www.thonky.com/qr-code-tutorial/

The only thing I struggled with is the Reed Solomon algorithm, for some reason the suggested method throws an error for specific messages, especially when multiple terms are negated with the XOR operator, the tutorial suggests to remove the leading term 0, but it makes me a bit confused whether to remove the others or not, I have tried everything so far, maybe I have not implemented the code correctly, anyway I ended up translating the python code from this website:

https://en.wikiversity.org/wiki/Reed%E2%80%93Solomon_codes_for_coders

# Warning

This code only supports BYTE_MODE and MASK_0, in total there are 8 masks, in order to choose the appropriate one, you need to calculate the penalty score of each mask and choose the one with the low value!

# Performance

| Data Length  | Correction Level | QR Version | Elapsed Time
| ------------- | ------------- | ------------- | ------------- |
| 50  | L | 3 | 10.83ms |
| 50  | M | 4 | 12.81ms |
| 50  | Q | 5 | 13.93ms |
| 50  | H | 6 | 15.71ms |
| 100  | L | 5 | 14.58ms |
| 100  | M | 6 | 16.24ms |
| 100  | Q | 8 | 20.91ms |
| 100  | H | 10 | 25.72ms |
| 150  | L | 7 | 17.52ms |
| 150  | M | 8 | 20.62ms |
| 150  | Q | 10 | 26.56ms |
| 150  | H | 12 | 32.05ms |
| 200  | L | 9 | 24.24ms |
| 200  | M | 10 | 28.32ms |
| 200  | Q | 12 | 32.27ms |
| 200  | H | 15 | 41.93ms |
