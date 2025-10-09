// app/terms-of-service/page.tsx

import Footer from '@/components/core/footer';
import React from 'react';

const TermsOfServicePage = () => {
  return (
    <>
    <main className="bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Terms of Service
          </h1>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
            {/* TODO: Replace [Date] with the actual date */}
            Last Updated: [Date]
          </p>
        </div>

        <div className="mt-12 prose prose-lg lg:prose-xl text-gray-700 dark:text-gray-300 max-w-none">
            <p>These Terms of Service (“Terms”) govern your access to and use of our website, booking system, and our physiotherapy / health services. By using our site or services, you agree to be bound by these Terms.</p>
          
          <section>
            <h2>1. Definitions</h2>
            <ul>
                <li><strong>“We / Us / Our”:</strong> The Physio Crew</li>
                <li><strong>“You / Your / Client / Patient / User”:</strong> any person accessing or using the website or receiving services</li>
                <li><strong>“Services”:</strong> physiotherapy, remedial massage, clinical exercise programs, telehealth, allied health, and related offerings</li>
                <li><strong>“Website”:</strong> thephysiocrew.com.au and associated web pages, booking portal</li>
            </ul>
          </section>

          <section>
            <h2>2. Use of Website & Booking</h2>
            <ul>
                <li>You must be legally capable to enter into these Terms</li>
                <li>You agree to use the Website, booking system, and content only for lawful purposes</li>
                <li>You are responsible for keeping your account credentials secure</li>
                <li>You may not misuse or disrupt the Website, or attempt to gain unauthorized access</li>
            </ul>
          </section>
          
          <section>
            <h2>3. Service Provision & Health Information</h2>
            <ul>
                <li>Any information, advice, or content on the Website or provided by staff is for general educational purposes and does not replace professional medical advice</li>
                <li>Treatment outcomes vary; we cannot guarantee specific results</li>
                <li>You must provide accurate, complete medical and health information, and notify us of changes</li>
                <li>You consent to assessment, diagnosis, treatment, and clinical procedures as deemed appropriate by our clinicians</li>
            </ul>
          </section>

          <section>
            <h2>4. Booking, Cancellations & No-Shows</h2>
            <ul>
                <li>All appointments must be booked via our system or by phone/email</li>
                <li>Please arrive on time, or notify us if running late</li>
                {/* TODO: Specify your cancellation policy here */}
                <li><strong>Cancellation policy:</strong> [specify — e.g., 24 hours notice required, cancellation fee may apply]</li>
                <li>No-show or late cancellations may incur full session fees</li>
            </ul>
          </section>

          <section>
            <h2>5. Payment & Billing</h2>
            <ul>
                <li>You agree to pay fees for services rendered, as per our schedule</li>
                <li>Payment to be made at or before each appointment (or per agreed terms)</li>
                <li>We may submit claims to health funds, Medicare, NDIS, etc. on your behalf, but you remain responsible for any outstanding amounts</li>
                <li>If unpaid, we may charge late fees or recovery costs</li>
            </ul>
          </section>
          
          <section>
            <h2>6. Insurance, Fund & Third-Party Claims</h2>
            <ul>
              <li>If you are claiming via private health fund, NDIS, WorkCover, TAC, Medicare EPC, etc., you must provide accurate and current details</li>
              <li>You remain liable for the portion not covered by third parties</li>
              <li>We may pause service until proper authorizations or referrals are verified</li>
            </ul>
          </section>

          <section>
            <h2>7. Intellectual Property</h2>
            <ul>
                <li>All content on the Website (text, images, logos, graphics) is owned or licensed by us</li>
                <li>You may not reproduce, republish, distribute, or exploit our content without permission</li>
                <li>No license or rights granted, except for your use in accordance with these Terms</li>
            </ul>
          </section>

          <section>
            <h2>8. Disclaimer & Limitation of Liability</h2>
            <ul>
                <li>We make no warranties (express or implied) regarding services, website, or results</li>
                <li>To the maximum extent permitted by law, we exclude liability for indirect, incidental, consequential damages</li>
                <li>Our liability (if any) is capped to the amount you have paid to us for the relevant service</li>
                <li>Nothing in these Terms excludes liabilities which cannot be excluded under applicable law</li>
            </ul>
          </section>

          <section>
            <h2>9. Indemnification</h2>
            <p>You agree to indemnify, defend, and hold us (and our officers, employees, agents) harmless from any claims, liabilities, losses, costs, damages arising from your breach of these Terms or misuse of the Website / services.</p>
          </section>
          
          <section>
            <h2>10. Privacy & Data Use</h2>
            <p>Your use of our Website and services is also governed by our Privacy Policy (above). You consent to our collection, use, and disclosure of your information as described there.</p>
          </section>
          
          <section>
            <h2>11. Termination & Suspension</h2>
            <p>We may suspend or terminate your access to the Website or services if you breach these Terms, act unlawfully, or interfere with operations.</p>
          </section>

          <section>
            <h2>12. Governing Law & Dispute Resolution</h2>
            <p>These Terms are governed by the laws of [State / Territory] (e.g. Victoria, Australia) or your applicable jurisdiction. Disputes should be resolved via negotiation, mediation, or courts of competent jurisdiction.</p>
          </section>

          <section>
            <h2>13. Severability</h2>
            <p>If any provision of these Terms is held invalid or unenforceable, the remainder shall remain in full force and effect.</p>
          </section>
          
          <section>
            <h2>14. Changes to Terms</h2>
            <p>We may update these Terms from time to time. We will post the revised version with an updated date. Continued use of our Website or services after changes constitutes acceptance.</p>
          </section>

          <section>
            <h2>11. Contact Us</h2>
            <p>If you have questions, requests or complaints please contact:</p>
            <div className="mt-4 p-6 border rounded-lg bg-gray-100 dark:bg-gray-800 dark:border-gray-700">
                <p className="font-bold">The Physio Crew</p>
                <p>Address: 2/221 Drummond Street, Carlton, VIC 3053</p>
                <p>Phone: 03 9116 8693</p>
                {/* TODO: Replace with your actual contact email */}
                <p>Tullamarine: 03 9116 8691</p>
                <p>Tullamarine: admin@thephysiocrew.com.au</p>
                <p>Carlton: 03 9116 8693</p>
                <p>Carlton: carlton@thephysiocrew.com.au</p>
            </div>
          </section>
        </div>
      </div>
    </main>
    <Footer />
    </>
  );
};

export default TermsOfServicePage;