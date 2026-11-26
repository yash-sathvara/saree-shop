import os
import cv2

VIDEO_PATH = os.path.join("src", "assets", "videos", "saree-shop.mp4")
OUT_DIR = os.path.join("scratch", "saree-shop-frames")
INTERVAL_SEC = 0.010

os.makedirs(OUT_DIR, exist_ok=True)

cap = cv2.VideoCapture(VIDEO_PATH)
if not cap.isOpened():
    raise RuntimeError(f"Failed to open {VIDEO_PATH}")

fps = cap.get(cv2.CAP_PROP_FPS)
total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
duration = total_frames / fps

# Read all source frames once into memory? 1252 * 720 * 1280 * 3 is ~3.4 GB, so stream sequentially instead!
# Compute timestamps at 0.010s intervals
timestamps_ms = list(range(0, int(round(duration * 1000)) + 1, int(round(INTERVAL_SEC * 1000))))

# Map each source frame index to the list of timestamps (in ms) that fall on it
frame_to_ts = {}
for ts_ms in timestamps_ms:
    t = ts_ms / 1000.0
    idx = min(int(t * fps), total_frames - 1)
    frame_to_ts.setdefault(idx, []).append(ts_ms)

saved = 0
idx = 0
while True:
    ret, frame = cap.read()
    if not ret:
        break
    if idx in frame_to_ts:
        # Encode JPEG once per unique source frame, then write bytes for each 0.010s timestamp
        ok, buf = cv2.imencode(".jpg", frame, [int(cv2.IMWRITE_JPEG_QUALITY), 90])
        if ok:
            raw = buf.tobytes()
            for ts_ms in frame_to_ts[idx]:
                out_path = os.path.join(OUT_DIR, f"frame_{ts_ms / 1000.0:06.3f}s.jpg")
                with open(out_path, "wb") as f:
                    f.write(raw)
                saved += 1
    idx += 1

cap.release()
print(f"Done. Source frames={idx}, fps={fps:.3f}, duration={duration:.3f}s, saved={saved} screenshots in {OUT_DIR}")
