'use client';

import Image from "next/image";

const pageUrl = 'https://www.grokani.love/'
const text = encodeURIComponent("Check what I just found out! It's amazing!");
const hashtags = encodeURIComponent("share");

export default function SocialShare() {
    const handleShare = (platform: "twitter" | "facebook" | "telegram") => {
        let shareUrl = "";

        switch (platform) {
            case "twitter":
                shareUrl = `https://twitter.com/intent/tweet?url=${pageUrl}&text=${text}&hashtags=${hashtags}`;
                break;
            case "facebook":
                shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`;
                break;
            case "telegram":
                shareUrl = `https://t.me/share/url?url=${pageUrl}&text=${text}`;
                break;
        }

        window.open(shareUrl, "_blank", "noopener,noreferrer");
    };

    return (
        <div className="flex flex-col items-center gap-5 bg-rose-300 py-3 px-1 rounded-l-xl">
            <button
                onClick={() => handleShare("twitter")}
                aria-label="Share on Twitter"
                className="hover:opacity-80 transition"
            >
                <Image src="/twitter.svg" alt="Telegram" width={35} height={35} />
            </button>
            <button
                onClick={() => handleShare("facebook")}
                aria-label="Share on Facebook"
                className="hover:opacity-80 transition"
            >
                <Image src="/facebook.svg" alt="Telegram" width={35} height={35} />
            </button>
            <button
                onClick={() => handleShare("telegram")}
                aria-label="Share on Telegram"
                className="hover:opacity-80 transition"
            >
                <Image src="/telegram.svg" alt="Telegram" width={35} height={35} />
            </button>
        </div>
    );
}
