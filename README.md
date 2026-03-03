# WebRTC Two PCs Setup

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

## 3. Open in Browser

Meta (Receiver):
http://192.168.10.114:8000/init_new.html

Kai Meta (Caller):
http://192.168.10.114:8000/caller_new.html

## 4. Start the Call

Open both pages, then click the Call button on the caller page.
