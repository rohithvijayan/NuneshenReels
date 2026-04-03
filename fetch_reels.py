import json
import subprocess
import sys

def get_video_info(url):
    try:
        # Command to get video id and title
        # --get-id: returns the id
        # --get-title: returns the title
        # --flat-playlist: don't extract videos in playlist, just the info (useful for single videos too)
        # --no-warnings: suppress warnings
        result = subprocess.run(
            ['python3', '-m', 'yt_dlp', '--get-id', '--get-title', '--no-warnings', url],
            capture_output=True,
            text=True,
            check=True
        )
        lines = result.stdout.strip().split('\n')
        if len(lines) >= 2:
            # yt-dlp usually returns title then id
            title = lines[0]
            vid_id = lines[1]
            return {"id": vid_id, "title": title}
    except Exception as e:
        print(f"Error processing {url}: {e}")
    return None

def main():
    if len(sys.argv) < 2:
        print("Usage: python3 fetch_reels.py <link1> <link2> ...")
        return

    links = sys.argv[1:]
    reels = []
    
    for link in links:
        info = get_video_info(link)
        if info:
            reels.append(info)
            print(f"Fetched: {info['title']}")
        else:
            print(f"Failed to fetch: {link}")

    print("\nResulting REELS object:")
    print(json.dumps(reels, indent=2, ensure_ascii=False))

if __name__ == "__main__":
    main()
