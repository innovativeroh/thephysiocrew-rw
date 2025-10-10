// app/privacy-policy/page.tsx

import Footer from "@/components/core/footer";
import React from "react";

const PrivacyPolicyPage = () => {
  return (
    <>
      <main className="bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 pt-32 pb-16">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
              Privacy Policy
            </h1>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
              {/* TODO: Replace [Date] with the actual date */}
              Last Updated: [Date]
            </p>
          </div>

          <div className="mt-12 prose prose-lg lg:prose-xl text-gray-700 dark:text-gray-300 max-w-none">
            <section>
              <h2>1. Introduction & Scope</h2>
              <p>
                We at The Physio Crew (“we”, “us”, “our”) are committed to
                protecting your privacy and handling your personal information
                in a secure, responsible manner. This Privacy Policy describes
                how we collect, use, disclose, and retain information when you
                use our website (thephysiocrew.com.au) or engage our services
                (in-clinic or remote). By using our website or providing us your
                personal information, you agree to the practices described here.
              </p>
            </section>

            <section>
              <h2>2. What Information We Collect</h2>
              <p>
                We may collect Personal Information and Non-Personal / Aggregate
                Data, including:
              </p>
              <h3>2.1 Personal Information</h3>
              <ul>
                <li>Name, date of birth, gender</li>
                <li>
                  Contact details: postal address, email address, phone number
                </li>
                <li>
                  Health & medical information relevant to physiotherapy
                  treatment, injury history, medications, referrals, treatment
                  records
                </li>
                <li>
                  Insurance / fund / Medicare / NDIS / WorkCover / TAC details
                </li>
                <li>Payment information (credit card, billing info)</li>
                <li>Appointment booking history, attendance</li>
                <li>Communications (emails, messages)</li>
                <li>
                  Any other information you provide in forms, intake
                  questionnaires, or during consultations
                </li>
              </ul>
              <h3>2.2 Non-Personal / Technical / Usage Data</h3>
              <ul>
                <li>IP address, browser type, device information</li>
                <li>Cookies, usage logs, pages visited, time on site</li>
                <li>Analytics data (how you use the website)</li>
              </ul>
            </section>

            <section>
              <h2>3. How We Use Your Information</h2>
              <p>We use your information for:</p>
              <ul>
                <li>
                  Providing and managing physiotherapy services, programs, and
                  treatments
                </li>
                <li>Appointment booking, scheduling, reminders, follow-up</li>
                <li>
                  Billing, invoicing, claims with health funds, Medicare, NDIS,
                  WorkCover, TAC
                </li>
                <li>Communicating with you (emails, SMS, calls)</li>
                <li>Internal record-keeping, quality improvement, audits</li>
                <li>Clinic administration, staff coordination</li>
                <li>
                  Analytics, monitoring usage, improving our website and
                  services
                </li>
                <li>Legal and regulatory compliance</li>
                <li>
                  Marketing and promotional communications (only with your
                  consent)
                </li>
              </ul>
            </section>

            <section>
              <h2>4. Disclosure & Sharing of Information</h2>
              <p>
                We may share your personal information in certain circumstances,
                including:
              </p>
              <ul>
                <li>
                  Health professionals, allied health, medical specialists, as
                  needed for referral or coordinated care
                </li>
                <li>
                  Health funds, Medicare, NDIS, WorkCover, TAC or relevant
                  insurers
                </li>
                <li>
                  Third-party service providers (e.g. IT hosting, billing,
                  analytics, appointment software) under confidentiality
                  obligations
                </li>
                <li>Legal or regulatory authorities if required by law</li>
                <li>
                  In aggregated or de-identified form (cannot reasonably
                  identify you)
                </li>
                <li>With your explicit consent</li>
              </ul>
              <p>We do not sell your personal health information.</p>
            </section>

            <section>
              <h2>5. Data Storage & Security</h2>
              <ul>
                <li>
                  We store your data on secure servers with appropriate
                  physical, technical, and administrative safeguards
                </li>
                <li>
                  Access to personal health information is restricted to
                  authorized personnel
                </li>
                <li>
                  We use encryption, secure transmission (HTTPS), firewall
                  protection, strong passwords
                </li>
                <li>Regular backups and disaster recovery procedures</li>
                <li>
                  We retain records for the period required by law or
                  professional guidelines, then securely delete or anonymize
                </li>
              </ul>
            </section>

            <section>
              <h2>6. Cookies & Tracking Technologies</h2>
              <ul>
                <li>
                  Our site uses cookies and similar technologies (e.g. Google
                  Analytics) to track usage and improve user experience
                </li>
                <li>
                  You can disable cookies in your browser, but some parts of the
                  site may not function fully
                </li>
                <li>
                  We may use advertising or retargeting cookies (with your
                  consent)
                </li>
              </ul>
            </section>

            <section>
              <h2>7. Third-Party Links</h2>
              <p>
                Our site may include links to external websites. We are not
                responsible for their privacy practices. You should review their
                privacy policies.
              </p>
            </section>

            <section>
              <h2>8. Your Rights & Choices</h2>
              <p>
                Depending on your jurisdiction, you may have rights including:
              </p>
              <ul>
                <li>Access your personal information</li>
                <li>Correct or update your information</li>
                <li>
                  Request deletion or erasure (subject to legal obligations)
                </li>
                <li>Object to or restrict certain processing</li>
                <li>Withdraw consent (for marketing, etc.)</li>
                <li>Lodge a complaint with a privacy regulator</li>
              </ul>
              <p>To exercise these, contact us at the details below.</p>
            </section>

            <section>
              <h2>9. Children & Minors</h2>
              <p>
                We do not knowingly collect personal information from children
                under the age of 16 without parental or guardian consent. If you
                believe we have inadvertently collected such data, contact us to
                remove it.
              </p>
            </section>

            <section>
              <h2>10. Changes to Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will
                post the revised version on our site with the “Last Updated”
                date. Where required by law, we will notify you of material
                changes.
              </p>
            </section>

            <section>
              <h2>11. Contact Us</h2>
              <p>
                If you have questions, requests or complaints about this Privacy
                Policy or how we handle your information, please contact:
              </p>
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

export default PrivacyPolicyPage;
