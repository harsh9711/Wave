"use client";
import { useState, useEffect } from "react";
import { useVisitorTracking } from "@/hooks/useVisitorTracking";

interface Props {
    webhookUrl: string;
}

export default function VisitorConsentModal({ webhookUrl }: Props) {
    const [isOpen, setIsOpen] = useState(false);
    const [consentGiven, setConsentGiven] = useState(false);
    const [userInfo, setUserInfo] = useState({
        name: "",
        email: "",
        age: "",
    });

    // ✅ Show modal only if user hasn’t given consent before
    useEffect(() => {
        const savedConsent = localStorage.getItem("visitorConsent");
        if (!savedConsent) {
            setIsOpen(true);
        } else if (savedConsent === "true") {
            setConsentGiven(true);
        }
    }, []);

    // ✅ Trigger tracking only after consent
    useVisitorTracking(webhookUrl, consentGiven ? userInfo : undefined, consentGiven);

    const handleAllow = () => {
        setConsentGiven(true);
        setIsOpen(false);
        localStorage.setItem("visitorConsent", "true");
    };

    const handleDecline = () => {
        setIsOpen(false);
        localStorage.setItem("visitorConsent", "false");
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 backdrop-blur-sm">
            <div className="bg-white rounded-2xl shadow-xl p-6 max-w-md w-full text-center">
                <h2 className="text-xl font-semibold mb-3 text-gray-800">
                    Allow Visitor Information Access
                </h2>
                <p className="text-gray-600 mb-4 text-sm">
                    We collect anonymous browser details and, with your consent,
                    optional info like your name and email to improve our services.
                </p>

                {/* Optional user info form */}
                <div className="space-y-3 mb-4">
                    <input
                        type="text"
                        placeholder="Your Name (optional)"
                        className="w-full border rounded-lg p-2 text-sm"
                        value={userInfo.name}
                        onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
                    />
                    <input
                        type="email"
                        placeholder="Your Email (optional)"
                        className="w-full border rounded-lg p-2 text-sm"
                        value={userInfo.email}
                        onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
                    />
                    <input
                        type="number"
                        placeholder="Age (optional)"
                        className="w-full border rounded-lg p-2 text-sm"
                        value={userInfo.age}
                        onChange={(e) => setUserInfo({ ...userInfo, age: e.target.value })}
                    />
                </div>

                <div className="flex justify-center gap-3">
                    <button
                        onClick={handleDecline}
                        className="px-4 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100 transition"
                    >
                        Decline
                    </button>
                    <button
                        onClick={handleAllow}
                        className="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition"
                    >
                        Allow
                    </button>
                </div>

                <p className="text-xs text-gray-400 mt-3">
                    You can withdraw your consent anytime.
                </p>
            </div>
        </div>
    );
}
