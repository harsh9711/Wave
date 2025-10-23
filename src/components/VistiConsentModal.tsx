"use client";

import { useEffect, useState } from "react";

interface VisitorConsentModalProps {
    webhookUrl: string;
}

export default function VisitorConsentModal({ webhookUrl }: VisitorConsentModalProps) {
    const [show, setShow] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        contact: "",
    });

    useEffect(() => {
        const consent = localStorage.getItem("visitorConsent");
        if (!consent) {
            setShow(true);
        }
    }, []);

    const handleConsent = async (consentGiven: boolean) => {
        if (!consentGiven) {
            localStorage.setItem("visitorConsent", "false");
            setShow(false);
            return;
        }

        if (!formData.name || !formData.email || !formData.contact) {
            alert("Please fill in all details before continuing.");
            return;
        }

        localStorage.setItem("visitorConsent", "true");
        setShow(false);

        const visitorData = {
            timestamp: new Date().toISOString(),
            name: formData.name,
            email: formData.email,
            contact: formData.contact,
            userAgent: navigator.userAgent,
            language: navigator.language,
            screenResolution: `${window.screen.width}x${window.screen.height}`,
            referrer: document.referrer || "Direct",
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        };

        try {
            await fetch(webhookUrl, {
                method: "POST",
                mode: "cors", 
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(visitorData),
            });

            console.log("✅ Data sent successfully:", visitorData);
        } catch (error) {
            console.error("❌ Failed to send data:", error);
        }
    };

    if (!show) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full mx-4 text-center">
                <h2 className="text-xl font-bold mb-4">We respect your privacy</h2>
                <p className="text-gray-600 mb-4">
                    Please provide your details and consent to anonymous data collection to improve your experience.
                </p>

                {/* Input Fields */}
                <div className="flex flex-col gap-3 mb-4 text-left">
                    <input
                        type="text"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="border border-gray-300 rounded px-3 py-2 w-full"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="border border-gray-300 rounded px-3 py-2 w-full"
                    />
                    <input
                        type="tel"
                        placeholder="Contact Number"
                        value={formData.contact}
                        onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                        className="border border-gray-300 rounded px-3 py-2 w-full"
                    />
                </div>

                {/* Buttons */}
                <div className="flex justify-center gap-4">
                    <button
                        onClick={() => handleConsent(true)}
                        className="bg-green-500 text-white px-4 py-2 rounded"
                    >
                        Submit & Consent
                    </button>
                    <button
                        onClick={() => handleConsent(false)}
                        className="bg-gray-300 text-black px-4 py-2 rounded"
                    >
                        No
                    </button>
                </div>
            </div>
        </div>
    );
}
