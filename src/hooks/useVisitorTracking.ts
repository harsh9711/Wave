import { useEffect, useRef } from "react";

interface VisitorData {
    timestamp: string;
    timeOnSite: number;
    userAgent: string;
    screenResolution: string;
    referrer: string;
    language: string;
    timezone: string;
    name?: string;
    email?: string;
    age?: string;
}

export const useVisitorTracking = (
    webhookUrl: string,
    userInfo?: { name?: string; email?: string; age?: string },
    enabled: boolean = false
) => {
    const trackedRef = useRef(false);
    const startTimeRef = useRef(Date.now());

    useEffect(() => {
        if (!enabled || trackedRef.current) return;
        trackedRef.current = true;

        const sendVisitorData = () => {
            const timeOnSite = Math.round((Date.now() - startTimeRef.current) / 1000);
            const visitorData: VisitorData = {
                timestamp: new Date().toISOString(),
                timeOnSite,
                userAgent: navigator.userAgent,
                screenResolution: `${window.screen.width}x${window.screen.height}`,
                referrer: document.referrer || "Direct",
                language: navigator.language,
                timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
                ...userInfo,
            };

            fetch(webhookUrl, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(visitorData),
            }).catch((err) => console.error("Error sending visitor data:", err));
        };

        window.addEventListener("beforeunload", sendVisitorData);
        return () => window.removeEventListener("beforeunload", sendVisitorData);
    }, [enabled, webhookUrl, userInfo]);
};
