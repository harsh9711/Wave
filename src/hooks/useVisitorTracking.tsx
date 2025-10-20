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
        const trackVisitor = async () => {
            if (trackedRef.current) return;

            const timeOnSite = Math.floor((Date.now() - startTimeRef.current) / 1000);

            const visitorData: VisitorData = {
                timestamp: new Date().toISOString(),
                timeOnSite,
                userAgent: navigator.userAgent,
                screenResolution: `${window.screen.width}x${window.screen.height}`,
                referrer: document.referrer || "Direct",
                language: navigator.language,
                timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
            };

            console.log("Visitor tracked:", visitorData);

            // Send to Google Sheets if webhook URL is provided
            if (googleSheetsWebhookUrl) {
                try {
                    await fetch(googleSheetsWebhookUrl, {
                        method: "POST",
                        mode: "no-cors",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(visitorData),
                    });
                    console.log("Data sent to Google Sheets");
                } catch (error) {
                    console.error("Error sending to Google Sheets:", error);
                }
            }

            trackedRef.current = true;
        };

        // Track after 5 seconds
        const timer = setTimeout(trackVisitor, 5000);

        return () => clearTimeout(timer);
    }, [googleSheetsWebhookUrl]);
};
