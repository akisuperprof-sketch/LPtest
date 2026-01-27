export const track = async (event: string, meta?: any) => {
    try {
        const payload = {
            event,
            ts: Date.now(),
            page: typeof window !== 'undefined' ? window.location.pathname : undefined,
            meta
        };

        // Send to server API
        await fetch('/api/track', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        // Dev log
        if (process.env.NODE_ENV === 'development') {
            console.log(`[Track]: ${event}`, payload);
        }
    } catch (err) {
        // Fail silently so UX is not affected
        console.error('Tracking failed', err);
    }
};
