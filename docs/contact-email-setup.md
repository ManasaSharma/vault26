# Contact delivery with Formspree

1. Create a form at https://formspree.io/ and verify bmanasasharma@outlook.com as the receiving address.
2. Copy its public endpoint, for example https://formspree.io/f/abcdefgh.
3. In Vercel → manasa-portfolio → Environment Variables, add FORMSPREE_FORM_ID with only the final ID (abcdefgh). Select Production and Preview.
4. Deploy the updated code. Environment changes require a new deployment.
5. Send a test message yourself and verify it arrives in Outlook and that Reply addresses the visitor.

No Resend key, custom sender domain, or contact Redis configuration is needed. Redis remains in use for the separate visitor counter. Existing RESEND_API_KEY and CONTACT_FROM_EMAIL variables are no longer used by this route.

The server validates email/message and optional date/time before relaying to the fixed Formspree form. Formspree handles delivery and spam filtering; review its spam/domain settings in the dashboard. Calendar preferences are not bookings. Unconfigured delivery returns an honest error and keeps the entered message.
