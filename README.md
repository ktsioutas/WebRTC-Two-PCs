# WebRTC Two PCs Setup in a windows or linux machine

## 1. Start the HTTP Server

Run the Python HTTP server:

```bash
python3 -m http.server 8000
```

## 2. Start the Signaling Server

Open another terminal and run:

```bash
node server.js
```

## 3. Open in Browser first the caller (just open with browser)

caller_new.html

## 3. And then the callee (just open with browser)

init_new.html



## 4. Start the Call

Open both pages, then click the Call button on the caller page.
