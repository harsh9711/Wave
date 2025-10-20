// /hooks/useVisitorTracking.ts
import { useEffect, useRef } from "react";

interface VisitorData {
    timestamp: string;
    timeOnSite: number;
    userAgent: string;
    screenResolution: string;
    referrer: string;
    language: string;
    timezone: string;
}

export const useVisitorTracking = (googleSheetsWebhookUrl?: string) => {
    const trackedRef = useRef(false);
    const startTimeRef = useRef(Date.now());

    useEffect(() => {
        if (trackedRef.current || !googleSheetsWebhookUrl) return;
        trackedRef.current = true;

        const visitorData: VisitorData = {
            timestamp: new Date().toISOString(),
            timeOnSite: 0,  
            userAgent: navigator.userAgent,
            screenResolution: `${window.screen.width}x${window.screen.height}`,
            referrer: document.referrer || "Direct Visit",
            language: navigator.language,
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        };

        // On unload, calculate total time spent
        const handleUnload = () => {
            visitorData.timeOnSite = Math.floor((Date.now() - startTimeRef.current) / 1000);
            navigator.sendBeacon(googleSheetsWebhookUrl, JSON.stringify(visitorData));
        };

        window.addEventListener("beforeunload", handleUnload);

        // Send initial visit data
        fetch(googleSheetsWebhookUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(visitorData),
        });

        return () => {
            window.removeEventListener("beforeunload", handleUnload);
        };
    }, [googleSheetsWebhookUrl]);
};
